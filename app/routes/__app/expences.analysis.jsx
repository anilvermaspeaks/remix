import ExpenseStatistics from "~/components/expenses/ExpenseStatistics";

import Chart from "~/components/expenses/Chart";
import { getExpenses } from "~/data/expenses.server";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export default function ExpencesAnalysisPage() {
 const expenses = useLoaderData();
    return (
     <main>
      <Chart expenses={expenses}/>
      <ExpenseStatistics expenses={expenses} />
     </main>
    );
  }
  

  export async function loader(){
   const expenses = getExpenses();
    if(!expenses || expenses.length ===0){
    throw json({meessage:'Cound not load expenses'},{status:404, statusText:'Cound not load expenses'})
    }


    return expenses;
  }