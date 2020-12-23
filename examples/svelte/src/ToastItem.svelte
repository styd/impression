<script>
  import { fly, fade } from 'svelte/transition';

  export let toast = {};
</script>

<div in:fly={{ y: 100 }} out:fade class='toast'>
  {@html toast.message}
</div>

<style>
  .toast {
    margin: 10px 20px;
    padding: 20px 40px;
    width: -moz-fit-content;
    width: fit-content;
    font-size: 16px;
    font-family: Helvetica, sans-serif;
    background-color: rgba(0,0,0,0.6);
    color: white;
    border-radius: 10px;
    text-align: center;
  }

  @media screen and (min-width: 768px) {
    .toast {
      border-radius: 40px;
    }
  }
</style>
