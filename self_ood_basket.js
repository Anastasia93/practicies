//------------------PROTOTYPE-----------------------------
function Product(){}
Product.prototype = {
    "name": "noname",
    "price": 0,
    "available": "+"
};
Product.prototype.makeThsTrs = function(table, wantedProp) {
    var nesObj = this;
    for (var prop in nesObj) {
        if (prop == wantedProp) {
            var defaultTr = table.firstChild;
            var th = document.createElement("th");
            th.innerHTML = prop;
            defaultTr.appendChild(th);
            var newTr = table.lastChild;
            var td = document.createElement("td");
            td.innerHTML = nesObj[prop];
            newTr.appendChild(td);
        }
    }
    return table;
};
Product.prototype.alertProduct = function(){
    alert("Product: " + this.name + ", " + "price: " + this.price + ", " + "availability: " + this.available + ".")
};
Product.prototype.validate = function(){
        if(this.name == undefined || this.name == "noname" ||
            this.price == undefined || this.price == 0) {
            alert("There are some empty parameters in your product, please fill them!")
        }
};
Product.prototype.makeTable = function() {
    var defaultTable = document.createElement("table");
    var defaultTr = document.createElement("tr");
    defaultTr.setAttribute("id", "defaultTr");
    defaultTable.appendChild(defaultTr);
    var newTr = document.createElement("tr");
    newTr.setAttribute("id", "defaultTr");
    defaultTable.appendChild(newTr);
    defaultTable = this.makeThsTrs(defaultTable, "name");
    defaultTable = this.makeThsTrs(defaultTable, "price");
    defaultTable = this.makeThsTrs(defaultTable, "available");
    return defaultTable;
};
//------------------CLOTHES-------------------
function Clothes(sex){
    this["sex"] = sex;
}
Clothes.prototype = Object.create(Product.prototype);
Clothes.prototype.validate = function () {
    if (this.sex == undefined || this.sex.length == 0) {
        alert("There are some empty parameters in your product, please fill them!");
    }
    Product.prototype.validate.call(this);
};
Clothes.prototype.makeTable = function () {
    var defaultTable = Product.prototype.makeTable.call(this);
    defaultTable = this.makeThsTrs(defaultTable, "sex");
    return defaultTable;
};
//------------------ELECTRONICS-------------------
function Electronics(type){
    this["type"] = type;
}
Electronics.constructor = Electronics;
Electronics.prototype = Object.create(Product.prototype);
Electronics.prototype.validate = function () {
    if (this.type == undefined || this.type.length == 0) {
        alert("There are some empty parameters in your product, please fill them!");
    }
    Product.prototype.validate.call(this);
};
Electronics.prototype.makeTable = function () {
    var defaultTable = Product.prototype.makeTable.call(this);
    defaultTable = this.makeThsTrs(defaultTable, "type");
    return defaultTable;
};
//------------------FOOD-------------------
function Food(retail){
    this["retail"] = retail;
}
Food.constructor = Food;
Food.prototype = Object.create(Product.prototype);
Food.prototype.validate = function () {
    if (this.retail == undefined || this.retail.length == 0) {
        alert("There are some empty parameters in your product, please fill them!");
    }
    Product.prototype.validate.call(this);
};
Food.prototype.makeTable = function () {
    var defaultTable = Product.prototype.makeTable.call(this);
    defaultTable = this.makeThsTrs(defaultTable, "retail");
    return defaultTable;
};
//------------------ TESTING ------------------
var coatMen = new Clothes("male");
coatMen.name = "MaxMara";
coatMen.price = 200;
console.log(coatMen.makeTable());
var coatWomen = new Clothes();
coatWomen.name = "Versace";
coatWomen.price = 300;
coatWomen.sex = "female";
console.log(coatWomen.makeTable());
var coatKids = new Clothes();
coatKids.name = "Gucci";
coatKids.price = 150;
coatKids.sex = "male";