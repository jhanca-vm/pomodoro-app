<script>
  import { settings } from '../store.js';

  const { font } = settings;

  const fonts = ['sans', 'serif', 'mono'];
</script>

<section class="modal-section">
  <h3>Font</h3>
  <div>
    {#each fonts as fontName}
      <button
        class={`font-${fontName}`}
        disabled={$font === fontName}
        on:click={() => font.set(fontName)}
      >
        Aa
      </button>
    {/each}
  </div>
</section>

<style>
  div {
    color: rgba(30, 33, 63, 0.73);
    display: flex;
    justify-content: center;
    margin-top: 1.8rem;
  }

  button {
    background-color: #eff1fa;
    border-radius: 50%;
    font-size: 1.5rem;
    height: 4rem;
    width: 4rem;
  }

  button:disabled {
    background-color: #161932;
    color: white;
  }

  .font-serif {
    font-weight: 400;
    margin: 0 1.6rem;
  }

  @media (min-width: 540px) {
    div {
      margin-top: 0;
    }
  }
</style>
