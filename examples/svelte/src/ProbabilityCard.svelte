<script>
  import { store, nextStoreId } from './store.js';
  import Card from './Card.svelte';
  import Counter from './Counter.svelte';

  let title = 'Probability Counter';
  let counter;

  function toast(message) {
    let nextItemPosition = $store.length;
    let id = ++$nextStoreId;
    $store[nextItemPosition] = { id, message }
    setTimeout(() => {
      $store = $store.filter((value, index) => {
        if (value.id != id) return value;
      });
    }, (2000 + message.length * 30));
  }

  function handleImpression() {
    counter.startCounting();
    toast(`<h3>impression</h3> from <b>${title}</b>`);
  }

  function handleImpressioff() {
    toast(`<h3>impressioff</h3> from <b>${title}</b>`);
  }
</script>

<Card on:impression={handleImpression}
      on:impressioff={handleImpressioff}
      class='last--impression'
      title={title}
      subtitle='(start on impression)'
      description="probability that you're a bearded guy">
  <Counter bind:this={counter}
           post='%'
           number={4}
           target={64}
           duration={2000} />
</Card>
