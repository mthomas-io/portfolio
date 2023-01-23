<script lang="ts">
  import type { PageServerData } from "./$types";
  import { page } from "$app/stores";
  import { fly } from "svelte/transition";
  import ProjectListItem from "$lib/components/project/ProjectListItem.svelte";
  import MainLayout from "$lib/components/layout/MainLayout.svelte";
  import About from "$lib/components/sections/About.svelte";

  export let data: PageServerData;
  const { projects } = data;
</script>

<svelte:head>
  <title>Thomas Schoutsen | Portfolio</title>
</svelte:head>

<MainLayout>
  <div>
    {#each projects as project, i}
      <div
        in:fly={{ x: 200, duration: 400, delay: 100 * i }}
        class="
          py-8
          first:pt-0
          border-b-2 
          border-dark 
          dark:border-light
          last-of-type:border-none
        "
      >
        <ProjectListItem {project} />
      </div>
    {/each}
  </div>

  <div id="about" class="mt-24">
    <About />
  </div>
</MainLayout>
