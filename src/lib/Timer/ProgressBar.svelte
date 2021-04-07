<script>
  import { settings } from '../store.js';

  const { color } = settings;
</script>

<svg class={`stroke-${$color}`}>
  <circle id="progress-bar" cx="50%" cy="50%" r="48%" />
</svg>

<style>
  svg {
    height: 100%;
    padding: 9.88px;
    position: absolute;
    transform: rotate(-90deg);
    width: 100%;
  }

  circle {
    fill: none;
    stroke: currentColor;
    stroke-dasharray: 750;
    stroke-dashoffset: 750;
    stroke-linecap: round;
    stroke-width: 8px;
  }

  @media (min-width: 540px) {
    svg {
      padding: 13.5px;
    }

    circle {
      stroke-dasharray: 1024;
      stroke-dashoffset: 1024;
      stroke-width: 12px;
    }
  }
</style>
