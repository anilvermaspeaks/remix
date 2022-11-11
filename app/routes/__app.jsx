
import { Outlet } from "@remix-run/react";

import MainHeader from "~/components/navigation/ExpensesHeader";

import sharedStyles from '~/styles/expenses.css';

export default function ExpensesAppLayout(){

    
    return <><MainHeader/>
        <Outlet/>
    </>

}


export function links(){
    return [{rel:'stylesheet', href: sharedStyles}]
  }