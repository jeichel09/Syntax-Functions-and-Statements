function squareOfStars(num) {
    if (num) {
        for (let i=1; i<= num; i++) {
            console.log("* ".repeat(num));
        }
    } else {
        for (let k=1; k<= 5; k++) {
            console.log('* '.repeat(5));
        } 
    }
}
squareOfStars();
squareOfStars(2);
squareOfStars(5);
squareOfStars(7);