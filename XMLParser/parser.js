var xmlData = {},
    xmlString = prompt("Please, alert some XML-string:", '<a><a></a><a><a></a></a></a>'),
    xmlDataArray = xmlString.split("");

function parseString(dataString, dataArray) {
    var currentSearchCoords = [0, 0],
        opArray = [],
        clArray = [];

        if (dataArray[0] === "<") {
            var currentOpened = "",
                pos = 0;
            while (dataArray[pos] !== " " && dataArray[pos] !== ">") {
                currentOpened += dataArray[pos];
                pos++;
            }
            var currentClosed = "</" + currentOpened.slice(1);
        }

        function findNode(posOpen, posClose) {
            var entryPosOpen = dataString.indexOf(currentOpened, posOpen),
                entryPosClose = dataString.indexOf(currentClosed, posClose);
            if (entryPosOpen < entryPosClose) {
                opArray.push(entryPosOpen);
                clArray.push(entryPosClose);
                findNode(entryPosOpen + 1, entryPosClose + 1);
            }

            else {
                currentSearchCoords[1] = entryPosClose;
            }
        }

        findNode(pos, pos);
}

parseString(xmlString, xmlDataArray);
console.log(xmlData);