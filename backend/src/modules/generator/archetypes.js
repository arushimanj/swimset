module.exports = {
  threshold: {
    warmup: () => [
      "200 swim",
      "4x50 drill",
      "4x50 build"
    ],
    mainSet: (pace) => [
      `8x100 @ ${pace} threshold`,
      `4x50 fast @ ${pace - 2}`
    ],
    cooldown: () => [
      "200 easy"
    ]
  },

  aerobic: {
    warmup: () => [
      "300 swim",
      "4x50 kick"
    ],
    mainSet: (pace) => [
      `5x200 @ ${pace} aerobic`,
      `4x100 pull @ ${pace + 2}`
    ],
    cooldown: () => [
      "200 easy"
    ]
  },

  sprint: {
    warmup: () => [
      "200 swim",
      "4x25 build"
    ],
    mainSet: (pace) => [
      `12x25 sprint @ max effort`,
      `4x50 easy`
    ],
    cooldown: () => [
      "200 easy"
    ]
  }
};
