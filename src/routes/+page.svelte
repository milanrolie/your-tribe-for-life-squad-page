<script>
  import { SliceZone } from "@prismicio/svelte";
  import { components } from "$lib/slices";
  import MemberList from "$lib/components/MemberList.svelte";
  import Header from "$lib/components/Header.svelte";
  import Footer from "../lib/components/Footer.svelte";

  export let data;
</script>

<Header />
<MemberList list={data.slices[0]} />
<Footer />
