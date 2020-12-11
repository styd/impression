const increment = (element, target, duration) => {
  let counter = element.querySelector('p.big span.number');
  let number = +counter.innerText;
  let intervalDuration = duration/(target-number)
  let incrementStep;
  if (intervalDuration <= 30) {
    intervalDuration = 30;
    incrementStep = (target-number)*30/duration;
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
