function palinSearch() {
    var list = document.getElementById("result");
    while (list.firstElementChild) {
        list.removeChild(list.firstElementChild);
    }
    var newString = getData();
    var sortedPalinList = doSearch(newString);
    addToList(sortedPalinList);

}

function getData() {
    var data = document.getElementById("data").value;
    return data.toLowerCase().replace(/\s+/g, '');
}

function doSearch(str) {
    var palinList = [];
    for (var i = 1; i < str.length; i++) {
        var k = 1;
        while (i + k <= str.length && i - k >= 0 && str[i - k] == str[i + k]) {
            k++;
            palinList.push(str.substring(i - k + 1, i + k));

        }
        k = 1;
        while (i + k <= str.length && i - k >= 0 && str[i - k] == str[i + k - 1]) {
            k++;
            palinList.push(str.substring(i - k + 1, i + k - 1));
        }

    }
    function compareNum(a, b) {
        if (a.length < b.length) {
            return 1;
        }
        if (a.length > b.length) {
            return -1;
        }
    }

    return palinList.sort(compareNum);
}

function addToList(list) {
    var result = document.getElementById("result");
    for (var i = 0; i < list.length; i++) {
        var li = document.createElement("li");
        li.innerHTML = list[i];
        result.appendChild(li);
    }
    var newB = document.createElement("b");
    var firstLi = result.firstElementChild;
    var cloneLi = firstLi.cloneNode(true);
    newB.appendChild(cloneLi);
    result.replaceChild(newB, firstLi);
}