<script>
  export let pre, post, number, target, duration;

  export function startCounting() {
    let minimumIntervalDuration = 50;
    let num = +number;
    let intervalDuration = duration/(target-num)
    let incrementStep;
    if (intervalDuration <= minimumIntervalDuration) {
      intervalDuration = minimumIntervalDuration;
      incrementStep = (target-num)*minimumIntervalDuration/duration;
    } else {
      incrementStep = 1;
    }
    let interval = setInterval(function() {
      if (num + incrementStep >= target) {
        number = target
        clearInterval(interval);
      } else {
        num = num + incrementStep;
        number = Math.round(num);
      }
    }, intervalDuration);
  }
</script>

<p class='big'>
  {#if pre}
    <span>{pre}</span><span class='number'>{number}</span>
  {:else if post}
    <span class='number'>{number}</span><span>{post}</span>
  {/if}
</p>

<style>
  p.big {
    margin: 0;
    font-size: 80px;
    line-height: 1;
    color: rgba(0,0,0,0.75);
  }

  @media screen and (min-width: 768px) {
    p.big {
      font-size: 180px;
    }
  }
</style>
