function chooseLength(length, setLength){
    if(length > 100){
        length = 100;
        document.getElementById("length").value = "100";
    }
    setLength(length);
}
export default chooseLength;