<script>
  import { PrismicImage } from "@prismicio/svelte";
  import { onMount } from "svelte";
  export let data;

  import { fade, slide, fly } from "svelte/transition";

  let showing = false;

  onMount(() => {
    showing = true;
  });
</script>

<!-- <pre>
  {JSON.stringify(data, null)}
</pre>   -->

<header>
  {#if showing}
    <span transition:slide={{ duration: 1500 }}>{data.naam[0].text}</span>
  {/if}
  <a href="/">Home</a>
</header>

<main>
  <div class="container_leftside">
    <div class="info_squad">
      <div class="left_side">
        <p>ID.</p>
        <span>50</span>
      </div>

      <div class="right_side">
        <p>SQUAD.</p>
        <span>{data.squad[6]}</span>
      </div>
    </div>

    <div class="story">
      <p>
        " I BRING YEARS OF EXPERIENCE BUILDING & SHAPING BRANDS WITH A STEADY HAND OF
        CREATIVITY,VISION AND COUNSEL. ”
      </p>
    </div>
  </div>

  <div class="container_rightside">
    <img src={data.afbeelding.url} alt="" width="440" height="520" />
  </div>
</main>

<style>
  :global(body) {
    background-color: var(--dark);
    color: var(--flashWhite);
    width: 100%;
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

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

  main {
    display: flex;
    flex-wrap: wrap;
    max-width: 100%;

    & .container_leftside {
      width: 60%;
    }
    & .container_rightside {
      width: 40%;
    }

    & .info_squad {
      display: flex;
      align-items: center;
      background-color: var(--flashWhite);
      color: black;
      border-radius: var(--bradius);
      width: 90%;
      padding: 4rem;
    }

    & .left_side,
    .right_side {
      position: relative;
      border-top: 1px solid var(--dark);
      border-right: 1px solid var(--dark);
      width: 100%;
      height: 8rem;
      padding: 4rem;
      font-weight: 200;
    }

    & .right_side {
      border-right: none;
    }

    & .left_side p,
    .right_side p {
      position: absolute;
      top: 1rem;
      left: 1rem;
    }

    & .left_side span,
    .right_side span {
      font-size: 50px;
      position: absolute;
      bottom: 1rem;
      right: 1rem;
    }

    & .left_side span {
      color: var(--justBlue);
    }

    & .right_side span {
      color: var(--mainlyGreen);
    }

    & .story {
      margin-top: var(--padding);
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

  @media (max-width: 800px) {
    main {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      margin: 0 auto;
      margin-top: var(--padding);
    }
    img {
      margin-top: var(--padding);
      width: 300px;
      height: 400px;
    }

    .info_squad {
      justify-content: center;
      width: fit-content;
      height: 5vh;
    }

    .container_rightside {
      display: flex;
      justify-content: center;
    }
  }
</style>
