<script>
  import Header from "$lib/components/typography/Header.svelte";
  import ArrowLink from "$lib/components/common/ArrowLink.svelte";
</script>

<div class="flex gap-16 flex-col md:flex-row">
  <div class="flex-1 flex flex-col gap-4">
    <Header size="h2" bold>About</Header>
    <p>
      Hi! I'm Thomas. An experienced full-stack developer from the Netherlands. 
      On my dev journey, I have taken the opportunity to work on diverse projects across several countries in Europe and have resided in Canada for 3 years, where I still hold permanent resident status. I have experience
      working in agile teams, have mentored junior developers, led a (small) dev
      team and as a freelance developer continuously provide consulting services on product decisions
      and full-stack development to my clients. The positions I've held range from
      working at small start-ups, to scale-up and to large-scale companies in hydrography & geophysics,
      healthcare, marketing and cyber-security industries. I
      have established and maintained successful working relationships with my
      clients and am committed to building and maintaining projects on set
      timelines. I am passionate about using this technology to make a positive
      impact on the environment. In my spare time I build tools as an "IndieHacker", dive into and learn all about Blockchain and Web3, and love to travel, run, hike, camp and explore the outdoors! Looking forward to meeting you!
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
        href="https://drive.google.com/file/d/1iNZe4jAxucJQuqiqhSi04YGvH0b2o7q-/view"
        target="_blank"
        rel="noreferrer"
        class="flex gap-2"
      >
        <ArrowLink title="View Resume" />
      </a>
    </div>
  </div>
</div>
