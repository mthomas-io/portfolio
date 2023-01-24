<script lang="ts">
  import type { PictureSources } from "$lib/types";

  export let alt: string;
  export let picture: PictureSources;

  let className: string = "";
  export { className as class };
</script>

<picture>
  {#each Object.entries(picture.sources) as [imgType, srcsets]}
    <source
      srcset={srcsets.map(({ src, w }) => `${src} ${w}w`).join(", ")}
      type="image/{imgType}"
    />
  {/each}
  <img src={picture.fallback.src} {alt} class={className} />
</picture>
