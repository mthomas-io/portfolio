<script lang="ts">
  import type * as i from "$lib/types";
  import { device } from "$lib/stores";
  import Header from "$lib/components/typography/Header.svelte";

  export let project: i.Project;
</script>

<a
  href="/{project.slug}"
  class="group flex justify-between gap-4 max-md:flex-col-reverse"
  class:wrap={$device.mobile}
>
  <div class="overflow-hidden flex flex-col pr-2">
    <div class="text-sm xl:text-base uppercase">
      {project.category}
    </div>
    <Header size="h1" bold>{project.title}</Header>
    <Header size="h2" italic class="mt-2">{project.subtitle}</Header>
  </div>
  <div class="md:w-4/12 flex-shrink-0 overflow-hidden">
    <img
      class="
        object-cover
        aspect-[500/333]
        w-full
        h-auto
        transition-transform
        duration-1000
        ease-[cubic-bezier(0.19,1,0.22,1)]
        group-hover:scale-[1.15]
      "
      src={project.img.url}
      alt={project.img.alt}
    />
  </div>
</a>
