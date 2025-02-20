<script lang="ts">
  export let title: string;
  export let disableArrow = false;
</script>

<div class="group flex gap-2 xl:text-lg tracking-widest uppercase font-bold">
  <div>{title}</div>
  {#if !disableArrow}
    <svg
      class="group-hover:translate-x-4 transition-transform ease-in-out duration-200"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      width="42px"
      height="22px"
      viewBox="0 0 42 22"
      version="1.1"
      fill="none"
    >
      <g class="stroke-dark dark:stroke-white" fill="none" stroke-width="1">
        <line
          x1="5"
          y1="11.01"
          x2="35"
          y2="11.01"
          id="Path"
          stroke-width="1.7"
          fill-rule="nonzero"
        />
        <polyline
          id="Path"
          stroke-width="1.7"
          fill-rule="nonzero"
          points="27.52 19.34 36.02 11.01 27.52 2.68"
        />
      </g>
    </svg>
  {/if}
</div>
