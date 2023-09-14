<script>
  import { PrismicImage } from "@prismicio/svelte";
  import { onMount } from 'svelte';
  export let data;

  import { fade, slide, fly } from "svelte/transition";
  
  let showing = false;

  onMount(() => {
		showing = true
	})
</script>

<!-- <pre>
  {JSON.stringify(data, null)}
</pre>   -->

<header>
  {#if showing}
  <span transition:slide={{ duration: 1500}}>{data.naam[0].text}</span>
  {/if}
  <a href="/">Home</a>
</header>

<!-- <a href="/">Home</a> -->

<section>
  <div class="containerr">
    <div class="container_info">
      {#if showing}
      <div class="id_container">
          <div class="id_info" transition:fade={{ x: -400, duration: 1000}} >
            <p>ID.</p>
            <span>50</span>
          </div>
      </div>

      <div class="squad_container">
        <div class="squad_info" transition:fade={{ delay: 500, x: -400, duration: 1000}}>
          <p>SQUAD.</p>
          <span>{data.squad[6]}</span>
        </div>
      </div>
      {/if}
    </div>
    <article>
      <p>
        " I BRING YEARS OF EXPERIENCE BUILDING & SHAPING BRANDS WITH A STEADY HAND OF
        CREATIVITY,VISION AND COUNSEL. ”
      </p>
    </article>
  </div>

  <img src={data.afbeelding.url} alt="" width="440" height="520" />
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
    display: flex;
    justify-content: space-between;
    align-items: center;

    & span {
      font-size: 6vw;
      font-weight: 300;
      text-transform: uppercase;
    }
    & a {
      position: relative;
    }

    & a::after {
      position: absolute;
      content: "";
      background: var(--flashWhite);
      width: 100%;
      height: 0.5px;
      left: 0;
      bottom: 0;
      transform: scaleX(0);
      transform-origin: left;
      transition: transform 0.25s ease-in;
    }

    & a:hover::after {
      transform: scale(1);
      transform-origin: right;
    }
  }

  section {
    display: flex;

    & .containerr {
      background-color: var(--flashWhite);
      color: black;
      border-radius: var(--bradius);
      width: 52.3vw;
      height: 15vw;

      & article {
        color: white;
        margin-top: var(--padding);
        width: 30vw;
      }

      & article span {
        word-break: break-all;
      }
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
    object-fit: cover;
    margin-left: 2rem;
    animation: clip 1s ease-in-out;
  }

  @keyframes clip {
    0% {
      clip-path: polygon(0 100%, 100% 78%, 100% 100%, 0% 100%);
    }

    100% {
      clip-path: polygon(0 100%, 100% 100%, 100% 0, 0 0);
    }
  }
</style>
