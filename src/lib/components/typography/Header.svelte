<script lang="ts">
  export let size: "h1" | "h2" | "h3" = "h1";
  export let bold = false;
  export let italic = false;

  let className: string = "";
  export { className as class };
</script>

<svelte:element
  this={size}
  class:font-bold={bold}
  class:italic
  class="break-words uppercase {className}"
>
  <slot />
</svelte:element>
