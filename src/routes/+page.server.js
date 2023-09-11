import { createClient } from "$lib/prismicio";

export async function load({ fetch, request }) {
  const client = createClient({ fetch, request });
  const document = await client.getByUID("home", "home", {
    fetchLinks: ["squad_member.afbeelding", "squad_member.squad", "squad_member.naam"],
  });
  return document.data;
}