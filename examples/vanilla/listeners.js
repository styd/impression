var customImpressionElements = document.querySelectorAll('[class$="--impression"]');

customImpressionElements.forEach(function(element) {
  let elementName = element.firstElementChild.firstElementChild.innerText;
  element.addEventListener('impression', function() {
    toast(`<h3>impression</h3> from <b>${elementName}</b>`);
  });
  element.addEventListener('impressioff', function() {
    toast(`<h3>impressioff</h3> from <b>${elementName}</b>`);
  });
});

var salesCounter = document.querySelector('.immediately-appear--impression');
salesCounter.addEventListener('impression', function() {
  increment(salesCounter, 412, 5000);
});

var millionCounter = document.querySelector('.middle-non-impression');
increment(millionCounter, 789, 20000);

var percentCounter = document.querySelector('.last--impression');
percentCounter.addEventListener('impression', function() {
  increment(percentCounter, 64, 2000);
});
