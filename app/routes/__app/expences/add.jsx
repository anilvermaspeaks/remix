import { redirect } from "@remix-run/node";
import { useNavigate } from "@remix-run/react";
import ExpenseForm from "~/components/expenses/ExpenseForm";

import Modal from "~/components/util/Modal";
import { addExpense } from "~/data/expenses.server";
import { validateExpenseInput } from "~/data/validation.server";

export default function AddExpencesPage() {
  const navigate = useNavigate();
  function closehandler() {
    navigate('..');
  }
    return (
      <Modal onClose={closehandler}><ExpenseForm /> </Modal>   );
  }
  

  export async function action({request}) {
    const formData = await request.formData();
    const expenseData = Object.fromEntries(formData);

    try{
      validateExpenseInput(expenseData)
    }

    catch(err){
     return err 
    }


    await addExpense(expenseData);
    return redirect('/expences')
  }