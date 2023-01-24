<script>
  import Header from "$lib/components/typography/Header.svelte";
  import ArrowLink from "$lib/components/common/ArrowLink.svelte";
</script>

<div class="flex gap-16 flex-col md:flex-row">
  <div class="flex-1 flex flex-col gap-4">
    <Header size="h2" bold>About</Header>
    <p>
      I'm a full-stack engineer, born and raised in Netherlands, but took the
      opportunity to work on diverse projects across Europe and am currently
      residing in Canada with permanent resident status. I'm experienced in
      working in agile teams, have mentored junior developers, led a (small) dev
      team and continuously provide consulting services on product decisions,
      full-stack architecture and frameworks. The positions I've held range from
      small start-ups to large-scale clients in hydrography & geophysics,
      healthcare, marketing and cyber-security industries. As a freelancer, I
      have established and maintained successful working relationships with my
      clients and am committed to building and maintaining projects on set
      timelines. I am passionate about using this technology to make a positive
      impact on the environment.
    </p>
    <Header size="h2" bold class="mt-4">Website</Header>
    <p>
      This site was
      <a
        class="external-link"
        href="https://github.com/mthomas-io/portfolio/"
        target="_blank"
        rel="noreferrer">built by me</a
      >, using
      <a
        class="external-link"
        href="https://kit.svelte.dev/"
        target="_blank"
        rel="noreferrer">SvelteKit</a
      >
      &
      <a
        class="external-link"
        href="https://tailwindcss.com/"
        target="_blank"
        rel="noreferrer">Tailwind</a
      >.
    </p>
  </div>
  <div class="flex-1 flex gap-4 flex-col">
    <Header size="h2" bold>Contact</Header>
    <ul class="flex flex-col gap-2">
      <li>
        <a
          class="external-link text-sm tracking-widest uppercase break-words"
          href="https://linkedin.com/in/thomasschoutsen"
          target="_blank"
          rel="noreferrer"
        >
          linkedin.com/in/thomasschoutsen
        </a>
      </li>
      <li>
        <a
          class="external-link text-sm tracking-widest uppercase break-words"
          href="https://github.com/mthomas-io"
          target="_blank"
          rel="noreferrer"
        >
          github.com/mthomas-io
        </a>
      </li>
    </ul>
    <div id="resume" class="mt-6">
      <a
        href="https://drive.google.com/file/d/1cZwc_4x70q22PGEgqkqrD_6933dW02oD/view?usp=sharing"
        target="_blank"
        rel="noreferrer"
        class="flex gap-2"
      >
        <ArrowLink title="View Resume" />
      </a>
    </div>
  </div>
</div>
