function BubbleSort(array, setArray, steps, length, speed) {
  let notSorted = true;
  let counter = 1;
  let newArray = [...array];
  for (let i = 0; i < newArray.length; i++) {
    notSorted = false;
    for (let j = 0; j < newArray.length - i - 1; j++) {
      steps.push([newArray[j], newArray[j + 1]]);
      setTimeout(() => {
        document.getElementsByClassName("dataBar")[j + 1].classList.add("active");
        document.getElementsByClassName("dataBar")[j].classList.add("active");
        console.log(j, j + 1, document.getElementsByClassName("dataBar")[j + 1], document.getElementsByClassName("dataBar")[j])
        setTimeout(() => {
          document
            .getElementsByClassName("dataBar")
            [j + 1].classList.remove("active");
          document
            .getElementsByClassName("dataBar")
            [j].classList.remove("active");
        }, speed);
      }, speed * counter);
      if (newArray[j].value > newArray[j + 1].value) {
        notSorted = true;
        let tmp = newArray[j + 1];
        newArray[j + 1] = newArray[j];
        newArray[j] = tmp;
        setTimeout(() => {
          let tmp = array[j + 1];
          array[j + 1] = array[j];
          array[j] = tmp;
          setArray([...array]);
        }, speed * counter);
      }
      counter++;
    }
    if (!notSorted) {
      break;
    }
  }
}
export default BubbleSort;
