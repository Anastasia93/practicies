var xmlData = {},
    xmlString = prompt("Please, alert some XML-string:", '<book title="Book 1"><chapter title="Chapter 1"><paragraph>123</paragraph><paragraph>456</paragraph></chapter></book>>'),
    xmlStringArray = xmlString.split('');

function readTag(array){
    for (var i = 0; i < array.length; i++) {
        if (array[i] === "<") {
            var objNameArr = [],
                objAttributeArr = [];
            findtag: for (var j = 1; j < array.length; j++) {
                switch(array[j]){
                    case ">":
                        xmlData[objNameArr.join("")] = {};
                        if(objAttributeArr > 0){
                            
                        }
                        break;
                        break findtag;

                    case " ":
                        objAttributeArr.push(array[j]);
                        break;

                    case "=":
                        xmlData[objNameArr.join("")][objAttributeArr.join("")] = {};
                        break;

                    default: objNameArr.push(array[j]);
                }
            }
        }
    }
}

readTag(xmlString);
console.log(xmlData);

// xmlParser.stringify = function(xmlString){};