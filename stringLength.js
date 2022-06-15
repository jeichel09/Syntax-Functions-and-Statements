function stringLength(str1, str2, str3) {
    let len1 = str1.length;
    let len2 = str2.length;
    let len3 = str3.length;
    console.log(`${len1 + len2 + len3}`);
    console.log(`${Math.floor((len1 + len2 + len3)/3)}`);
}
stringLength('chocolate', 'ice cream', 'cake');
stringLength('pasta', '5', '22.3');