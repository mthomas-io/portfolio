<script lang="ts">
  const menuItems = [
    {
      name: "Work",
      slug: "",
    },
    {
      name: "About",
      slug: "#about",
    },
    {
      name: "Resume",
      slug: "#resume",
    },
  ];
</script>

<aside
  class="w-full flex gap-4 flex-col justify-between max-md:items-center md:gap-10 md:w-1/3 md:min-w-[200px]"
>
  <div class="flex items-center text-sm tracking-widest">THOMAS SCHOUTSEN</div>
  <nav>
    <ul class="flex gap-8 md:flex-col md:gap-2">
      {#each menuItems as menuItem}
        <li>
          <a
            href="/{menuItem.slug}"
            class="
              internal-link
              text-sm
              tracking-widest
              uppercase
          "
          >
            {menuItem.name}
          </a>
        </li>
      {/each}
    </ul>
  </nav>
</aside>
