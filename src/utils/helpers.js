export const convertMinutesToHours = (time) => {
  if (time > 60) {
    const minutes = time % 60;
    const hours = Math.floor(time / 60);
    return `${hours}hr(s) ${minutes}mins`;
  }
  return `${time}mins`;
};
