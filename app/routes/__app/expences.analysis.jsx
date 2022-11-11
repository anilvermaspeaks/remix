import ExpenseStatistics from "~/components/expenses/ExpenseStatistics";

import Chart from "~/components/expenses/Chart";

const dummyData = [{
  id:1,
  title:'new 1',
  amount:1,
  date:'11'
}]
export default function ExpencesAnalysisPage() {
    return (
     <main>
      <Chart expenses={dummyData}/>
      <ExpenseStatistics expenses={dummyData} />
     </main>
    );
  }
  