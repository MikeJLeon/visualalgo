import React, { useState } from "react";

function createGraph(array, setArray, length) {
  console.log(array);
  let newArray = [];
  for (let i = 0; i < length; i++) {
    newArray.push(Math.floor(Math.random() * (50 - 1) + 1));
  }
  console.log(newArray);
  setArray(newArray);
}

function sortGraph(array, setArray, length) {
  let currentValue;
  let newArray = [...array];
  for (let i = 0; i < newArray.length; i++) {
    for (let j = i + 1; j < newArray.length; j++) {
      if (i != j && newArray[i] > newArray[j]) {
        let hold = newArray[i];
        newArray[i] = newArray[j];
        newArray[j] = hold;
        setArray(newArray);
      }
    }
  }
  console.log(newArray);
}

function Home() {
  const [array, setArray] = useState([]);
  const [length, setLength] = useState(30);
  console.log(length);
  console.log(array);
  return (
    <div>
      <button onClick={() => createGraph(array, setArray, length)}>
        Create
      </button>
      <button onClick={() => sortGraph(array, setArray, length)}>Sort</button>

      <div className="graph">
        {array.map((value) => (
          <li
            style={{
              backgroundColor: "black",
              width: 20 + "px",
              border: "1px solid white",
              height: value + "%",
              color: "red",
            }}
          >
            {value}
          </li>
        ))}
      </div>
    </div>
  );
}

export default Home;
