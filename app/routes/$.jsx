export function loader({params}){

    console.log(params)

    throw new Response('Not Found', {status:404})

}