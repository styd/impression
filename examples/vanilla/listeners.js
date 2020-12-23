var customImpressionElements = document.querySelectorAll('[class*="--impression"]');

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

var eventsCounter = document.querySelector('.middle-non-impression');
increment(eventsCounter, 789, 20000);

var probabilityCounter = document.querySelector('.last--impression');
probabilityCounter.addEventListener('impression', function() {
  increment(probabilityCounter, 64, 2000);
});
