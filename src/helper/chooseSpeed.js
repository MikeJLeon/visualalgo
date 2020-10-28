function chooseSpeed(speed, setSpeed){
    if(speed < 5){
        speed = 5;
        document.getElementById("speed").value = speed;
    }
    setSpeed(speed);
}

export default chooseSpeed;