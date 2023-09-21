<script>
  import { filter } from "@prismicio/client";
  import { onMount } from "svelte";
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
      const textAnimation = li.querySelector(".member-name");

      li.addEventListener("mouseenter", function (e) {
        background.classList.add("animated");
        textAnimation.classList.add("textRight");
      });

      li.addEventListener("mouseleave", function (e) {
        setTimeout(() => {
          background.classList.remove("animated");
          textAnimation.classList.remove("textRight");
        }, 200);
      });
    });

    const filterLinks = document.querySelectorAll(".filter-link");
    const squadMembers = document.querySelectorAll(".squad-member");

    filterLinks.forEach((link) => {
      link.addEventListener("click", () => {
        const filterValue = link.getAttribute("data-filter");

        squadMembers.forEach((member) => {
          const squad = member.getAttribute("data-squad");
          if (filterValue === "all" || squad === filterValue) {
            member.style.display = "block";
          } else {
            member.style.display = "none";
          }
          event.preventDefault();
        });
      });
    });
  });
</script>

<div class="container_filter">
  <a href="#" class="filter-link" data-filter="all">ALLE</a>
  <a href="#" class="filter-link" data-filter="Squad A">SQUAD A</a>
  <a href="#" class="filter-link" data-filter="Squad B">SQUAD B</a>
</div>
<h3>Op deze pagina kun je alle squadmembers vinden.</h3>
<ul>
    {#each list.items as item}
      <li class="squad-member" data-squad={item.Squad_Member.data.squad}>
        <svg
          class="arrow textRight"
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
  .container_filter {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;
    width: 15%;

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
  h3 {
    font-size: 3.5vw;
    font-weight: 300;
    border-top: 1px solid var(--flashWhite);
    padding: 0.4em 0;
  }

  ul {
    border-bottom: 1px solid var(--flashWhite);
  }

  ul:hover img {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  }

  li {
    position: relative;
    border-top: 1px solid var(--flashWhite);
    list-style-type: none;
    padding: 1em 0;
    transition: 0.3s;
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

  :is(.animated) {
    opacity: 1;
  }

  :is(.textRight) {
    transform: translateX(2em);
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
    clip-path: polygon(0 0, 0 0, 0 100%, 0% 100%);
    transition: clip-path 0.8s ease-in-out;
  }


  @media (max-width: 500px) {
    .container_filter {
      display: flex;
      justify-content: space-between;
      width: 100%;
    }
  }
  @media (prefers-reduced-motion) {

    .background {
      display: none;
    }
  }

</style>
