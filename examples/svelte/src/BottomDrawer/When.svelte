<script>
  import Section from './Section.svelte';
  import Heading from './Heading.svelte';

  let text;
</script>

<Section>
  <Heading text='When will I need it?' />
  <p>
    When you need to do something whenever an element is in viewport, something
    like:
  </p>
  <ul>
    <li>
      turning on and off video or audio players based on whether user see them
      or not,
    </li>
    <li>
      running animations once user look at them (such as simple counters above),
    </li>
    <li>
      impression event tracking of specific HTML elements for your web analytics
      to find out the true CTR (Click-Through Rate),
    </li>
    <li>
      etc.
    </li>
  </ul>
</Section>

<style>
  ul li {
    font-family: Roboto, Arial, sans-serif;
    font-size: 14px;
    line-height: 1.5;
  }

  @media screen and (min-width: 768px) {
    ul li {
      font-size: 20px;
    }
  }
</style>
