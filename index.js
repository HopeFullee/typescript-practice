var tt = "ts-practice";
console.log(tt);
var strNumFilter = function () {
    var restParam = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        restParam[_i] = arguments[_i];
    }
    var strArr = [];
    var numArr = [];
    restParam.forEach(function (v) {
        if (typeof v === "string") {
            strArr.push(v);
        }
        else if (typeof v === "number") {
            numArr.push(v);
        }
    });
    return [strArr, numArr];
};
var filteredResult = strNumFilter(123, "asd", 456, 789, "qwer");
console.log(filteredResult);
