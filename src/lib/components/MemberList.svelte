<script>
  import { onMount } from "svelte";
  import arrow from "$lib/assets/arrow.svg";
  export let list;

  onMount(() => {
    const cursors = document.querySelectorAll(".follow-img");
    const smoothFactor = 0.1;
    const targetPositions = Array.from(cursors).map(() => ({ x: 0, y: 0 }));

    document.addEventListener("mousemove", (e) => {
      cursors.forEach((cursor, index) => {
        targetPositions[index].x = e.clientX;
        targetPositions[index].y = e.clientY;
      });
    });

    const updatePositions = () => {
      cursors.forEach((cursor, index) => {
        const dx = targetPositions[index].x - cursor.offsetLeft;
        const dy = targetPositions[index].y - cursor.offsetTop;
        cursor.style.left = `${cursor.offsetLeft + dx * smoothFactor}px`;
        cursor.style.top = `${cursor.offsetTop + dy * smoothFactor}px`;
      });
      requestAnimationFrame(updatePositions);
    };

    updatePositions();

    const hoverLi = document.querySelectorAll("li");

    hoverLi.forEach((li) => {
      const background = li.querySelector(".background");

      li.addEventListener("mouseenter", function (e) {
        background.classList.add("animated");
      });

      li.addEventListener("mouseleave", function (e) {
        setTimeout(() => {
          background.classList.remove("animated");
        }, 200);
      });
    });
  });
</script>

<h3>op deze pagina kun je alle squadmembers vinden.</h3>
<ul>
  {#each list.items.slice(0, 6) as item}
    <li>
      <svg
        class="arrow"
        width="16"
        height="15"
        viewBox="0 0 16 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 7.80004H15M15 7.80004L8.5 0.956521M15 7.80004L8.5 14.3"
          stroke=""
        />
      </svg>
      <div class="animated" />
      <a href={item.Squad_Member.uid}>
        <p class="member-name">{item.Squad_Member.data.naam[0].text}</p>
        <div class="background" />
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
  }

  li:hover .member-name {
    transform: translateX(2em);
  }

  li:hover img {
    opacity: 1;
  }

  a {
    display: flex;
    justify-content: space-between;
  }

  .arrow {
    position: absolute;
    stroke: var(--dark);
    height: 0.9em;
    width: 0.9em;
    left: -3em;
    top: 35%;
    transition: 0.3s;
  }

  li:hover .arrow {
    transform: translateX(3.5em);
  }

  li:hover .view {
    transform: translateX(-1em);
    opacity: 1;
  }

  p {
    font-weight: 200;
  }

  .member-name {
    width: 30vw;
    transition: 0.3s;
    mix-blend-mode: difference;
  }

  .squad {
    width: 40vw;
    mix-blend-mode: difference;
  }

  .view {
    transform: translateX(3em);
    opacity: 0;
    transition: 0.3s;
    color: var(--dark);
  }

  .background {
    position: absolute;
    background-color: var(--flashWhite);
    top: 0;
    width: 100%;
    height: 100%;
    transition: 0.3s cubic-bezier(0.65, 0, 0.35, 1);
    z-index: -1;
    opacity: 0;
  }

  .animated {
    opacity: 1;
  }

  .follow-img {
    position: fixed;
    opacity: 0;
    width: 20vw;
    height: 25vw;
    max-width: 400px;
    box-sizing: border-box;
    z-index: 10;
    object-fit: cover;
    pointer-events: none;
    border-radius: 0.5em;
    transform: translateX(1em) translateY(1em);
  }
</style>
