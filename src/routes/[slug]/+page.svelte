<script lang="ts">
  import type { PageServerData } from "./$types";
  import { onMount } from "svelte";
  import MainLayout from "$lib/components/layout/MainLayout.svelte";
  import PageRow from "$lib/components/layout/PageRow.svelte";
  import Header from "$lib/components/typography/Header.svelte";
  import NextProjectItem from "$lib/components/project/NextProjectItem.svelte";
  import ArrowLink from "$lib/components/common/ArrowLink.svelte";
  import Picture from "$lib/components/common/Picture.svelte";

  export let data: PageServerData;

  $: ({ project, next } = data);

  let loaded = false;
  onMount(() => (loaded = true));
</script>

<svelte:head>
  <title>Thomas Schoutsen | {project.title}</title>
</svelte:head>

<MainLayout>
  <Picture
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
    picture={project.img.sources}
    alt={project.img.alt}
  />

  <div class="mt-8 mb-24">
    <Header bold>{project.title}</Header>
    <Header size="h2" italic>{project.subtitle}</Header>

    <div
      class="
        h-0.5 my-8
        bg-dark dark:bg-white
        transition-all duration-500
      "
      class:w-0={!loaded}
      class:w-full={loaded}
    />

    <div class="flex">
      <div class="flex-1">
        <p>{project.summary}</p>
        {#if project.links.length}
          <ul class="mt-6 flex gap-8 flex-wrap">
            {#each project.links as projectLink}
              <li >
                <a href={projectLink.url} target="_blank" rel="noreferrer" class="external-link">
                  {projectLink.title}
                  <!-- <ArrowLink title={projectLink.title} disableArrow={project.links.length > 1} /> -->
                </a>
              </li>
            {/each}
          </ul>
        {/if}
      </div>
      <div class="hidden sm:block flex-1 text-sm text-right uppercase">
        <ul class="lg:text-base">
          {#each project.tags as tag}
            <li>{tag}</li>
          {/each}
        </ul>
      </div>
    </div>
  </div>

  <div slot="after">
    <div class="flex flex-col gap-24">
      {#each project.detail as detail}
        <PageRow>
          <div slot="left" class="self-end overflow-hidden">
            <Header size="h2" bold>{detail.title}</Header>
            <p>{detail.description}</p>
          </div>
          <div slot="right" class="flex flex-col gap-4">
            {#each detail.media as media}
              <div class="w-full flex flex-wrap gap-4">
                {#each media as mediaItem}
                  <div class="flex-1 basis-1/3">
                    {#if mediaItem.type === "image"}
                      <Picture
                        picture={mediaItem.sources}
                        alt={mediaItem.alt}
                        class="w-full object-cover aspect-[500/333]"
                      />
                    {:else}
                      <video class="w-full" autoplay muted loop playsinline>
                        <source
                          src={mediaItem.url}
                          type={mediaItem.videoType}
                        />
                        <track kind="captions" />
                      </video>
                    {/if}
                  </div>
                {/each}
              </div>
            {/each}
          </div>
        </PageRow>
      {/each}
    </div>

    <div class="mt-36">
      <NextProjectItem project={next} />
    </div>
  </div>
</MainLayout>
