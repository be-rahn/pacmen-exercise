function getRandomInt(max, min) {
  return Math.floor(Math.random() * (max - min) + min);
}
function getRandomColor() {
  return {
    red: getRandomInt(255, 0),
    green: getRandomInt(255, 0),
    blue: getRandomInt(255, 0),
  };
}
export { getRandomInt, getRandomColor };
