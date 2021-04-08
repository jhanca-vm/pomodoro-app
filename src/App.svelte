<script>
  import { onMount } from 'svelte';
  import { settings, data } from './lib/store.js';
  import Header from './lib/Header.svelte';
  import Timer from './lib/Timer/index.svelte';
  import Footer from './lib/Footer.svelte';
  import Settings from './lib/Settings/index.svelte';

  let modal = false;

  function showSettings() {
    modal = true;
    document.body.style.overflow = 'hidden';
  }

  function hideSettings() {
    modal = false;
    document.body.style.overflow = 'auto';
    localStorage.setItem('settings', JSON.stringify($data));
  }

  onMount(() => {
    let data = localStorage.getItem('settings');

    if (data) {
      const { pomodoro, longBreak, shortBreak, font, color } = settings;

      data = JSON.parse(data);

      pomodoro.set(data.pomodoro);
      longBreak.set(data.longBreak);
      shortBreak.set(data.shortBreak);
      font.set(data.font);
      color.set(data.color);
    }
  });
</script>

<Header />
<main>
  <Timer />
</main>
<Footer on:show={showSettings} />

{#if modal}
  <Settings on:hide={hideSettings} />
{/if}
