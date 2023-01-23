<script lang="ts">
  import type * as i from "$lib/types";
  import Header from "$lib/components/typography/Header.svelte";
  import ArrowLink from "$lib/components/common/ArrowLink.svelte";

  export let project: i.Project;
</script>

<a
  href="/{project.slug}"
  class="group pt-4 flex flex-col gap-4 border-t-2 border-dark dark:border-light md:w-1/2"
>
  <ArrowLink title="Next Project" />
  <Header size="h1" bold>{project.title}</Header>
  <Header size="h2" italic>{project.subtitle}</Header>
</a>
