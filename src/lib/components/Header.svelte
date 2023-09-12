<header>
  <h1>squadpage</h1>
  <div class="info_component">
    <h3>Globale squad informatie</h3>
    <div class="lines">
      <div class="horizontal" />
      <div class="vertical_line">
        <div class="linesv" />
        <div class="linesv" />
        <div class="linesv" />
        <div class="linesv" />
        <div class="linesv" />
      </div>
    </div>
  </div>
</header>

<style>
  header {
    color: var(--dark);

    & h1 {
      color: var(--flashWhite);
      font-size: 8vw;
    }

    & .info_component {
      background-color: var(--flashWhite);
      border-radius: var(--bradius);
      width: 100%;
      height: 25vw;
      margin: var(--padding) 0 var(--padding) 0;
      padding: var(--padding);
    }

    & .lines {
      margin: var(--padding) 0 var(--padding) 0;
      width: 100%;

      & .horizontal {
        border: 0.5px solid var(--dark);
      }

      & .vertical_line {
        display: flex;
        justify-content: space-between;
        width: 100%;
      }

      & .linesv {
        height: 21vw;
        width: 1px;
        border-left: 1px solid var(--dark);
      }

      & .linesv:nth-child(5),
      .linesv:nth-child(1) {
        opacity: 0;
      }
    }
  }
</style>
