<script>
    import { onMount } from "svelte";
</script>

<header>
  <h1>squadpage</h1>
  <div class="info_component">
    <h3>Globale squad informatie</h3>
    <div class="line_container">

      <div class="line">
        <dl class="container">
          <dt id="squad">54</dt>
          <dd>Members</dd>
        </dl>
      </div>

      <div class="line">
        <dl class="container">
          <dt id="squads">2</dt>
          <dd>Squads</dd>
        </dl>
      </div>

      <div class="line">
        <dl class="container">
          <dt id="squad_a">28</dt>
          <dd>Squad A</dd>
        </dl>
      </div>

      <div class="line">
        <dl class="container">
          <dt id="squad_b">26</dt>
          <dd>Squad B</dd>
        </dl>
      
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
    & dt {
      font-size: 8vw;
    }
  }

  @media screen and (max-width: 500px) {
    header h1 {
      font-size: 16px;
    } 

    .info_component {
      height: 30vh;
    }

    .info_component h3 {
        font-size: 16px;
      }

    .container {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
    }

    .line span {
      font-size: 20px;
    }

    .line p {
      font-size: smaller;
    }

    dd{
      white-space: nowrap;
      font-size: 13px;
    }
  }
</style>


<!-- .info_component {
  display: flex;
  justify-content: center;
  align-items: center;
}
.info_component h3 {
  font-size: smaller;
  /* height: 40vw; */
}
.line {
  font-size: 0px;
} -->