import { Outlet } from "@remix-run/react";

import ExpensesList from "~/components/expenses/ExpensesList";

const dummyData = [{
    id:"12",
    title:'new 1',
    amount:1,
    date:'11'
  }]

export default function Expenseslayout(){

    return <>
        <main>
        <Outlet/>
        <ExpensesList expenses={dummyData}/>
    </main>
    </>

}
