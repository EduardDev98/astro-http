import type { APIRoute, GetStaticPaths } from "astro";
import { getEntry } from "astro:content";


//MODO STATIC Y PRERENDER = FALSE renderizamos en el lado del servidor
export const prerender = false;


export const GET: APIRoute = async ({ params, request }) => {

  const {slug} = params;

  const post = await getEntry('blog',slug as any);

  if ( !post ){
    return new Response(JSON.stringify({msg: `Post ${slug} not found`}), { 
        status: 404 ,
        headers: {
            'Content-Type': 'application/json'
        } ,
    }); 
  }

  return new Response( JSON.stringify( post ),
    { 
      status: 200,  
      headers: {
      'Content-Type': 'application/json'
    }, 
  });

};

export const POST : APIRoute = async ({ params,request }) => {

  const body = await request.json();

  return new Response( JSON.stringify({
    method:'POST',
    ...body,
  }),
    { 
      status: 200,  
      headers: {
      'Content-Type': 'application/json'
    }, 
  });

};

export const PUT : APIRoute = async ({ params,request }) => {

  const body = await request.json();

  return new Response( JSON.stringify({
    method:'PUT',
    ...body,
  }),
    { 
      status: 200,  
      headers: {
      'Content-Type': 'application/json'
    }, 
  });

};

export const DELETE : APIRoute = async ({ params,request }) => {

  const {slug} = params;

  return new Response( JSON.stringify({
    method:'DELETE',
    slug: slug,
  }),
    { 
      status: 200,  
      headers: {
      'Content-Type': 'application/json'
    }, 
  });

};