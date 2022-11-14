import { Link, Outlet, useLoaderData } from "@remix-run/react";
import { FaDownload, FaPlus } from "react-icons/fa";

import ExpensesList from "~/components/expenses/ExpensesList";
import { getExpenses } from "~/data/expenses.server";

export default function Expenseslayout(){
 const expenseData =   useLoaderData();
    return <>
    <Outlet/>
        <main>
        <section id="expenses-actions">
            <Link to="add"><FaPlus /><span>Add Expence</span></Link>
            <a href="/expences/raw" target="_blank"><FaDownload/><span>Load Raw Data</span></a>
        </section>
        {expenseData &&<ExpensesList expenses={expenseData}/>}
    </main>
    </>

}

export async  function loader() {
  return  getExpenses()
}