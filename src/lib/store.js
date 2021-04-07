import { derived, writable } from 'svelte/store';

const createSettings = () => {
  const pomodoro = writable(25);
  const longBreak = writable(15);
  const shortBreak = writable(5);
  const font = writable('sans');
  const color = writable('red');
  const timerType = writable('pomodoro');

  return { pomodoro, longBreak, shortBreak, font, color, timerType };
};

const createAnimation = () => {
  const { subscribe, set } = writable(null);

  return {
    subscribe,
    startAnimation: (id, minutes, seconds) =>
      set(
        document.getElementById(id).animate([{ strokeDashoffset: 0 }], {
          duration: minutes + seconds,
        })
      ),
    reset: () => set(null),
  };
};

const settings = createSettings();

const { timerType, pomodoro, longBreak, shortBreak } = settings;

const timer = derived(
  [timerType, pomodoro, longBreak, shortBreak],
  ([$timerType, $pomodoro, $longBreak, $shortBreak]) => {
    switch ($timerType) {
      case 'pomodoro':
        return $pomodoro;
      case 'longBreak':
        return $longBreak;
      case 'shortBreak':
        return $shortBreak;
    }
  }
);

export const animation = createAnimation();

export { settings, timer };
