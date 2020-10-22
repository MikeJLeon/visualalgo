import React, { useState } from "react";

function createGraph(array, setArray, length) {
  console.log(array);
  let newArray = [];
  for (let i = 0; i < length; i++) {
    newArray.push(Math.floor(Math.random() * (100 - 1) + 1));
  }
  console.log(newArray);
  setArray(newArray);
}
function merge(leftArray, rightArray){
  if(!leftArray || leftArray.length == 0){
    console.log(rightArray);
    return rightArray;
  }
  if(!rightArray || rightArray.length == 0){
    console.log(leftArray);
    return leftArray;
  }
  let indexLeft = 0;
  let indexRight = 0;
  let newArray = [];
  while(leftArray.length > indexLeft && rightArray.length > indexRight){
    console.log(leftArray, rightArray , newArray);
    if(leftArray[indexLeft] < rightArray[indexRight]){
      console.log(leftArray[indexLeft] + "-left");
      newArray.push(leftArray[indexLeft]);
      indexLeft++;
     
    }else{
      console.log(rightArray[indexRight] + "-right")
      newArray.push(rightArray[indexRight]);
      indexRight++;
    }
  }
  if(leftArray.length > indexLeft){
    console.log(leftArray, indexLeft);
    newArray.push(...leftArray.slice(indexLeft));
  }else{
    console.log(rightArray, indexRight);
    newArray.push(...rightArray.slice(indexRight));
  }
  console.log(newArray, leftArray, rightArray);
  return  newArray;
}
function sort(array, setArray) {

  if(array.length <= 1){
    return array;
  }
  let middle = Math.floor(array.length / 2);
  let left = array.slice(0, middle);
  let right = array.slice(middle);
  console.log(left, right, "-both");
  let leftArray = sort(left, setArray);
  let rightArray = sort(right, setArray);
  let newArray = merge(leftArray, rightArray);
  console.log(newArray, leftArray, rightArray,  "FINAL");
  setArray(newArray);
  return newArray;
}
function MergeSort() {
  const [array, setArray] = useState([]);
  const [length, setLength] = useState(30);
  return (
    <div>
      <button onClick={() => createGraph(array, setArray, length)}>
        Create
      </button>
      <button onClick={() => sort(array, setArray)}>Sort</button>

      <div className="graph">
        {array.map((value) => (
          <li
            className="dataBar"
            style={{
              backgroundColor: "black",
              border: "1px solid white",
              height: value + "%",
              color: "red",
              flexGrow:1,
            }}
          >
            {value}
          </li>
        ))}
      </div>
    </div>
  );
}

export default MergeSort;
