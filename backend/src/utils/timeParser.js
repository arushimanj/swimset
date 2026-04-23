const parseTimeToSeconds = (timeStr) => {
  // If already a number, return it
  if (typeof timeStr === "number") return timeStr;

  // If it's just seconds as string
  if (!timeStr.includes(":")) {
    return parseFloat(timeStr);
  }

  // Format: mm:ss
  const [minutes, seconds] = timeStr.split(":").map(Number);

  return minutes * 60 + seconds;
};

module.exports = parseTimeToSeconds;
