<script>
  import { store, nextStoreId } from './store.js';
  import SalesCard from './SalesCard.svelte';
  import EventsCard from './EventsCard.svelte';
  import ProbabilityCard from './ProbabilityCard.svelte';
  import ToastContainer from './ToastContainer.svelte';
  import ToastItem from './ToastItem.svelte';

  $store = [];
  nextStoreId.set(0);
</script>

<svelte:head>
  <script async
    src='../92+/impression+off.min.js'
    elements-selector='[class*="--impression"]'>
  </script>
</svelte:head>

<SalesCard />
<EventsCard />
<ProbabilityCard />

<ToastContainer>
  {#each $store as toast}
    <ToastItem {toast} />
  {/each}
</ToastContainer>

<style>
  :global(body) {
    background-image: url(https://images.unsplash.com/photo-1605801495512-f47a64d01f4f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1952&q=80);
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
  }

  :global(p) {
    font-family: Helvetica, sans-serif;
    font-size: 12px;
    text-align: left;
    line-height: 1.5;
  }

  :global(.title, .description) {
    font-size: 14px;
  }

  :global(.immediately-appear--impression) {
    width: 205px;
  }

  :global(.middle-non-impression) {
    width: 247px;
  }

  :global(.last--impression) {
    width: 235px;
  }

  @media screen and (min-width: 768px) {
    :global(p) {
      font-size: 20px;
    }

    :global(.title, .description) {
      font-size: 24px;
    }

    :global(.immediately-appear--impression) {
      width: 612px;
    }

    :global(.middle-non-impression) {
      width: 688px;
    }

    :global(.last--impression) {
      width: 551px;
    }
  }
</style>
