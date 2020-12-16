(window => {
  const {
    document,
    IntersectionObserver,
    IntersectionObserverEntry,
  } = window;

  const currentScript = document.currentScript;
  const elementsSelector = currentScript.getAttribute('elements-selector') || '.impression';
  const visibleFraction = currentScript.getAttribute('visible-fraction') || 0.5;

  const ableToObserveIntersection =
    IntersectionObserver && IntersectionObserverEntry;

  if (ableToObserveIntersection) {
    const intersectionConfig = {
      threshold: visibleFraction,
    };

    const intersectionCallback = (entries, self) => {
      entries.forEach(({isIntersecting, target}) => {
        if (isIntersecting) {
          fireImpression(target);
          self.unobserve(target);
        }
      });
    };

    const fireImpression = (element) => {
      const impression = new Event('impression');
      element.dispatchEvent(impression);
    }

    const impressionObserver = new IntersectionObserver(intersectionCallback, intersectionConfig);

    const initImpression = ()=>{
      const elements = document.querySelectorAll(elementsSelector);
      elements.forEach(element => {
        impressionObserver.observe(element);
      });
    }

    if (window.addEventListener) {
      window.addEventListener("load", initImpression, true);
    } else if (window.attachEvent) {
      window.attachEvent("onload", initImpression);
    } else {
      initImpression();
    }
  }
})(window)
