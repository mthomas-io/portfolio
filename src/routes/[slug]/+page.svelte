<script lang="ts">
  import type { PageServerData } from "./$types";
  import { onMount } from "svelte";
  import MainLayout from "$lib/components/layout/MainLayout.svelte";
  import PageRow from "$lib/components/layout/PageRow.svelte";
  import Header from "$lib/components/typography/Header.svelte";
  import NextProjectItem from "$lib/components/project/NextProjectItem.svelte";
  import ArrowLink from "$lib/components/common/ArrowLink.svelte";

  export let data: PageServerData;

  $: ({ project, next } = data);

  let loaded = false;
  onMount(() => (loaded = true));
</script>

<MainLayout>
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
    alt="{project.title} project image"
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
          <ul class="mt-6">
            {#each project.links as projectLink}
              <li class="inline-block mt-4">
                <a href={projectLink.url} target="_blank" rel="noreferrer">
                  <ArrowLink title={projectLink.title} />
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
                      <img
                        src={mediaItem.url}
                        alt={mediaItem.alt}
                        class="w-full object-cover aspect-[500/333]"
                      />
                    {:else}
                      <video class="w-full" autoplay muted loop>
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
