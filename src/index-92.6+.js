(window => {
  const elementsSelector = document.currentScript.getAttribute('elements-selector') || '.impression';
  const visibleFraction = document.currentScript.getAttribute('visible-fraction') || 0.5;

  const ableToObserveIntersection =
    'IntersectionObserver' in window &&
    'IntersectionObserverEntry' in window

  if (ableToObserveIntersection) {
    if ('isVisible' in IntersectionObserverEntry.prototype) {
      IntersectionObserverEntry.prototype.isVisible = true;
    }

    const intersectionConfig = {
      threshold: visibleFraction,
      trackVisibility: true,
      delay: 100
    };

    const intersectionCallback = (entries, self) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.isVisible) {
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
