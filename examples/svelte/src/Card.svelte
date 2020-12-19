<script>
  export let title, subtitle, description;
  let clazz;
  export { clazz as class };
</script>

<div on:impression on:impressioff
     class={`card ${clazz || ''}`}>
  <p>
    <span class='title'>{title}</span> {subtitle}
  </p>
  <slot />
  <p>
    <span class='description'>{description}</span>
  </p>
</div>

<style>
  .card {
    position: relative;
    margin: 15vh auto 40vh auto;
    padding: 10px 20px;
    min-width: 100px;
    background-color: rgba(255,255,255,0.2);
    backdrop-filter: blur(10px);
    border-radius: 15px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  }
</style>
