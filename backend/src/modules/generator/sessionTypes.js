const randomPick = (arr) => arr[Math.floor(Math.random() * arr.length)];

module.exports = {
  technique: (user) => {
    const variants = [
      [
        "100 free / 50 kick / 50 drill",
        "20x50 mainstroke kick",
        "6x100 IM drill/swim"
      ],
      [
        "1000 mixed warmup",
        "6x100 scull",
        "9x100 drill variations"
      ]
    ];

    return {
      type: "technique",
      mainSet: randomPick(variants)
    };
  },

  aerobic: (user) => {
    const variants = [
      ["800 pull", "2x400 swim", "4x200", "8x100"],
      ["16x200 (8 pull, 8 swim)"],
      ["50-100-150-200 ladder"]
    ];

    return {
      type: "aerobic",
      mainSet: randomPick(variants)
    };
  },

  sprint: (user) => {
  const event = user.mainEvent;

  if (event.includes("50")) {
    return {
      type: "sprint",
      mainSet: [
        "8x50 dive long rest",
        "4x50 sprint short rest"
      ]
    };
  }

  if (event.includes("100")) {
    return {
      type: "sprint",
      mainSet: [
        "6x100 (dive + broken + simulation)"
      ]
    };
  }

  if (event.includes("200")) {
    return {
      type: "sprint",
      mainSet: [
        "3x200 (broken race simulation)"
      ]
    };
  }

  // fallback
  return {
    type: "sprint",
    mainSet: ["ASK COACH FOR MORE!"]
  };
},

  LT: (user) => {
  const event = user.mainEvent;

  if (event.includes("50")) {
    return {
      type: "LT",
      mainSet: [
        "8x50 dive @ 5-7 min rest (max effort)",
        "4x50 sprint @ 2:00"
      ]
    };
  }

  if (event.includes("100")) {
    return {
      type: "LT",
      mainSet: [
        "6x100:",
        "1 & 3 dive straight",
        "2 & 4 broken (2x50 w/20s rest)",
        "5 & 6 race simulation (25-50-25 w/rest)"
      ]
    };
  }

  if (event.includes("200")) {
    return {
      type: "LT",
      mainSet: [
        "3x200:",
        "1 straight dive",
        "2 broken (2x100 w/30s)",
        "3 broken (4x50 w/20s)"
      ]
    };
  }

  return {
    type: "LT",
    mainSet: ["6x100 threshold effort"]
  };
},

  mixed: (user) => ({
    type: "mixed",
    mainSet: ["40x50 (25 sprint / 25 easy)"]
  }),

  recovery: (user) => ({
    type: "recovery",
    mainSet: [
      "1000 easy swim",
      "30 min continuous swim",
      "15 min kick moderate",
      "drill + loosen"
    ]
  }),

  race: (user) => ({
    type: "race",
    mainSet: [
      "4x50 race pace",
      "2x100 broken",
      "starts + turns"
    ]
  })
};
