//----------------- 1. --------------------------------
var user = {
    name: "Danil",
    surname: "Pupkin",
    male: true,
    age: 22
};
for (var key in user) {
    alert(key + " : " + user[key]);
}
//----------------- 2. --------------------------------
function concat() {
    var result = "";
    for (var i = 0; i < arguments.length; i++) {
        result += arguments[i];
    }
    return result;
}
//----------------- 3. --------------------------------
function squared(par1, par2) {
    if (par2) {
        return par1 * par2;
    } else {
        return par1 * par1;
    }
}
squared(3);
squared(3, 5);
//----------------- 4. --------------------------------
function isNeg() {
    for (var a = 0; a < arguments.length; a++) {
        if (typeof(arguments[a]) !== "number" || typeof(arguments[a]) == "boolean") {
            alert("undefined");
        } else if (arguments[a] > 0) {
            alert(true);
        } else if (arguments[a] < 0) {
            alert(false);
        }
    }
}
//----------------- 5. --------------------------------
function concatArr() {
    var newArr = [];
    for (var b = 0; b < arguments.length; b++) {
        if (Array.isArray(arguments[b])) {
            newArr = newArr.concat(arguments[b]);
        }
    }
    return newArr;
}
//----------------- 6. --------------------------------
function degreed(num, degree) {
    var degreedNum = 1;
    for (var c = 0; c < degree; c++) {
        degreedNum *= num;
    }
    return degreedNum;
}
//----------------- 7. --------------------------------
function sumElem(arr, index) {
    index = index || 0;
    if (i === arr.length - 1) {
        return arr[i]
    } else {
        return arr[i] + sumElem(arr, i + 1);
    }
}
//----------------- 8. --------------------------------
var userini = {
    name: 'andrey',
    login: '111',
    password: '222',
    address: {
        city: 'Krasnodar',
        house: {
            flat: 99,
            floor: 4
        }
    }
};

function alertInsertedObj(obj) {
    var toString = {}.toString;
    for (var key in obj) {
        if (toString.call(obj[key]) == "[object Object]") {
            alertInsertedObj(obj[key]);
        } else {
            alert(key + " : " + obj[key]);
        }
    }
}

alertInsertedObj(userini);
//----------------- 9. --------------------------------
function fibo(num, curNum) {
    curNum = curNum || 1;

    function f(number) {
        return number <= 1 ? 1 : f(number - 1) + f(number - 2);
    }
    console.log(f(curNum));
    if (num > curNum) {
        fibo(num, curNum + 1);
    }
}