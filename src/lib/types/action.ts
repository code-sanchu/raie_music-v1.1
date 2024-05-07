import type {
  ParametersSwitch,
  SwipeParameters
} from 'svelte-gestures';
import type { Action } from 'svelte/action';

export type Swipe = Action<
  HTMLElement,
  ParametersSwitch<SwipeParameters>,
  {
    'on:swipe': (
      e: CustomEvent<{
        [x: string]: string;
        // detail: { direction: 'left' | 'right' };
      }>
    ) => void
  }
> 