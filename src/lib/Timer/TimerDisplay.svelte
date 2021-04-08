<script>
  import { createEventDispatcher } from 'svelte';
  import { settings } from '../store.js';
  import ProgressBar from './ProgressBar.svelte';

  export let playing, min, sec;

  const { color, font } = settings;
  const dispatch = createEventDispatcher();
</script>

<section>
  <div class={`font-${$font}`}>
    <ProgressBar />
    <span>
      {min < 10 ? `0${min}` : min}:{sec < 10 ? `0${sec}` : sec}
    </span>
    {#if !playing && !min && !sec}
      <button class={`txt-${$color}`} on:click={() => dispatch('restart')}>
        restart
      </button>
    {:else if playing}
      <button class={`txt-${$color}`} on:click={() => dispatch('pause')}>
        pause
      </button>
    {:else}
      <button class={`txt-${$color}`} on:click={() => dispatch('play')}>
        start
      </button>
    {/if}
  </div>
</section>

<style>
  section {
    background-image: linear-gradient(315deg, #2e325a, #0e112a);
    border-radius: 50%;
    box-shadow: -50px -50px 100px #272c5a, 50px 50px 100px #121530;
    height: 300px;
    margin: 4.8rem auto;
    padding: 16px;
    width: 300px;
  }

  div {
    align-items: center;
    background-color: #161932;
    border-radius: inherit;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    position: relative;
  }

  span {
    font-size: 80px;
    letter-spacing: -4px;
    margin: 24px 0 12px;
  }

  button {
    font-size: 14px;
    letter-spacing: 13.125px;
    padding-left: 13.125px;
    position: relative;
    text-transform: uppercase;
    z-index: 1;
  }

  .font-serif span {
    letter-spacing: normal;
    margin-top: 0;
  }

  .font-mono span {
    font-weight: 400;
    letter-spacing: -10px;
    margin: 14px 0;
  }

  @media (min-width: 540px) {
    section {
      height: 410px;
      margin: 11rem auto;
      padding: 22px;
      width: 410px;
    }

    span {
      font-size: 100px;
      letter-spacing: -5px;
      margin-bottom: 20px;
    }

    button {
      font-size: 16px;
      letter-spacing: 15px;
    }
  }

  @media (min-width: 1280px) {
    section {
      margin: 4.5rem auto;
    }
  }
</style>
