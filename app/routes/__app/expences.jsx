import { Link, Outlet } from "@remix-run/react";
import { FaDownload, FaPlus } from "react-icons/fa";

import ExpensesList from "~/components/expenses/ExpensesList";

const dummyData = [{
    id:"12",
    title:'new 1',
    amount:1,
    date:'11'
  }]

export default function Expenseslayout(){

    return <>
    <Outlet/>
        <main>
        <section id="expenses-actions">
            <Link to="add"><FaPlus /><span>Add Expence</span></Link>
            <a href="/expences/raw" target="_blank"><FaDownload/><span>Load Raw Data</span></a>
        </section>
        <ExpensesList expenses={dummyData}/>
    </main>
    </>

}
