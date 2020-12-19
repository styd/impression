<script>
  import { onMount } from 'svelte';
  import Card from './Card.svelte';
  import Counter from './Counter.svelte';

  let counter;

  onMount(()=>{
    counter.startCounting();
  });
</script>

<Card class='middle-non-impression'
      title='Events Counter'
      subtitle='(start on page load)'
      description='events sent per day'>
  <Counter bind:this={counter}
           post='M'
           number={0}
           target={789}
           duration={20000} />
</Card>

