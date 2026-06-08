const SessionStore = {
  latestTurnEntry(world) {
    const sessionTurnLog = world?.session?.turnLog || [];
    const runTurnLog = world?.run?.turnLog || [];
    const turnLog = sessionTurnLog.length ? sessionTurnLog : runTurnLog;
    return turnLog[turnLog.length - 1] || null;
  },

  latestScene(world, prologue) {
    return SessionStore.latestTurnEntry(world)?.scene || world?.run?.currentScene || SessionCompiler.initialSceneFromPrologue(prologue);
  },

  syncWorldFromState({ savedWorld, appState, phase = "playing", scene, rollText }) {
    if (!savedWorld || !appState.runtime) return null;

    const now = new Date().toISOString();
    savedWorld.savedAt = now;
    savedWorld.saveMeta = {
      ...(savedWorld.saveMeta || {}),
      updatedAt: now,
      phase,
      turn: appState.runtime.turn || 1,
      lastSceneTitle: appState.runtime.currentSceneTitle || scene?.title || savedWorld.saveMeta?.lastSceneTitle || "",
      lastPlayedAt: now,
    };
    savedWorld.runtime = {
      ...(savedWorld.runtime || {}),
      ...appState.runtime,
      phase,
      lastPlayedAt: now,
    };
    savedWorld.player = {
      ...(savedWorld.player || {}),
      status: {
        hp: appState.player.hp,
        fatigue: appState.player.fatigue,
        morale: appState.player.morale,
      },
    };
    savedWorld.session = {
      ...(savedWorld.session || {}),
      knownFacts: [...appState.knownFacts],
      recentChange: appState.recentChange,
      log: [...appState.log],
      turnLog: [...((savedWorld.session?.turnLog || []).length ? savedWorld.session.turnLog : savedWorld.run?.turnLog || [])],
    };

    if (scene) {
      savedWorld.run = {
        ...(savedWorld.run || {}),
        mode: "embedded",
        status: phase,
        turnLog: savedWorld.session.turnLog,
        currentScene: scene,
        currentRollText: rollText,
      };
    }

    savedWorld.summary = {
      ...(savedWorld.summary || {}),
      turnsTotal: appState.runtime.turn || 1,
      npcCount: savedWorld.npcs?.length || appState.npcs.length,
      worldChanges: savedWorld.summary?.worldChanges || [],
    };

    return savedWorld;
  },

  async persistWorld({ fileName, world }) {
    const response = await fetch(`/api/worlds/${encodeURIComponent(fileName)}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ world }),
    });
    const result = await response.json();
    if (!response.ok || !result.ok) throw new Error(result.error || "저장 실패");
    return result;
  },
};
