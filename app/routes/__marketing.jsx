
import { Outlet } from "@remix-run/react";



import sharedStyles from '~/styles/marketing.css';

export default function ExpensesAppLayout(){

    return <Outlet/>

}


export function links(){
    return [{rel:'stylesheet', href: sharedStyles}]
  }