var xmlData = {},
    xmlString = prompt("Please, alert some XML-string:", '<book title="Book 1"><chapter title="Chapter 1"><paragraph>123</paragraph><paragraph>456</paragraph></chapter></book>>'),
    xmlStringArray = xmlString.split('');

function parse(array){
    for (var i = 0; i < array.length; i++) {
        var currentNumber = 0;
        if (array[i] === "<") {
            var objNameArr = [],
                objName = "";
            for (var j = 1; j < array.length; j++) {
                if (array[j] !== ">" && array[j] !== " ") {
                    objNameArr.push(array[j])
                }
                else {
                    currentNumber = j;
                    objName = objNameArr.join("");
                    xmlData[objName] = {};
                    break;
                }
            }
        }
    }
}

parse(xmlString);
console.log(xmlData);

// xmlParser.stringify = function(xmlString){};