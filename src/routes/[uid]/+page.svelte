<script>
  import { PrismicImage } from "@prismicio/svelte";
  export let data;
</script>

<!-- <pre>
  {JSON.stringify(data, null)}
</pre>   -->

<header>
  <span>{data.naam[0].text}</span>
</header>

<!-- <a href="/">Home</a> -->

<section>
  <div class="containerr">
    <div class="container_info">

      <div class="id_container">
        <div class="id_info">
          <p>ID.</p>
          <span>50</span>
        </div>
      </div>

      <div class="squad_container">
        <div class="squad_info">
          <p>SQUAD.</p>
          <span>{data.squad[6]}</span>
        </div>
      </div>

    </div>
  </div>
  <img src={data.afbeelding.url} alt="" width="570" height="500" />
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

    & span {
      font-size: 6vw;
      font-weight: 300;
      text-transform: uppercase;
    }
  }

  section {
    display: flex;
    justify-content: space-between;
    width: 100%;

    & .containerr {
      background-color: var(--flashWhite);
      color: black;
      border-radius: var(--bradius);
      width: 52.3vw;
      height: 15vw;
    }

    & .container_info {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      width: 52.3vw;
      padding: 0 6rem 0 6rem;
      font-weight: 200;
    }

    & .id_container,
    .squad_container {
      position: relative;
      border-top: 1px solid var(--dark);
      border-right: 1px solid var(--dark);
      width: 100%;
      height: 8rem;
      padding: 2rem;
    }

    & .squad_container {
      border-right: none;
    }

    & .id_info p,
    .squad_info p {
      position: absolute;
      top: 1rem;
      left: 1rem;
    }

    & .id_info span,
    .squad_info span {
      font-size: 50px;
      position: absolute;
      bottom: 1rem;
      right: 1rem;
    }

    & .id_info span {
      color: var(--justBlue);
    }

    & .squad_info span {
      color: var(--mainlyGreen);
    }
  }

  img {
    border-radius: var(--bradius);
  }
</style>
