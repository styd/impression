<script>
  import { store, nextStoreId } from './store.js';
  import Demo from './Demo.svelte';
  import Project from './Project.svelte';
  import ScrollDown from './ScrollDown.svelte';
  import SalesCard from './Cards/SalesCard.svelte';
  import EventsCard from './Cards/EventsCard.svelte';
  import ProbabilityCard from './Cards/ProbabilityCard.svelte';
  import BottomDrawer from './BottomDrawer.svelte';
  import Notes from './Notes.svelte';
  import What from './What.svelte';
  import When from './When.svelte';
  import Where from './Where.svelte';
  import ForkMe from './ForkMe.svelte';
  import ToastContainer from './ToastContainer.svelte';
  import ToastItem from './ToastItem.svelte';

  let show;
  $store = [];
  nextStoreId.set(0);
</script>

<Demo>
  <Project />
  <ScrollDown />

  <SalesCard />
  <EventsCard />
  <ProbabilityCard on:showDrawer={()=> show=true} />
</Demo>

<BottomDrawer show={show}>
  <What />
  <When />
  <Where />
  <Notes />

  <br /><br /><br />

  <Project />
</BottomDrawer>

<ForkMe />

<ToastContainer>
  {#each $store as toast}
    <ToastItem {toast} />
  {/each}
</ToastContainer>

<style>
  :global(body) {
    margin: 0;
    background-image: url(https://images.unsplash.com/photo-1605801495512-f47a64d01f4f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1952&q=80);
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
  }

  :global(p) {
    font-family: Roboto, Arial, sans-serif;
    font-size: 14px;
    text-align: left;
    line-height: 1.5;
  }

  :global(.title, .description) {
    font-size: 14px;
  }

  :global(.immediately-appear--impression) {
    width: 222px;
  }

  :global(.middle-non-impression) {
    width: 222px;
  }

  :global(.last--impression) {
    width: 255px;
  }

  @media screen and (min-width: 768px) {
    :global(p) {
      font-size: 20px;
    }

    :global(.title, .description) {
      font-size: 24px;
    }

    :global(.immediately-appear--impression) {
      width: 410px;
    }

    :global(.middle-non-impression) {
      width: 460px;
    }

    :global(.last--impression) {
      width: 398px;
    }
  }
</style>
