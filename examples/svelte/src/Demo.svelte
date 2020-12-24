<div class='demo'>
  <slot />
</div>

<style>
  .demo {
    padding: 48px 4%;
  }

  @media screen and (min-width: 768px) {
    .demo {
      max-width: 1024px;
      margin: 32px auto;
    }
  }
</style>
