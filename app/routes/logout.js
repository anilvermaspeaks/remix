import { json } from "@remix-run/node";
import { destroyUserSesssion } from "~/data/auth.server";

export function action({request}) {
 if(request.method !== 'post'){
    throw json({message:'invalid request'},{
        status:400
    })
 }
 return destroyUserSesssion(request);
}