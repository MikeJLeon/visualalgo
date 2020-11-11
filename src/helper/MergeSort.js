function merge(array, leftArray, rightArray, setArray) {
  if (!leftArray || leftArray.length == 0) {
    return rightArray;
  }
  if (!rightArray || rightArray.length == 0) {
    return leftArray;
  }
  let indexLeft = 0;
  let indexRight = 0;
  let newArray = [];
  let minID = leftArray[0].id;
  while (leftArray.length > indexLeft && rightArray.length > indexRight) {
    let objToAdd = {};
    // console.log(leftArray[indexLeft].id, rightArray[indexRight].id, "START");
    if (leftArray[indexLeft].value > rightArray[indexRight].value) {
      objToAdd = {id:minID, value:rightArray[indexRight].value};
      newArray.push(objToAdd);
      indexRight++;
    } else {
      objToAdd = {id:minID, value:leftArray[indexLeft].value};
      newArray.push(objToAdd);
      indexLeft++;
    }
    minID++;
    // console.log(...newArray, "end");
  }
  if (leftArray.length > indexLeft) {
    for(let obj of leftArray.slice(indexLeft)){
      obj.id = minID;
      newArray.push(obj);
      minID++;
    }
    //newArray.push(...leftArray.slice(indexLeft));
  } else {
    for(let obj of rightArray.slice(indexRight)){
      obj.id = minID;
      newArray.push(obj);
      minID++;
    }
    //newArray.push(...rightArray.slice(indexRight));
  }
  return newArray;
}

function MergeSort(array, setArray, steps, length, speed) {
  if (array.length <= 1) {
    return array;
  }
  let middle = Math.floor(array.length / 2);
  let left = array.slice(0, middle);
  let right = array.slice(middle);
  let leftArray = MergeSort(left, setArray, steps, length, speed);
  let rightArray = MergeSort(right, setArray, steps, length, speed);
  let newArray = merge(array, leftArray, rightArray, setArray);
  console.log(...newArray,"NEW ARRAY");
  steps.push([...newArray]);
  if (newArray.length === length) {
    let iterator = 1;
    for (let activeBars of steps) {
      let min = activeBars[0].id;
      console.log(...activeBars);
      for (let bar of activeBars) {
        if (bar.id < min) {
          min = bar.id;
        }
        setTimeout(() => {
          document
            .getElementsByClassName("dataBar")
            [bar.id].classList.add("active");
          setTimeout(() => {
            //setArray([...array.splice(min, activeBars.length, ...activeBars)]);
            //console.log(...array);
            document
              .getElementsByClassName("dataBar")
              [bar.id].classList.remove("active");
          }, speed);
        }, speed * iterator);
      }
      setTimeout(() => {
        array.splice(activeBars[0].id, activeBars.length, ...activeBars);
        console.log([...array]);
        setArray([...array]);
      }, speed * iterator);
      iterator++;
    }
    // if (newArray === array) {
    //   return;
    // }
    // let iterator = 1;
    // while (steps.length > 0) {
    //   let activeBars = steps.shift();
    //   let min = activeBars[0].id;
    //   for (let bar of activeBars) {
    //     if (bar.id < min) {
    //       min = bar.id;
    //     }
    //     setTimeout(() => {
    //       document
    //         .getElementsByClassName("dataBar")
    //         [bar.id].classList.add("active");
    //       setTimeout(() => {
    //         document
    //           .getElementsByClassName("dataBar")
    //           [bar.id].classList.remove("active");
    //       }, speed);
    //     }, speed * iterator);
    //   }
    //   iterator++;
    // }
    // return array;
  }
  return newArray;
}

export default MergeSort;
