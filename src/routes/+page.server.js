
import { createClient } from "$lib/prismicio"

 

export async function load({fetch, request}){

    const client = createClient({fetch, request})

 

    const document = await client.getByUID('squad_page', 'home')

 

    return document.data

}