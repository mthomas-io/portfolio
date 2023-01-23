import type * as i from '$lib/types';
import { derived, writable } from 'svelte/store';

export const windowSize = writable<{width: number, height: number}>({
  width: 0,
  height: 0,
});

type DeviceInfo = {
  [key in i.Device]: boolean;
} & { size: number };

export const device = derived<typeof windowSize, DeviceInfo>(windowSize, $windowSize => {
  return {
    size: $windowSize.width,
    mobile: $windowSize.width <= 480,
    tablet: $windowSize.width > 480 && $windowSize.width <= 768,
    desktop: $windowSize.width > 768,
  }
});