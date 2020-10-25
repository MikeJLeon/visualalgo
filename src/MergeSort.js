import React, { useState } from "react";

function createGraph(array, setArray, length) {
  let newArray = [];
  for (let i = 0; i < length; i++) {
    newArray.push({ id: i, value: Math.floor(Math.random() * (100 - 1) + 1) });
  }
  setArray(newArray);
}
function merge(leftArray, rightArray, setArray) {
  if (!leftArray || leftArray.length == 0) {
    return rightArray;
  }
  if (!rightArray || rightArray.length == 0) {
    return leftArray;
  }
  let indexLeft = 0;
  let indexRight = 0;
  let newArray = [];
  let iteration = 0;
  while (leftArray.length > indexLeft && rightArray.length > indexRight) {
    let currentLeft = document.querySelector(
      'li[data-id="' + leftArray[indexLeft].id + '"]'
    );
    let currentRight = document.querySelector(
      'li[data-id="' + rightArray[indexRight].id + '"]'
    );
    if (leftArray[indexLeft].value < rightArray[indexRight].value) {
      newArray.push(leftArray[indexLeft]);
      indexLeft++;
    } else {
      newArray.push(rightArray[indexRight]);
      indexRight++;
    }
  }
  if (leftArray.length > indexLeft) {
    newArray.push(...leftArray.slice(indexLeft));
  } else {
    newArray.push(...rightArray.slice(indexRight));
  }
  return newArray;
}

function sort(array, setArray, steps, length) {
  if (array.length <= 1) {
    return array;
  }
  let middle = Math.floor(array.length / 2);
  let left = array.slice(0, middle);
  let right = array.slice(middle);
  let leftArray = sort(left, setArray, steps, length);
  let rightArray = sort(right, setArray, steps, length);
  let newArray = merge(leftArray, rightArray, setArray);
  steps.push(newArray);
  console.log(steps);
  console.log(steps[steps.length - 1].length === length);
  if (steps[steps.length - 1].length === length) {
    let iterator = 1;
    while (steps.length > 0) {
      let activeBars = steps.shift();
      console.log(activeBars);
      console.log(iterator);
      for (let bar of activeBars) {
        setTimeout(() => {
          document
            .querySelector('li[data-id="' + bar.id + '"]')
            .classList.add("active");
        }, 500 * iterator);
      }
      while(document.getElementsByClassName("active").length != 0){
        setTimeout(() => {
          document.getElementsByClassName("active")[0].classList.remove("active");
        }, 1000 * iterator);
      }
      iterator++;
    }
  }
  return newArray;
}
function MergeSort() {
  const [array, setArray] = useState([]);
  const [length, setLength] = useState(100);
  return (
    <div>
      <button onClick={() => createGraph(array, setArray, length)}>
        Create
      </button>
      <button onClick={() => sort(array, setArray, [], length)}>Sort</button>

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
              flexGrow: 1,
            }}
          >
            {value.value}
          </li>
        ))}
      </div>
    </div>
  );
}

export default MergeSort;
