var newStr = prompt("Введіть, будь ласка, через кому, паліндром", "сюди");

function reverseStr(str) {
        return str.split("").reverse().join("");
}

var reverse = reverseStr(newStr);

var result = "";

    for (var i = 0; i < newStr.length; i++) {
        if (newStr[i] == reverse[i]) {
            result += reverse[i];
   }
}

alert(result);

var arr = result.split("");

for (var i = 0; i < arr.length; i++) {
    lastI = arr.length - 1;
    if (arr[0] == arr[lastI]){
        arr.pop();
        arr.shift();
        alert(arr.join(""));
    }
        }