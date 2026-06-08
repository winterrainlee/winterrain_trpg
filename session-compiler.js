const SessionCompiler = {
  prologueVisibleText(prologue) {
    return `${prologue.summary} 이제 플레이어는 자유롭게 행동을 선언할 수 있다.`;
  },

  initialSceneFromPrologue(prologue) {
    return {
      title: prologue.sceneTitle,
      visibleText: SessionCompiler.prologueVisibleText(prologue),
      choices: ["주변을 확인한다", "NPC에게 묻는다", "직접 살펴본다"],
      summary: prologue.summary,
    };
  },

  initialRun({ id, now, prologue, initialKnownFacts, npcCount }) {
    const runtime = {
      phase: "playing",
      turn: 1,
      currentDate: prologue.date,
      currentTime: prologue.time,
      currentPlace: prologue.place,
      currentSceneTitle: prologue.sceneTitle,
      currentSceneId: "turn-0001",
      lastPlayedAt: null,
    };
    const initialScene = SessionCompiler.initialSceneFromPrologue(prologue);
    const initialTurnLog = {
      turn: 1,
      type: "prologue",
      rawInput: "",
      action: null,
      resolution: null,
      scene: initialScene,
      knownFactsAdded: initialKnownFacts,
      createdAt: now,
    };

    return {
      runtime,
      initialScene,
      initialTurnLog,
      session: {
        knownFacts: initialKnownFacts,
        recentChange: "프롤로그가 시작되었다",
        log: [],
        turnLog: [initialTurnLog],
      },
      run: {
        mode: "embedded",
        worldFileId: id,
        status: "playing",
        turnLog: [initialTurnLog],
        currentScene: initialScene,
      },
      timeline: [
        {
          turn: 1,
          type: "prologue",
          title: prologue.sceneTitle,
          summary: prologue.summary,
          createdAt: now,
        },
      ],
      summary: {
        daysPassed: 0,
        turnsTotal: 1,
        npcCount,
        worldChanges: [],
      },
    };
  },
};
