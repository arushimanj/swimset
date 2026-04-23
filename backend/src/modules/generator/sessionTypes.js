module.exports = {
  technique: (user) => ({
    type: "technique",
    mainSet: [
      "20x50 mainstroke kick",
      "6x100 IM drill/swim",
      "6x100 scull"
    ]
  }),

  aerobic: (user) => ({
    type: "aerobic",
    mainSet: [
      "800 pull",
      "2x400 swim",
      "4x200",
      "8x100"
    ]
  }),

  sprint: (user) => ({
    type: "sprint",
    mainSet: [
      "8x50 sprint long rest",
      "4x50 sprint short rest"
    ]
  }),

  mixed: (user) => ({
    type: "mixed",
    mainSet: [
      "40x50 (25 sprint / 25 easy)"
    ]
  })
};