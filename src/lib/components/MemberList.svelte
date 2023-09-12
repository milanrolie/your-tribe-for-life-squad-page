<script>
   import { onMount } from "svelte";

export let list;

onMount(() => {
  var cursors = document.querySelectorAll(".follow-img");

  document.addEventListener("mousemove", (e) => {
    var x = e.clientX;
    var y = e.clientY;

    cursors.forEach((cursor) => {
      cursor.style.left = `${x}px`;
      cursor.style.top = `${y}px`;
    });
  });
});
</script>

<h3>op deze pagina kun je alle squadmembers vinden.</h3>

<ul>
  {#each list.items.slice(0, 6) as item}
    <li>
      <a href={item.Squad_Member.uid}>
        <p class="member-name">{item.Squad_Member.data.naam[0].text}</p>
        <!-- <div class="background background-top" />
        <div class="background background-bottom" /> -->
        <img
          class="follow-img"
          src={item.Squad_Member.data.afbeelding.url}
          alt={item.Squad_Member.data.naam[0].text}
          width="240"
          height="320"
        />
        <p class="squad">{item.Squad_Member.data.squad}</p>
        <p class="view">view</p>
      </a>
    </li>
  {/each}
</ul>


<style>
  h3 {
    font-size: 3.5vw;
    font-weight: 300;
    border-top: 1px solid var(--flashWhite);
    padding: 0.4em 0;
  }

  ul {
    border-bottom: 1px solid var(--flashWhite);
  }

  li {
    position: relative;
    border-top: 1px solid var(--flashWhite);
    list-style-type: none;
    padding: 1em 0;
    transition: 0.3s;
    /* clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%); */
  }

  li:hover .member-name {
    transform: translateX(2em);
  }

  li:hover img {
    opacity: 1;
  }

  li:hover .background-top {
    top: 100%;
    animation: toTop 1s forwards;
    animation-fill-mode: forwards; /* Ensure final state persists */
  }

  li:hover .background-bottom {
    top: -100%;
    animation: toBottom 1s forwards;
    animation-fill-mode: forwards; /* Ensure final state persists */
  }

  @keyframes toBottom {
    0% {
      transform: translateY(0%);
    }
    100% {
      transform: translateY(100%);
    }
  }

  @keyframes toTop {
    0% {
      transform: translateY(0%);
    }
    100% {
      transform: translateY(-100%);
    }
  }

  a {
    display: flex;
    justify-content: space-between;
  }

  p {
    font-weight: 200;
    mix-blend-mode: difference;
  }

  .member-name {
    width: 10vw;
    transition: 0.3s;
  }

  .squad {
    width: 30vw;
  }

  .background {
    position: absolute;
    background-color: var(--flashWhite);
    width: 100%;
    height: 100%;
    transition: 0.3s cubic-bezier(0.65, 0, 0.35, 1);
    z-index: -1;
  }

  .background-top {
    top: 100%;
  }

  .background-bottom {
    top: -100%;
  }

  img {
    position: fixed;
    opacity: 0;
    width: 100%;
    height: auto;
    max-width: 400px;
    box-sizing: border-box;
    z-index: 5;
    object-fit: cover;
    pointer-events: none;

  }
</style>
