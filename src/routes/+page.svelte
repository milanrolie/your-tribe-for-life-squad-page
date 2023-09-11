<script>
  import { SliceZone } from "@prismicio/svelte";
  import { components } from "$lib/slices";
  
  import Nav from "$lib/components/nav.svelte"

  export let data;
</script>


<Nav />

<SliceZone slices={data.slices} {components} />

<!-- <pre>
    {JSON.stringify(data, null, 2)}
</pre> -->



{#each data.slices[0].items.slice(0, 6) as item}
  <a href="{item.Squad_Member.uid}">
    <span>{item.Squad_Member.data.naam[0].text}</span>
    <img src="{item.Squad_Member.data.afbeelding.url}" alt="{item.Squad_Member.data.naam[0].text}" width="240" height="320"/>
    <p>{item.Squad_Member.data.squad}</p>
  </a>
{/each}


<!-- <h1>{ data.items[0].Squad_Member.slug }</h1> -->
