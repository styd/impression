<script>
  import { fly } from 'svelte/transition';

  export let toast = {};
</script>

<div in:fly={{ y: 100, duration: 1000 }} class='toast'>
  {@html toast.message}
</div>

<style>
  .toast {
    margin: 10px auto;
    padding: 10px 20px;
    width: -moz-fit-content;
    width: fit-content;
    font-size: 16px;
    font-family: Roboto, Arial, sans-serif;
    background-color: rgba(0,0,0,0.6);
    color: white;
    border-radius: 10px;
    text-align: center;
  }

  @media screen and (min-width: 768px) {
    .toast {
      margin: 10px 20px;
      padding: 20px 40px;
      border-radius: 40px;
    }
  }
</style>
