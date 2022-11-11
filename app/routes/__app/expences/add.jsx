import { useNavigate } from "@remix-run/react";
import ExpenseForm from "~/components/expenses/ExpenseForm";

import Modal from "~/components/util/Modal";

export default function AddExpencesPage() {
  const navigate = useNavigate();
  function closehandler() {
    navigate('..');
  }
    return (
      <Modal onClose={closehandler}><ExpenseForm /> </Modal>   );
  }
  