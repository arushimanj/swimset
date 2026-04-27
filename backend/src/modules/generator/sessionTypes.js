const randomPick = (arr) => arr[Math.floor(Math.random() * arr.length)];

module.exports = {
  technique: (user) => {
    const variants = [
      [
        "100 free / 50 kick / 50 drill",
        "20 x 50 mainstroke kick",
        "6 x 100 IM drill/swim"
      ],
      [
        "1000 mixed warmup",
        "6 x 100 scull",
        "9 x 100 drill variations"
      ]
    ];

    return {
      type: "technique",
      mainSet: randomPick(variants)
    };
  },

  aerobic: (user) => {
    const variants = [
      ["800 pull", "2 x 400 swim", "4 x 200", "8 x 100", "16 x 50"],
      ["16 x 200 (8 pull, 8 swim)"],
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
        "8 x 50 dive long rest",
        "4 x 50 sprint short rest"
      ]
    };
  }

  if (event.includes("100")) {
    return {
      type: "sprint",
      mainSet: [
        "6 x 100 (dive + broken + simulator)"
      ]
    };
  }

  if (event.includes("200")) {
    return {
      type: "sprint",
      mainSet: [
        "3 x 200 (broken race simulation)"
      ]
    };
  }

  // fallback
  return {
    type: "sprint",
    mainSet: ["ASK COACH FOR MORE!"]
  };
},

  USRPT: (user) => ({
  type: "USRPT",
  mainSet: [
    "3 rounds:",
    "4 x 25 @ :45 (race pace)",
    "4 x 50 @ 1:30 (race pace)",
    "4 x 25 @ :45 (race pace)"
  ]
}),

  LT: (user) => {
  const event = user.mainEvent;

  if (event.includes("50")) {
    return {
      type: "LT",
      mainSet: [
        "8 x 50 dive @ 5-7 min rest (max effort)",
        "4 x 50 sprint @ 2:00"
      ]
    };
  }

  if (event.includes("100")) {
    return {
      type: "LT",
      mainSet: [
        "6 x 100:",
        "1 & 3 dive straight",
        "2 & 4 broken (2 x 50 w/20s rest)",
        "5 & 6 race simulation (25-50-25 w/rest)"
      ]
    };
  }

  if (event.includes("200")) {
    return {
      type: "LT",
      mainSet: [
        "3 x 200:",
        "1 straight dive",
        "2 broken (2 x 100 w/30s)",
        "3 broken (4 x 50 w/20s)"
      ]
    };
  }

  return {
    type: "LT",
    mainSet: ["6 x 100 threshold effort"]
  };
},

  mixed: (user) => ({
    type: "mixed",
    mainSet: ["40 x 50 (25 sprint / 25 easy)"]
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
      "4 x 50 race pace",
      "2 x 100 broken",
      "starts + turns"
    ]
  })
};
