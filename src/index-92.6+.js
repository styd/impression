(window => {
  const elementsSelector = document.currentScript.getAttribute('elements-selector') || '.impression';
  const visibleFraction = document.currentScript.getAttribute('visible-fraction') || 0.5;

  const ableToObserveIntersection =
    'IntersectionObserver' in window &&
    'IntersectionObserverEntry' in window

  if (ableToObserveIntersection) {
    const intersectionConfig = {
      threshold: visibleFraction,
    };

    const intersectionCallback = (entries, self) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const impression = new Event('impression');
          entry.target.dispatchEvent(impression);
          self.unobserve(entry.target);
        }
      });
    };

    const impressionObserver = new IntersectionObserver(intersectionCallback, intersectionConfig);

    const elements = document.querySelectorAll(elementsSelector);

    elements.forEach(element => {
      impressionObserver.observe(element);
    });
  }
})(window)
