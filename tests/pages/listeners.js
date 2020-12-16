var salesCounter = document.querySelector('.immediately-appear, .immediately-appear--impression');
salesCounter.addEventListener('impression', function() {
  let salesNumEl = salesCounter.querySelector('p.big span.number');
  setTimeout(function() {
    salesNumEl.innerText = 412;
  }, 50);
});
salesCounter.addEventListener('impressioff', function() {
  let salesNumEl = salesCounter.querySelector('p.big span.number');
  setTimeout(function() {
    salesNumEl.innerText = 212;
  }, 50);
});

var percentCounter = document.querySelector('.last, .last--impression');
percentCounter.addEventListener('impression', function() {
  let percentNumEl = percentCounter.querySelector('p.big span.number');
  percentNumEl.innerText = 64;
});
percentCounter.addEventListener('impressioff', function() {
  let percentNumEl = percentCounter.querySelector('p.big span.number');
  percentNumEl.innerText = 32;
});
