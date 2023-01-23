import type * as i from '$lib/types';
import { browser } from '$app/environment';
import { writable } from 'svelte/store';

const initialMode = browser && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
export const theme = writable<i.ThemeConfig>({
  mode: initialMode,
});

browser && window
  .matchMedia('(prefers-color-scheme: dark)')
  .addEventListener('change', (ev) => {
    console.log('setting theme to',  ev.matches ? 'dark' : 'light');
    theme.set({
    mode: ev.matches ? 'dark' : 'light',
  });
});

theme.subscribe(theme => {
  if (!browser) return;
  console.log('theme is', theme);
  theme.mode === 'dark'
    ? window.document.documentElement.classList.add('dark')
    : window.document.documentElement.classList.remove('dark');
});
