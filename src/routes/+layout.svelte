<script lang="ts">
  import { windowSize } from "$lib/stores";
  import "../app.css";

  const handleResize = () => {
    windowSize.set({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };
</script>

<svelte:window on:resize={handleResize} />

<div class="max-w-[130rem] mx-auto mb-24">
  <slot />
</div>
