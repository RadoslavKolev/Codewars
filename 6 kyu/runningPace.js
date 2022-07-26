function runningPace(distance, time) {
  const timeArr = time.split(':').map(Number);
  const seconds = (timeArr[0] * 60) + timeArr[1];
  const secondsPerKm = Math.floor(seconds / distance);
  const minutesPerKm = Math.floor(secondsPerKm / 60);
  let secondsAfter = secondsPerKm - minutesPerKm * 60;

  if (secondsAfter <= 9) {
    secondsAfter = `0${secondsAfter}`;
  }

  return `${minutesPerKm}:${secondsAfter}`
  // console.log(`${minutesPerKm}:${secondsAfter}`);
}

runningPace(1, "3:15");
runningPace(5, "25:00");
runningPace(15, "75:00");
runningPace(2.51, "10:43");
runningPace(4.99, "22:32");
runningPace(0.2, "0:38");
runningPace(42.195, "122:57");