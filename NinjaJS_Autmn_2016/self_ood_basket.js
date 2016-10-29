//---------------------CART---------------------
var cart = {
    products: [],
    validate: function() {
        for (var i = 0; i < this.products.length; i++) {
            if (!this.products[i].price || !this.products[i].name) {
                alert("Please, check your cart, there are some mistakes in your order.")
            }
        }
    },
    checkStorage: function() {
        try {
            this.products = JSON.parse(localStorage["cart"]);
        } catch (error) {
            alert("Error, in Local Storage there are no any items!")
        }
    }
};

setTimeout(function() {
    cart.checkStorage();
}, 100);

cart.getProduct = function(num) {
    return cart.products[num];
};
cart.addProduct = function(item) {
    if (item.price > 0 && item.price && item.name && item.name !== "None") {
        item.count++;
        cart.products.push(item);
        var locStoreObj = JSON.stringify(cart.products);
        localStorage.setItem("cart", locStoreObj)
    }
};
cart.getProductCount = function(item) {
    return item.count;
};

cart.getProductDiscount = function(item) {
    var discount = 0;

    function countUp(resItem) {
        var price = resItem.price;
        var count = resItem.count;
        if (count === 3 || 4) {
            return price * count * 0.05;
        } else if (count >= 5) {
            return price * count * 0.1;
        }
    }
    if (item) {
        discount = countUp(item);
        item.discount = discount
    } else if (!item) {
        for (var i = 0; i < cart.products.length; i++) {
            cart.products[i].discount = countUp(cart.products[i]);
            discount += countUp(cart.products[i]);

        }
    } else {
        alert("Sorry, no discount for you!")
    }
    return discount.toFixed(2);
};

cart.getProductPrice = function(item) {
    var result = item.price - item.discount;
    return item.disPrice = result.toFixed(2)
};

cart.getProductsSum = function(item) {
    if (item) {
        return item.disPrice * item.count;
    } else {
        var totalSum = 0;
        for (var i = 0; i < cart.products.length; i++) {
            if (cart.products[i].disPrice) {
                totalSum += cart.products[i].disPrice;
            } else {
                totalSum += cart.products[i].price;
            }
        }
        return totalSum
    }
};
//---------------------ITEM---------------------
function Item() {}

Item.fromEmpty = function() {
    var newItem = new Item;
    newItem.name = "None";
    newItem.price = 0;
    newItem.count = 1;
    return newItem
};

Item.fromData = function(name, price) {
    var newItem = new Item;
    newItem.name = name;
    newItem.price = price;
    newItem.count = 0;
    return newItem
};