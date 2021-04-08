<script>
  import { createEventDispatcher } from 'svelte';
  import { settings } from '../store.js';
  import Time from './Time.svelte';
  import Font from './Font.svelte';
  import Color from './Color.svelte';

  const dispatch = createEventDispatcher();
  const { pomodoro, shortBreak, longBreak, color } = settings;

  function hideSettings(e) {
    if (e.target.id === 'modal') {
      dispatch('hide');
    }
  }
</script>

<div id="modal" class="settings font-sans" on:click={hideSettings}>
  <section>
    <header>
      <h2>Settings</h2>
      <button on:click={() => dispatch('hide')} />
    </header>
    <section class="time">
      <h3>Time (Minutes)</h3>
      <div class="time-container">
        <Time name="pomodoro" value={pomodoro} />
        <Time name="short break" value={shortBreak} />
        <Time name="long break" value={longBreak} />
      </div>
    </section>
    <Font />
    <Color />
    <button class={`bg-${$color}`} on:click={() => dispatch('hide')}>
      Apply
    </button>
  </section>
</div>

<style>
  header {
    align-items: center;
    border-bottom: 1px solid #e3e1e1;
    display: flex;
    justify-content: space-between;
    padding: 2.4rem 24px 2.8rem;
  }

  h2 {
    font-size: 2rem;
  }

  button:hover,
  button:focus-visible {
    opacity: 1;
  }

  header button {
    background-image: url('/assets/icons/close.svg');
    height: 1.4rem;
    opacity: 0.5;
    width: 1.4rem;
  }

  .settings {
    align-items: center;
    background-color: rgba(10, 12, 28, 0.5);
    cursor: pointer;
    display: flex;
    height: 100%;
    justify-content: center;
    padding: 24px;
    position: fixed;
    width: 100%;
    z-index: 1;
  }

  .settings > section {
    background-color: white;
    border-radius: 1.5rem;
    color: #161932;
    cursor: default;
    margin-bottom: 2.65rem;
    max-width: 540px;
    width: 100%;
  }

  .settings > section > button {
    border-radius: 2.65rem;
    color: white;
    display: block;
    font-size: 1.6rem;
    height: 5.3rem;
    margin: 0 auto;
    position: relative;
    top: 2.65rem;
    width: 14rem;
  }

  .settings > section > button:focus-visible {
    box-shadow: inset 0 2px 4px 0 rgba(28, 31, 56, 0.25);
  }

  .time {
    padding: 2.4rem;
  }

  .time-container {
    display: grid;
    margin-top: 1.8rem;
    row-gap: 0.8rem;
  }

  .bg-cyan {
    color: #161932 !important;
  }

  @media (min-width: 540px) {
    header {
      padding: 3.4rem 40px 3.2rem;
    }

    h2 {
      font-size: 2.8rem;
    }

    .settings > section {
      border-radius: 2.5rem;
    }

    .time {
      padding: 2.4rem 40px;
    }

    .time-container {
      column-gap: 20px;
      grid-template-columns: repeat(3, 1fr);
      margin-top: 2.6rem;
    }
  }
</style>
