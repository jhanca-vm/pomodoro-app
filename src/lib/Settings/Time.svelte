<script>
  export let name, value;

  function substract() {
    if ($value > 1) {
      value.update(n => n - 1);
    }
  }
</script>

<div>
  <p>{name}</p>
  <span class="input">
    <span class="value">{$value}</span>
    <button class="up" on:click={() => value.update(n => n + 1)} />
    <button class="down" on:click={substract} />
  </span>
</div>

<style>
  div {
    align-items: center;
    display: flex;
    justify-content: space-between;
  }

  p {
    color: rgba(30, 33, 63, 0.4);
    font-size: 1.2rem;
  }

  button {
    height: 0.7rem;
    opacity: 0.25;
    width: 1.4rem;
  }

  button:hover,
  button:focus-visible {
    opacity: 1;
  }

  .value {
    grid-row: span 2;
    width: 100%;
  }

  .input {
    background-color: #eff1fa;
    border-radius: 1rem;
    color: #1e213f;
    display: grid;
    font-size: 1.4rem;
    grid-template-columns: 1fr 1.2rem;
    grid-template-rows: 1fr 1fr;
    padding: 1.2rem 16px;
    row-gap: 1rem;
    width: 50%;
  }

  .up {
    background-image: url('/assets/icons/up-arrow.svg');
  }

  .down {
    background-image: url('/assets/icons/down-arrow.svg');
  }

  @media (min-width: 540px) {
    div {
      display: block;
    }

    .input {
      margin-top: 1rem;
      width: 100%;
    }
  }
</style>
