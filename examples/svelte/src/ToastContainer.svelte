<div id='toast-container'>
  <slot />
</div>

<style>
  #toast-container {
    position: fixed;
    width: 100%;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }

  @media screen and (min-width: 768px) {
    #toast-container {
      right: 0;
      direction: rtl;
      left: unset;
      transform: unset;
    }
  }
</style>
