<script>
  import { SliceZone } from "@prismicio/svelte";
  import { components } from "$lib/slices";
  import MemberList from "$lib/components/MemberList.svelte";
  import Navigation from "../lib/components/Navigation.svelte";


  export let data;
</script>

<Navigation />
<MemberList list={data.slices[0]} />


