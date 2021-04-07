<script>
  import { timer, animation } from '../store.js';
  import TimerDisplay from './TimerDisplay.svelte';

  let initialTimer = $timer;
  let sec = 0;
  let playing = false;
  let interval;

  $: min = $timer;
  $: if ((!min && !sec) || initialTimer !== $timer) {
    playing = false;
    sec = 0;
    initialTimer = $timer;
    clearInterval(interval);
    cancel('progress-bar');
  }

  function temporize() {
    if (!sec && min > 0) {
      min -= 1;
      sec = 59;
    } else {
      sec -= 1;
    }
  }

  function play() {
    playing = true;
    interval = setInterval(temporize, 1000);

    temporize();

    if (!$animation) {
      animation.startAnimation('progress-bar', min * 60000, sec * 1000);
    } else {
      $animation.play();
    }
  }

  function pause() {
    playing = false;
    clearInterval(interval);
    $animation.pause();
  }

  function restart() {
    min = $timer;
    document.getElementById('progress-bar').classList.remove('finish');
    play();
  }

  function cancel(id) {
    if ($animation) {
      $animation.cancel();
      animation.reset();
    }

    if (!min && !sec) {
      document.getElementById(id).classList.add('finish');
    } else {
      document.getElementById(id).classList.remove('finish');
    }
  }
</script>

<TimerDisplay
  {playing}
  {min}
  {sec}
  on:play={play}
  on:pause={pause}
  on:restart={restart}
/>
