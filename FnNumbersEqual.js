function areNumbersEqual() {
    while (randomNum != userNum) {
        if (userNum < randomNum) {
            userNum = prompt('less');
        } else if (userNum > randomNum) {
            userNum = prompt('more');
        }
    }
    alert('Good!');
}
//