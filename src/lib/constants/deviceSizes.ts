import type * as i from '$lib/types';

type DeviceSize = {
  [key in i.Device]: number;
};

export const DEVICE_SIZE: DeviceSize = {
  'mobile': 0,
  'tablet': 480,
  'desktop': 768,
};
