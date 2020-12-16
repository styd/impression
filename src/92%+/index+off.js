(window => {
  const {
    document,
    IntersectionObserver,
    IntersectionObserverEntry,
  } = window;

  const currentScript = document.currentScript;
  const elementsSelector = currentScript.getAttribute('elements-selector') || '.impression';
  const visibleFraction = currentScript.getAttribute('visible-fraction') || 0.5;
  const visibleFractioff = currentScript.getAttribute('visible-fractioff') || 0.0;

  const ableToObserveIntersection =
    IntersectionObserver && IntersectionObserverEntry &&
    'intersectionRatio' in IntersectionObserverEntry.prototype;

  if (ableToObserveIntersection) {
    const intersectionConfig = {
      threshold: [visibleFractioff, visibleFraction],
    };

    const intersectionCallback = (entries, self) => {
      entries.forEach(({target, isIntersecting, intersectionRatio}) => {
        const isImpressioned = target.getAttribute('impression') == ''
        if (isIntersecting) {
          if (!isImpressioned && intersectionRatio >= visibleFraction) {
            fireImpression(target);
          }

          if (isImpressioned && intersectionRatio <= visibleFractioff) {
            fireImpressioff(target);
            self.unobserve(target);
          }
        } else {
          if (isImpressioned) {
            fireImpressioff(target);
            self.unobserve(target);
          }
        }
      });
    };

    const fireImpression = (element) => {
      const impression = new Event('impression');
      element.setAttribute('impression','');
      element.dispatchEvent(impression);
    }

    const fireImpressioff = (element) => {
      const impressioff = new Event('impressioff');
      element.dispatchEvent(impressioff);
      element.removeAttribute('impression');
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
