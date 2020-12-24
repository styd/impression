<script>
  let light = false;

  function sleep(m) {
    return new Promise(r => setTimeout(r, m));
  }

  async function turnOnWithFlicker() {
    await sleep(100);
    light = true;
    await sleep(100);
    light = false;
    await sleep(100);
    light = true;
  }
</script>

<div on:impression={turnOnWithFlicker} class='project--impression'>
  <h1>
    <span class='hairline'>Impressi</span><span class:light class='outline'>on</span>
  </h1>
  <hr />
  <h3>HTML DOM element 'impression' event on your web pages.</h3>
</div>

<style>
  div {
    width: -moz-fit-content;
    width: fit-content;
  }

  hr {
    border-style: dashed;
    color: lemonchiffon;
  }

  h1 {
    margin-bottom: 12px;
    font-size: 32px;
    color: lemonchiffon;
    text-shadow: 1px 1px 5px white;
  }

  h3 {
    font-family: Roboto, Arial, sans-serif;
    font-size: 14px;
    color: white;
    line-height: 1.5;
    text-shadow: 1px 1px 5px rgba(0,0,0,0.3);
  }

  .hairline, .outline {
    font-family: Bungee Hairline, Helvetica, serif;
  }

  .outline.light {
    font-family: Bungee Outline, Helvetica, serif;
    text-shadow: 1px 1px 5px lemonchiffon;
  }

  @media screen and (min-width: 768px) {
    h1 {
      font-size: 40px;
    }

    h3 {
      font-size: 16px;
    }
  }
</style>
