import React, { useState } from "react";
import createGraph from "./helper/createGraph";
import MergeSort from "./helper/MergeSort";
import BubbleSort from "./helper/BubbleSort";
import resetGraph from "./helper/resetGraph";
import chooseLength from "./helper/chooseLength";
import chooseSpeed from "./helper/chooseSpeed";

function Home() {
  const [array, setArray] = useState([]);
  const [originalArray, setOriginal] = useState([]);
  const [length, setLength] = useState(12);
  const [speed, setSpeed] = useState(100);
  return (
    <div>
      <button
        onClick={() =>
          createGraph(array, setArray, length, originalArray, setOriginal)
        }
      >
        Create
      </button>
      <button
        onClick={() => MergeSort(array, setArray, [], originalArray.length, speed)}
      >
        Merge Sort
      </button>
      <button
        onClick={() => BubbleSort(array, setArray, [], originalArray.length, speed)}
      >
        BubbleSort
      </button>
      <label>Set Length(0 -> 100):</label>
      <input
        onChange={(e) => chooseLength(e.target.value, setLength)}
        type="number"
        id="length"
        name="length"
        min="5"
        max="100"
      ></input>
      <label>Set Speed (Min 5, in MS):</label>
      <input
        onChange={(e) => chooseSpeed(e.target.value, setSpeed)}
        type="number"
        id="speed"
        name="speed"
        min="5"
      ></input>
      <button onClick={() => resetGraph(originalArray, setArray)}>Reset</button>
      <div className="graph">
        {array.map((value, index) => (
          <li
            key={index}
            data-id={value.id}
            className="dataBar"
            style={{
              backgroundColor: "black",
              border: "1px solid white",
              height: value.value + "%",
              color: "red",
            }}
          ></li>
        ))}
      </div>
    </div>
  );
}

export default Home;
