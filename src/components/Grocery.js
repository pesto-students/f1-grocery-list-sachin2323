import { useState } from "react";

const Grocery = ({ groceryObj }) => {
  const [bought, setBought] = useState(false);

  return (
    <div
      className={bought ? "grocery bought" : "grocery"}
      onClick={() => setBought(!bought)}
    >
      <p>
        Name : <b>{groceryObj.name}</b>
      </p>
      <p>
        Quantity : <b>{groceryObj.qty}</b>
      </p>
      <hr />
    </div>
  );
};

export default Grocery;
