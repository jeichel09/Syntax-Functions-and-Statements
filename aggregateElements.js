function aggregateElements(arr) {
    let sum = 0;
    let inv = 0;
    let conc = "";
    for (let i = 0; i < arr.length; i ++) {
        sum += Number(arr[i]);
        inv += (1/arr[i]);
        conc = conc + String(arr[i]); 
    }
    console.log(sum);
    console.log(inv);
    console.log(conc);
}
aggregateElements([1, 2, 3]);
aggregateElements([2, 4, 8, 16]);