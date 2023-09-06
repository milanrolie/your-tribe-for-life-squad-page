<script>

  /** @type {import("@prismicio/client").Content.NaamSlice} */

  export let slice;

</script>

 

<section

  data-slice-type={slice.slice_type}

  data-slice-variation={slice.variation}

>

 

  {#each slice.items as item}

    <p>{item.text}</p>

  {/each}

</section>

<pre>

  {JSON.stringify(slice, null, 2)}

</pre>