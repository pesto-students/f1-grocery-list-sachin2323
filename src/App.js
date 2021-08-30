import "./App.css";
import { useState } from "react";
import AddGroceryForm from "./components/AddGroceryForm";
import DisplayGroceries from "./components/DisplayGroceries";

function App() {
  const [groceryList, setGroceryList] = useState([]);

  return (
    <div className="container">
      <AddGroceryForm list={groceryList} setList={setGroceryList} />
      <DisplayGroceries groceryList={groceryList} />
      <div className="GroceryButtonContainer">
        {groceryList?.length > 0 && (
          <button
            className="groceryButtonBottom"
            onClick={() => {
              setGroceryList([]);
            }}
          >
            Clear List
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
