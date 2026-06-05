const http = require("http");
const fs = require("fs");
const path = require("path");

const rootDir = __dirname;
const worldsDir = path.join(rootDir, "data", "worlds");
const port = Number(process.env.PORT || 4173);

const mimeTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
};

function sendJson(response, status, payload) {
  response.writeHead(status, { "content-type": "application/json; charset=utf-8" });
  response.end(JSON.stringify(payload));
}

function readBody(request) {
  return new Promise((resolve, reject) => {
    let body = "";
    request.on("data", (chunk) => {
      body += chunk;
      if (body.length > 1_000_000) {
        reject(new Error("Request body too large"));
        request.destroy();
      }
    });
    request.on("end", () => resolve(body));
    request.on("error", reject);
  });
}

function safeFileName(fileName) {
  const baseName = path.basename(String(fileName || ""));
  const cleaned = baseName.replace(/[^\p{L}\p{N}._ -]/gu, "_").trim();
  return cleaned.endsWith(".json") ? cleaned : `${cleaned || "world"}.json`;
}

function uniquePath(fileName) {
  const parsed = path.parse(fileName);
  let candidate = path.join(worldsDir, fileName);
  let index = 2;

  while (fs.existsSync(candidate)) {
    candidate = path.join(worldsDir, `${parsed.name}-${index}${parsed.ext}`);
    index += 1;
  }

  return candidate;
}

async function saveWorld(request, response) {
  try {
    const payload = JSON.parse(await readBody(request));
    const fileName = safeFileName(payload.fileName);
    const targetPath = uniquePath(fileName);

    fs.mkdirSync(worldsDir, { recursive: true });
    fs.writeFileSync(targetPath, `${JSON.stringify(payload.world, null, 2)}\n`, { flag: "wx" });

    sendJson(response, 201, {
      ok: true,
      fileName: path.basename(targetPath),
      path: path.relative(rootDir, targetPath),
    });
  } catch (error) {
    sendJson(response, 400, { ok: false, error: error.message });
  }
}

function readWorldSummaries() {
  if (!fs.existsSync(worldsDir)) return [];

  return fs.readdirSync(worldsDir)
    .filter((fileName) => fileName.endsWith(".json"))
    .map((fileName) => {
      const filePath = path.join(worldsDir, fileName);
      const stat = fs.statSync(filePath);
      try {
        const world = JSON.parse(fs.readFileSync(filePath, "utf8"));
        return {
          fileName,
          path: path.relative(rootDir, filePath),
          updatedAt: world.saveMeta?.updatedAt || stat.mtime.toISOString(),
          title: world.saveMeta?.displayTitle || world.title || fileName,
          playerName: world.saveMeta?.playerName || world.player?.name || "PC",
          genre: world.saveMeta?.genre || world.world?.genre || "",
          phase: world.saveMeta?.phase || world.runtime?.phase || "setup_ready",
          turn: world.saveMeta?.turn || world.runtime?.turn || 1,
          lastSceneTitle: world.saveMeta?.lastSceneTitle || world.runtime?.currentSceneTitle || "",
        };
      } catch (error) {
        return {
          fileName,
          path: path.relative(rootDir, filePath),
          updatedAt: stat.mtime.toISOString(),
          title: fileName,
          error: error.message,
        };
      }
    })
    .sort((a, b) => String(b.updatedAt).localeCompare(String(a.updatedAt)));
}

function listWorlds(response) {
  sendJson(response, 200, { ok: true, worlds: readWorldSummaries() });
}

function loadWorld(requestUrl, response) {
  try {
    const rawFileName = decodeURIComponent(requestUrl.pathname.replace("/api/worlds/", ""));
    const fileName = safeFileName(rawFileName);
    const targetPath = path.join(worldsDir, fileName);

    if (!targetPath.startsWith(worldsDir) || !fs.existsSync(targetPath)) {
      sendJson(response, 404, { ok: false, error: "World file not found" });
      return;
    }

    sendJson(response, 200, {
      ok: true,
      fileName,
      path: path.relative(rootDir, targetPath),
      world: JSON.parse(fs.readFileSync(targetPath, "utf8")),
    });
  } catch (error) {
    sendJson(response, 400, { ok: false, error: error.message });
  }
}

function serveStatic(request, response) {
  const requestUrl = new URL(request.url, `http://${request.headers.host}`);
  const pathname = requestUrl.pathname === "/" ? "/index.html" : requestUrl.pathname;
  const targetPath = path.normalize(path.join(rootDir, pathname));

  if (!targetPath.startsWith(rootDir)) {
    response.writeHead(403);
    response.end("Forbidden");
    return;
  }

  fs.readFile(targetPath, (error, content) => {
    if (error) {
      response.writeHead(404);
      response.end("Not found");
      return;
    }

    response.writeHead(200, {
      "content-type": mimeTypes[path.extname(targetPath)] || "application/octet-stream",
      "cache-control": "no-store",
    });
    response.end(content);
  });
}

const server = http.createServer((request, response) => {
  if (request.method === "POST" && request.url === "/api/worlds") {
    saveWorld(request, response);
    return;
  }

  if (request.method === "GET") {
    const requestUrl = new URL(request.url, `http://${request.headers.host}`);
    if (requestUrl.pathname === "/api/worlds") {
      listWorlds(response);
      return;
    }
    if (requestUrl.pathname.startsWith("/api/worlds/")) {
      loadWorld(requestUrl, response);
      return;
    }
  }

  if (request.method === "GET" || request.method === "HEAD") {
    serveStatic(request, response);
    return;
  }

  response.writeHead(405);
  response.end("Method not allowed");
});

server.listen(port, "127.0.0.1", () => {
  console.log(`Winterrain TRPG server: http://127.0.0.1:${port}/`);
});
