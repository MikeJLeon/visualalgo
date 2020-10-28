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

function MergeSort(array, setArray, steps, length, speed) {
  if (array.length <= 1) {
    return array;
  }
  console.log(...steps);
  let middle = Math.floor(array.length / 2);
  let left = array.slice(0, middle);
  let right = array.slice(middle);
  let leftArray = MergeSort(left, setArray, steps, length, speed);
  let rightArray = MergeSort(right, setArray, steps, length, speed);
  let newArray = merge(leftArray, rightArray, setArray);
  steps.push(newArray);
  if (steps[steps.length - 1].length === length) {
    console.log(newArray === array);
    console.log(newArray, array);
    if (newArray === array) {
      return;
    }
    let iterator = 1;
    while (steps.length > 0) {
      let activeBars = steps.shift();
      let min = activeBars[0].id;
      let max = activeBars[0].id;
      for (let bar of activeBars) {
        if (bar.id < min) {
          min = bar.id;
        } else if (bar.id > max) {
          max = bar.id;
        }
        setTimeout(() => {
          console.log(bar);
          console.log(document.querySelector('li[data-id="' + bar.id + '"]'));
          console.log(document.getElementsByClassName("dataBar"));
          document
            .querySelector('li[data-id="' + bar.id + '"]')
            .classList.add("active");
          setTimeout(() => {
            document
              .querySelector('li[data-id="' + bar.id + '"]')
              .classList.remove("active");
          }, speed);
        }, speed * iterator);
      }
      setTimeout(() => {
        array.splice(min, activeBars.length, ...activeBars);
        setArray([...array]);
      }, speed * iterator);
      iterator++;
    }
    return array;
  }
  return newArray;
}

export default MergeSort;
