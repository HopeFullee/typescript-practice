var tt = "ts-practice";
console.log(tt);
var cutZero = function (x) {
    var arr = x.split("");
    if (arr[0] === "0") {
        var sliceTo = 0;
        for (var i = 0; i <= arr.length; i++) {
            if (arr[i] !== "0")
                break;
            sliceTo = i + 1;
        }
        arr = arr.slice(sliceTo);
    }
    return arr.join("");
};
var removeDash = function (x) {
    var arr = x.split("");
    var filterDash = [];
    arr.forEach(function (val, _) {
        if (val !== "-") {
            filterDash.push(val);
        }
    });
    return parseInt(filterDash.join(""), 10);
};
var getPhoneNumber = function (number, cutZero, removeDash) {
    var cutZeroRes = cutZero(number);
    var removeDashRes = removeDash(cutZeroRes);
    console.log(removeDashRes);
};
getPhoneNumber("010-1234-5678", cutZero, removeDash);
/*********************************************************************************************************************************/
