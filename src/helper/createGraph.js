function createGraph(array, setArray, length, originalArray, setOriginal) {
  let newArray = [];
  for (let i = 0; i < length; i++) {
    newArray.push({ id: i, value: Math.floor(Math.random() * (100 - 1) + 1) });
  }
  console.log(newArray.length);
  console.log([...newArray] );
  setArray(newArray);
  setOriginal([...newArray]);
}

export default createGraph;
