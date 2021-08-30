import { useState } from "react";

const AddGroceryForm = ({ list, setList }) => {
  const [grocery, setGrocery] = useState("");

  const findGrocery = (item) => {
    return item.name === grocery;
  };

  function addHandler(e) {
    e.preventDefault();

    if (list.find(findGrocery)) {
      grocery.length > 0
        ? setList(
            list.map((item) =>
              item.name === grocery ? { ...item, qty: item.qty + 1 } : item
            )
          )
        : alert("Grocery name cannot be empty");

      setGrocery("");
    } else {
      let groceryObj = { name: grocery, qty: 1 };
      grocery.length > 0
        ? setList([...list, groceryObj])
        : alert("Grocery name cannot be empty");
      setGrocery("");
    }
  }

  return (
    <form className="groceryForm">
      <input
        type="text"
        name="grocery"
        value={grocery}
        onChange={(e) => setGrocery(e.target.value)}
        placeholder="what's cooking..."
        className="groceryInput"
      />

      <button className="groceryButton" onClick={(e) => addHandler(e)}>
        Add Grocery to List
      </button>
    </form>
  );
};

export default AddGroceryForm;
