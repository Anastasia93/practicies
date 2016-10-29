// Lesson IV
//------------------- 1. -------------------------------
function cloneObj(obj, clonesNum) {
    var newObj = {};
    for (props in obj) {
        newObj[props] = obj[props];
    }
    if (clonesNum == 1 || "undefined") {
        return newObj;
    } else {
        var newArr = [];
        for (var a = 0; a < clonesNum; a++) {
            newArr.push(newObj);
        }
        return newArr;
    }
}
//------------------- 2. -------------------------------
function howMuchDays() {
    var answer = prompt("Please, enter some data", "01.09.2009");
    var arrDate = answer.split(".");
    arrDate[1] -= 1;
    var d = new Date(arrDate[2], arrDate[1], arrDate[0]);

    if ((d.getFullYear() == arrDate[2]) && (d.getMonth() == arrDate[1]) && (d.getDate() == arrDate[0])) {
        var trueDate = answer;
        var now = new Date();
        var textDays = "days";
        var days = 0;
        if (d > now) {
            days = Math.round((d - now) / 864e5);
            if (days === 1) {
                textDays = "day";
            }
            alert("To " + trueDate + " there are " + days + " " + textDays);
        } else if (d < now) {
            days = Math.round((now - d) / 864e5);
            if (days === 1) {
                textDays = "day";
            }
            alert("From " + trueDate + " gone " + days + " " + textDays)
        }
    } else {
        alert("Please, enter again!");
        howMuchDays();
    }
}
//------------------- 3. -------------------------------
(function(){
    function myMath(){
    }
    myMath.add = function(a, b) {
        alert(a + b);
    };
    myMath.multiply = function(a, b) {
        alert(a * b);
    };
    myMath.substr = function(a, b) {
        alert(a - b);
    };
    myMath.div = function(a, b) {
        alert(a / b);
    };
    window.myMath = myMath;
})();
