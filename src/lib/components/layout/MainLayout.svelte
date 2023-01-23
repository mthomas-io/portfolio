<script>
  import { page } from "$app/stores";
  import { fly } from "svelte/transition";
  import Sidebar from "./Sidebar.svelte";
</script>

<main class=" p-4 md:p-8">
  <div class="flex gap-4 flex-col md:flex-row">
    <div class="md:w-4/12 md:min-w-[200px]">
      <Sidebar />
    </div>
    {#key $page.path}
      <div in:fly={{ y: 150, duration: 500 }} class="w-full">
        <slot />
      </div>
    {/key}
  </div>
  <slot name="after" />
</main>
