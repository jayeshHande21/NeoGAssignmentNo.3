import { useState } from "react";

// Create a list of Grocery list items with checkboxes and as the user checks out the item those checked-out items should be listed in another section named ‘Completed list’. Add the list of items via an input field.

export const Grocery = () => {
  const [inputValue, setInputValue] = useState([]);
  const [itemList, setItemList] = useState([]);
  const [completedList, setCompletedList] = useState([]);
  const handleAddBtn = () => {
    setItemList([...itemList, inputValue]);
  };
  const handleInputValue = (event) => {
    const newItem = event.target.value;
    setInputValue(newItem);
  };
  // console.log(itemList);
  const handleCheckBox = (event, checkItem) => {
    if (event.type === "click") {
      setCompletedList([...completedList, checkItem]);
      const updatedList = itemList.filter((item) => item !== checkItem);
      setItemList(updatedList);
    }
  };

  return (
    <div
      style={{
        bordr: "1px solid grey",
        width: "300px",
        margin: "auto",
        padding: "30px"
      }}
    >
      <hr />
      <h2>GROCERY LIST</h2>
      ADD ITEM{" "}
      <input
        onChange={handleInputValue}
        placeholder="Enter your list Item"
      />{" "}
      <button onClick={handleAddBtn}>ADD</button>
      <div>
        {itemList.map((item, index) => (
          <div key={item.id}>
            <input
              value="itemName"
              onClick={(event) => handleCheckBox(event, item)}
              type="checkbox"
            />
            {item}
          </div>
        ))}
      </div>
      <h2>COMPLETED LIST</h2>
      <div>{completedList && completedList.map((item) => <ul>{item}</ul>)}</div>
    </div>
  );
};
