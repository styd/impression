<script>
  import { slide } from 'svelte/transition';

  export let show = false;
</script>

<div class='bottom-drawer' in:slide class:show>
  <div class='drawer-content'>
    <slot />
  </div>
</div>

<style>
  .bottom-drawer {
    display: none;
    margin: 0;
    padding: 1px;
  }

  .bottom-drawer.show {
    display: block;
    background-color: rgba(0,0,0,0.6);
    backdrop-filter: blur(10px);
  }

  .drawer-content {
    margin: 24px 4%;
    color: white;
  }

  @media screen and (min-width: 768px) {
    .drawer-content {
      max-width: 1024px;
      margin: 72px auto;
      font-size: 16px;
    }
  }
</style>
