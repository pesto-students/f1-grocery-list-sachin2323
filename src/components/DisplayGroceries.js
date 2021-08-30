import Grocery from "./Grocery";

const DisplayGroceries = ({ groceryList }) => {
  return (
    <div className="displayGroceries">
      <h2> Stock My Fridge with:</h2>
      <div className="displayGroceriesScroll">
        {groceryList?.map((grocery, index) => (
          <Grocery key={index} groceryObj={grocery} />
        ))}
      </div>
    </div>
  );
};

export default DisplayGroceries;
