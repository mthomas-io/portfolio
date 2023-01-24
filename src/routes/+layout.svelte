<script lang="ts">
  // This is imported only for project images to get picked up by vite for optimization
  // Only necessary until I move projects to a headless cms with img serving
  import projects from "$lib/mocks/projects";
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
