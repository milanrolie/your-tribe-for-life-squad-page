<script>
  import { SliceZone } from "@prismicio/svelte";
  import { components } from "$lib/slices";
  import MemberList from "$lib/components/MemberList.svelte";
  import Nav from "$lib/components/Nav.svelte";


  export let data;
</script>

<Nav />
<MemberList list={data.slices[0]} />


