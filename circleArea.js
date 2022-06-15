function circleArea(rad) {
    let inputType = typeof(rad);
    if (inputType === "number") {
        let area = Math.PI*rad**2;
        console.log(`${area.toFixed(2)}`);
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${inputType}.`);
    }
}
circleArea(5);
circleArea('name');