import  {Form, Link, useActionData, useLoaderData, useTransition as useNavigation} from '@remix-run/react'

function ExpenseForm() {
  const today = new Date().toISOString().slice(0, 10); // yields something like 2023-09-10
    const validationErrrors =  useActionData();
   const navigation = useNavigation();
   const expenseData = useLoaderData();   
   const defaultValues = expenseData ? {
    title: expenseData?.title,
    date: expenseData?.date,
    amount: expenseData?.amount,
   } : {
    title: '',
    date: '',
    amount: '',
   }
   const isSubmitting = navigation.state !=='idle';

  return (
    <Form method="post" className="form" id="expense-form">
      <p>
        <label htmlFor="title">Expense Title</label>
        <input type="text" id="title" name="title" required maxLength={30} 
          defaultValue ={defaultValues.title}
        />
      </p>

      <div className="form-row">
        <p>
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            id="amount"
            name="amount"
            min="0"
            step="0.01"
            required
            defaultValue ={defaultValues.amount}
          />
        </p>
        <p>
          <label htmlFor="date">Date</label>
          <input type="date" id="date" name="date" max={today} required
           defaultValue ={defaultValues.date ? defaultValues.date.slice(0,10):''}
           />
        </p>
      </div>
      {validationErrrors && <ul>
        {Object.values(validationErrrors).map((err)=><li key={err}>{err}</li>)}
      </ul>}
      <div className="form-actions">
        <button disabled={isSubmitting}>{isSubmitting ? 'Saving Expense' : 'Save Expense' }</button>
        <Link to="..">Cancel</Link>
      </div>
    </Form>
  );
}

export default ExpenseForm;
