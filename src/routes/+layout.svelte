<script>
    import { onMount } from "svelte";
    import Lenis from "@studio-freight/lenis";
  
    onMount(() => {
      const lenis = new Lenis({
        duration: 1.5,
        easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: true,
        smoothTouch: false,
        touchMultiplier: 1.1,
      });
  
      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
  
      requestAnimationFrame(raf);
  
      lenis.on("scroll", () => {});
  
      gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
      });
  
      gsap.ticker.lagSmoothing(0);
    });
  </script>






<main>
  <slot />
</main>

<style>


 
</style>
