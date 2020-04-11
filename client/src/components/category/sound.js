function sound (option) {
    if (option === "right"){
        let rightSound = document.getElementById("correct-answer");
        // debugger;
        rightSound.play();
    }else{
        let wrongSound = document.getElementById("wrong-answer");
        wrongSound.play();
    }
}

export default sound;