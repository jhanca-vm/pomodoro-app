<script>
  import { settings } from '../store.js';

  const { color } = settings;

  const colors = ['red', 'cyan', 'purple'];
</script>

<section class="modal-section">
  <h3>Color</h3>
  <div>
    {#each colors as colorName}
      <button
        class={`bg-${colorName}`}
        disabled={$color === colorName}
        on:click={() => color.set(colorName)}
      />
    {/each}
  </div>
</section>

<style>
  section {
    padding-bottom: 0.55rem;
  }

  div {
    display: flex;
    justify-content: center;
    margin-top: 1.8rem;
  }

  button {
    border-radius: 50%;
    height: 4rem;
    width: 4rem;
  }

  button:nth-of-type(2n) {
    margin: 0 1.6rem;
  }

  button:disabled {
    background-image: url('/assets/icons/check.svg');
    background-position: center;
    background-repeat: no-repeat;
  }

  @media (min-width: 540px) {
    div {
      margin-top: 0;
    }
  }
</style>
