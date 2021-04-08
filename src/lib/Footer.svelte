<script>
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();
</script>

<footer>
  <button on:click={() => dispatch('show')} />
</footer>

<style>
  footer {
    display: flex;
    height: max-content;
    justify-content: center;
    padding-bottom: 4.8rem;
  }

  button {
    background-image: url('/assets/icons/settings.svg');
    height: 2.8rem;
    opacity: 0.5;
    width: 2.8rem;
  }

  button:hover,
  button:focus-visible {
    opacity: 1;
  }

  @media (min-width: 540px) {
    footer {
      padding-bottom: 10.3rem;
    }
  }

  @media (min-width: 1280px) {
    footer {
      padding-bottom: 5.6rem;
    }
  }
</style>
