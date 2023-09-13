<script>
  import { PrismicImage } from "@prismicio/svelte";
  export let data;
</script>

<pre>
  {JSON.stringify(data, null,)}
</pre>

<header>
<span>{data.naam[0].text}</span>
</header>

<section>
  <div class="number"></div>

  <div class="container">

    <div class="id">
      <div class="info">
      </div>
    </div>

    <div class="squad">
      <div class="info">
        <p id="squad_info">squad</p>
        <span id="info">
          {data.squad}
        </span>
      </div>
    </div>

  </div>

  <div class="boolean"></div>
</section>

<!-- <section>
  <h1>HELLO<span>{data.naam[0].text}</span></h1>

  <p>{data.squad}</p>
  <img src={data.afbeelding.url} alt="" width="240" height="320" />
</section> -->

<style>
  :global(body) {
    background-color: var(--dark);
    color: var(--flashWhite);
  }

  header {
    width: 55vw;
  }

  span {
    font-size: 6vw;
    font-weight: 300;
    text-transform: uppercase;
  }


  section {
    background-color: var(--flashWhite);
    color: black;
    border-radius: var(--bradius);
    width: 52.3vw;
    height: 15vw;
  }



  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 0 6rem 0 6rem;
  }

  .id, .squad {
    border-top: 1px solid var(--dark);
    border-right: 1px solid var(--dark);
    width: 100%;
    height: 8rem;
    padding: 2rem;
  }

  .squad {
    position: relative;
    border-right: none;
  }

  .info {
    display: flex;
    justify-content: space-between;
  }

  #info {
    position: absolute;
    bottom: 1rem;
    right: 1rem;
    font-size: 10px;
  }

  #squad_info {
    font-weight: 100;
    position: absolute;
    top: 1rem;
    left:  1rem;
  }

</style>
