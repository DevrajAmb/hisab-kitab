import React, { useEffect, useState } from "react";
import { use } from "react";

const Form = ({ addTranaction, edit, updatedTransaction }) => {
  const [text, setText] = useState(" ");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    !edit.isEdit
      ? addTranaction(text, parseInt(amount))
      : updatedTransaction({
          id: edit.transactions.id,
          text: text,
          amount: parseInt(amount),
        });

    setText("");
    setAmount("");
  };

  useEffect(() => {
    setText(edit.transactions.text);
    setAmount(edit.transactions.amount);
  }, [edit]);

  return (
    <form className="my-3" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter Transaction"
        className="form-control rounded-0 my-2"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <input
        type="number"
        placeholder="Enter Amount"
        className="form-control rounded-0 my-2"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button className="btn btn-success w-100 rounded-0">
        Save Transaction{" "}
      </button>
    </form>
  );
};

export default Form;
