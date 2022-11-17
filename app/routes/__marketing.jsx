
import { Outlet } from "@remix-run/react";


import MainHeader from "~/components/navigation/MainHeader";
import { getUserFromSession } from "~/data/auth.server";
import sharedStyles from '~/styles/marketing.css';

export default function ExpensesAppLayout(){
    return <><MainHeader/>
        <Outlet/>
    </>

}

export function loader({request}){
return getUserFromSession(request);
}

export function links(){
    return [{rel:'stylesheet', href: sharedStyles}]
  }