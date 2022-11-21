import { json } from "@remix-run/node";
import { Link, Outlet, useLoaderData } from "@remix-run/react";
import { FaDownload, FaPlus } from "react-icons/fa";

import ExpensesList from "~/components/expenses/ExpensesList";
import { requireUserSession } from "~/data/auth.server";
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
        {!expenseData && <p>No Expense</p>}
    </main>
    </>

}



export async  function loader({request}) {
  await requireUserSession(request);
  const expenses = await  getExpenses();
//   if(!expenses || expenses.length ===0){
//     throw json({message:'Could not find any expenses.'},{status:404, statusText:'No expenses found!'})
//   }
  return expenses;
}

export function CatchBoundary(){
    return <p>Error</p>
}