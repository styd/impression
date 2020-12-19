const increment = (element, target, duration) => {
  let minimumIntervalDuration = 50;
  let counter = element.querySelector('p.big span.number');
  let number = +counter.innerText;
  let intervalDuration = duration/(target-number)
  let incrementStep;
  if (intervalDuration <= minimumIntervalDuration) {
    intervalDuration = minimumIntervalDuration;
    incrementStep = (target-number)*minimumIntervalDuration/duration;
  } else {
    incrementStep = 1;
  }
  let interval = setInterval(function() {
    if (number + incrementStep >= target) {
      counter.innerText = target;
      clearInterval(interval);
    } else {
      number = number + incrementStep;
      counter.innerText = Math.round(number);
    }
  }, intervalDuration);
}
