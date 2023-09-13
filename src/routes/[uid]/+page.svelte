<script>
  import { PrismicImage } from "@prismicio/svelte";
  export let data;
</script>

<section>
  <h1>{data.naam[0].text}</h1>
  <p>{data.squad}</p>
  <img src={data.afbeelding.url} alt="" width="240" height="320" />
</section>

<style>
</style>
