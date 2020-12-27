<script>
  import Section from './Section.svelte';
  import Heading from './Heading.svelte';

  let text;
</script>

<Section>
  <Heading text='Where can I use it?' />
  <p>
    You can use it with whatever framework you use for your app and whatever
    bundler you use to bundle your app because it's just plain vanilla JavaScript
    inside. Check out
    <a href='https://github.com/styd/impression/tree/main/examples'>
      this page's source code and other examples
    </a>
    to see how it's used in some frameworks.
  </p>
</Section>

<style>
  a {
    color: white;
    font-weight: bold;
    text-decoration: underline 3px solid lemonchiffon;
  }
</style>
