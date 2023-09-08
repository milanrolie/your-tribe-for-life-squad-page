<script>
  /** @type {import("@prismicio/client").Content.NaamSlice} */

  export let slice;
</script>

<!-- <section
  data-slice-type={slice.slice_type}
  data-slice-variation={slice.variation}
>

  {#each data.slices as slice}
    {#each slice.primary.name as item}
      <p>{item.text}</p>
    {/each}
  {/each}
</section> -->

<pre>

  {JSON.stringify(slice, null, 2)}

</pre>
