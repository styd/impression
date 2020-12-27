<script>
  import Project from './Project.svelte';
  import ScrollDown from './Demo/ScrollDown.svelte';
  import SalesCard from './Demo/Cards/SalesCard.svelte';
  import EventsCard from './Demo/Cards/EventsCard.svelte';
  import ProbabilityCard from './Demo/Cards/ProbabilityCard.svelte';
</script>

<div class='demo'>
  <Project />
  <ScrollDown />

  <SalesCard />
  <EventsCard />
  <ProbabilityCard on:showDrawer />
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
