<header>
  <h1>squadpage</h1>
  <div class="info_component">
    <h3>Globale squad informatie</h3>
    <div class="line_container">
      <div class="line">
        <div class="container">
          <span id="squad">54</span>
          <p>Squad Members</p>
        </div>
      </div>
      <div class="line">
        <div class="container">
          <span id="squads">02</span>
          <p>Squads</p>
        </div>
      </div>
      <div class="line">
        <div class="container">
          <span id="squad_a">28</span>
          <p>Squad A</p>
        </div>
      </div>
      <div class="line">
        <div class="container">
          <span id="squad_b">26</span>
          <p>Squad B</p>
        </div>
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
      font-weight: 400;
    }

    & h3 {
      font-weight: 300;
    }

    & .info_component {
      background-color: var(--flashWhite);
      border-radius: var(--bradius);
      width: 100%;
      height: 25vw;
      margin: var(--padding) 0 var(--padding) 0;
      padding: var(--padding);
      font-weight: 300;
    }

    & .line_container {
      margin: var(--padding) 0 var(--padding) 0;
      display: flex;
    }

    & .line {
      display: flex;
      justify-content: center;
      align-items: center;
      border-top: 1px solid var(--dark);
      border-left: 1px solid var(--dark);
      height: 19vw;
      width: 25%;
    }

    & .line:nth-child(1) {
      border-left: 0px;
    }

    & .container {
      text-align: left;
    }

    & span {
      font-size: 8vw;
    }

    & #squad {
      color: var(--justBlue);
    }

    & #squads {
      color: var(--bitterSweet);
    }

    & #squad_a {
      color: var(--mainlyGreen);
    }

    & #squad_b {
      color: var(--webLavender);
    }
  }
</style>
