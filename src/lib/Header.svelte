<script>
  import { settings } from './store.js';

  const { color, timerType } = settings;

  let time = 'pomodoro';

  function changeTimer(type) {
    time = type;
    timerType.set(type);
  }
</script>

<header>
  <h1>pomodoro</h1>
  <section>
    <button
      class={time === 'pomodoro' ? `bg-${$color}` : null}
      disabled={time === 'pomodoro'}
      on:click={() => changeTimer('pomodoro')}
    >
      pomodoro
    </button>
    <button
      class={time === 'shortBreak' ? `bg-${$color}` : null}
      disabled={time === 'shortBreak'}
      on:click={() => changeTimer('shortBreak')}
    >
      short break
    </button>
    <button
      class={time === 'longBreak' ? `bg-${$color}` : null}
      disabled={time === 'longBreak'}
      on:click={() => changeTimer('longBreak')}
    >
      long break
    </button>
  </section>
</header>

<style>
  header {
    padding: 3.2rem 24px 0;
    text-align: center;
  }

  h1 {
    font-family: 'Kumbh Sans';
    font-size: 2.4rem;
  }

  section {
    background-color: #161932;
    border-radius: 3.15rem;
    display: grid;
    font-size: 1.2rem;
    grid-template-columns: repeat(3, 1fr);
    margin: 4.5rem auto 0;
    max-width: 375px;
    padding: 8px 6px;
  }

  button {
    height: 4.8rem;
    opacity: 0.4;
  }

  button:disabled {
    border-radius: 2.65rem;
    color: #1e213f;
    cursor: default;
  }

  button:hover,
  button:focus,
  button:disabled {
    opacity: 1;
  }

  @media (min-width: 540px) {
    header {
      padding: 8rem 0 0;
    }

    h1 {
      font-size: 3.2rem;
    }

    section {
      font-size: 1.4rem;
      margin: 5.5rem auto 0;
    }
  }

  @media (min-width: 1280px) {
    header {
      padding-top: 4.8rem;
    }
  }
</style>
