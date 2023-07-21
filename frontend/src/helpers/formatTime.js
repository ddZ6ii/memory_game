const convertTime = (timeInMilliseconds) => {
  const time = Number(timeInMilliseconds);

  if (Number.isNaN(time) || !timeInMilliseconds) return null;

  const milliseconds = Math.floor(time % 1000);
  const seconds = Math.floor((time / 1000) % 60);
  const minutes = Math.floor((time / 1000 / 60) % 60);
  const hours = Math.floor((time / 1000 / 60 / 60) % 24);
  return { hours, minutes, seconds, milliseconds };
};

const formatTime = (time) => {
  return time.toString().padStart(2, "0");
};

const displayTime = (milliseconds) => {
  if (!milliseconds) return null;
  const { minutes, seconds } = convertTime(milliseconds);
  return `${formatTime(minutes)} : ${formatTime(seconds)}`;
};

export default displayTime;
