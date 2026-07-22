const products = [
    { id: 1,  name: "Womens Summer Dress",        price: 90.00,  type: "womens", category: "Summer Outfits Women", tag: "new in", colors: ["black", "white"],          image: "images/product5.jpg" },
    { id: 2,  name: "Womens Summer Dress",        price: 264.00, type: "womens", category: "Summer Outfits Women", tag: "new in", colors: ["black", "white", "blue"],  image: "images/product9.jpg" },
    { id: 3,  name: "Womens 2 Piece Summer Set",  price: 95.00,  type: "womens", category: "Summer Outfits Women", tag: "new in", colors: ["brown", "green", "black"],  image: "images/product8.jpg" },
    { id: 4,  name: "Womens 2 Piece Summer Set",  price: 84.99,  type: "womens", category: "Summer Outfits Women", tag: "new in", colors: ["peach"],                    image: "images/product7.jpg" },
    { id: 10, name: "Womens Summer Dress",        price: 126.99, type: "womens", category: "Summer Outfits Women", tag: "new in", colors: ["green", "red"],              image: "images/women2.jpg" },
    { id: 21, name: "Womens Floral Dress",        price: 145.00, type: "womens", category: "Summer Outfits Women", tag: "new in", colors: ["black", "white"],           image: "images/product6.jpg" },

    { id: 5,  name: "Womens Pyjamas",             price: 55.00,  type: "womens", category: "Womens Pyjamas",       tag: "new in", colors: ["pink", "white"],            image: "images/pj4.jpg" },
    { id: 6,  name: "Womens Pyjamas",             price: 60.00,  type: "womens", category: "Womens Pyjamas",       tag: "new in", colors: ["grey", "white", "black"],   image: "images/pj1.jpg" },
    { id: 7,  name: "Womens Pyjamas",             price: 65.00,  type: "womens", category: "Womens Pyjamas",       tag: "new in", colors: ["pink", "peach"],            image: "images/pjs3.jpg" },
    { id: 8,  name: "Womens Pyjamas",             price: 55.00,  type: "womens", category: "Womens Pyjamas",       tag: "new in", colors: ["red"],                      image: "images/pjs2.jpg" },
    { id: 23, name: "Womens Satin Pyjamas",       price: 68.00,  type: "womens", category: "Womens Pyjamas",       tag: "new in", colors: ["pink"],                     image: "images/pj3.jpg" },

    { id: 9,  name: "Womens White T-Shirt",       price: 50.00,  type: "womens", category: "Womens Tops",          tag: "new in", colors: ["white", "grey"],            image: "images/product3.jpg" },
    
    { id: 11, name: "Mens Short Set",             price: 210.00, type: "mens",   category: "Summer Outfits Men",   tag: "new in", colors: ["green"],                    image: "images/men1.jpg" },
    { id: 12, name: "Mens Short Set",             price: 95.00,  type: "mens",   category: "Summer Outfits Men",   tag: "new in", colors: ["brown", "peach"],           image: "images/brown.jpg" },
    { id: 13, name: "Mens Short Set",             price: 155.00, type: "mens",   category: "Summer Outfits Men",   tag: "new in", colors: ["blue"],                    image: "images/men3.jpg" },
    { id: 14, name: "Mens Short Set",             price: 160.00, type: "mens",   category: "Summer Outfits Men",   tag: "new in", colors: ["black"],                    image: "images/men4.jpg" },
    { id: 16, name: "Mens Short Set",             price: 120.00, type: "mens",   category: "Summer Outfits Men",   tag: "new in", colors: ["grey"],                     image: "images/product4.jpg" },
    { id: 20, name: "Mens Casual Set",            price: 175.00, type: "mens",   category: "Summer Outfits Men",   tag: "new in", colors: ["green", "brown"],           image: "images/mens1.jpg" },
    { id: 22, name: "Mens Beige Set",             price: 130.00, type: "mens",   category: "Summer Outfits Men",   tag: "new in", colors: ["peach"],                    image: "images/men2.jpg" },

    { id: 15, name: "Mens Shirt Short Sleeves",   price: 135.00, type: "mens",   category: "Mens Shirts",          tag: "new in", colors: ["black", "white"],           image: "images/product67.jpg" },
    { id: 17, name: "Mens Linen Shirt",           price: 99.00,  type: "mens",   category: "Mens Shirts",          tag: "new in", colors: ["peach", "white"],           image: "images/men2.jpg" },
    { id: 19, name: "Mens Polo Shirt",            price: 70.00,  type: "mens",   category: "Mens Shirts",          tag: "new in", colors: ["black", "white"],           image: "images/polo.jpg" },
    { id: 24, name: "Mens Short Sleeve Shirt",    price: 110.00, type: "mens",   category: "Mens Shirts",          tag: "new in", colors: ["white", "grey"],           image: "images/product1.jpg" },

    { id: 18, name: "Mens Summer Shorts",         price: 45.00,  type: "mens",   category: "Mens Shorts",          tag: "new in", colors: ["blue"],                    image: "images/men3.jpg" }

];

const categoryorder = [
    "Summer Outfits Women",
    "Womens Pyjamas",
    "Womens Tops",
    "Summer Outfits Men",
    "Mens Shirts",
    "Mens Shorts"
];

function gettheproductype() {
    const params = new URLSearchParams(window.location.search);
    return params.get("type");
}

function buildcard(product) {
    let dots = "";
    product.colors.forEach(function(colour) {
        dots += '<span class="' + colour + '"></span>';
    });

    return '' +
        '<div class="product">' +
            '<img src="' + product.image + '" alt="' + product.name + '" onerror="this.src=\'images/hero.jpg\'">' +
            '<p class="new">' + product.tag + '</p>' +
            '<h3>' + product.name + '</h3>' +
            '<div class="colours">' + dots + '</div>' +
            '<h4>£' + product.price.toFixed(2) + '</h4>' +
            '<button class="add-btn" data-id="' + product.id + '" data-name="' + product.name + '" data-price="' + product.price + '">Add to Cart</button>' +
        '</div>';

}

function updateproducts() {
    const grid = document.querySelector("#product-grid");
    if (!grid) {
        return;
    }

    const type = gettheproductype();
    let list = products.slice();
    if (type) {
        list = list.filter(function(product) {
            return product.type === type;
        });
    }

    const sortselect = document.querySelector("#sort-price");
    if (sortselect) {

        if (sortselect.value === "low") {
            list.sort(function(a, b) { return a.price - b.price; });
        } else if (sortselect.value === "high") {
            list.sort(function(a, b) { return b.price - a.price; });
        }

    }

    let html = "";
    categoryorder.forEach(function(category) {

        const items = list.filter(function(product) {
            return product.category === category;
        });

        if (items.length === 0) {
            return;
        }

        html += '<h3 class="category-title">' + category + '</h3>';
        html += '<div class="products">';
        items.forEach(function(product) {
            html += buildcard(product);
        });
        html += '</div>';

    });
    grid.innerHTML = html;
    const heading = document.querySelector("#product-heading");
    if (heading) {
        if (type === "mens") {
            heading.textContent = "Mens";
        } else if (type === "womens") {
            heading.textContent = "Womens";
        } else {
            heading.textContent = "New In";
        }
    }

}
updateproducts();
const sortselect = document.querySelector("#sort-price");
if (sortselect) {
    sortselect.addEventListener("change", updateproducts);
}

const menubutton = document.querySelector(".menu");
const mobilemenu = document.querySelector(".mobile-menu");

if (menubutton && mobilemenu) {

    menubutton.addEventListener("click", function() {
        mobilemenu.classList.toggle("open");
    });

}

const usericon = document.querySelector(".icons .fa-user");
const loginmodal = document.querySelector(".login-modal");

if (usericon && loginmodal) {
    usericon.addEventListener("click", function() {
        loginmodal.classList.add("open");
    });
    const closebutton = loginmodal.querySelector(".close");

    if (closebutton) {
        closebutton.addEventListener("click", function() {
            loginmodal.classList.remove("open");
        });
    }

    loginmodal.addEventListener("click", function(event) {
        if (event.target === loginmodal) {
            loginmodal.classList.remove("open");
        }
    });

    const loginform = loginmodal.querySelector("form");

    if (loginform) {
        loginform.addEventListener("submit", function(event) {
            event.preventDefault();
            loginform.reset();
            loginmodal.classList.remove("open");
        });
    }

}

const search = document.querySelector(".search-box input");
if (search) {

    search.addEventListener("keypress", function(event) {

        if (event.key === "Enter") {
            alert("Searching for: " + search.value);
        }

    });

}


const messageform = document.querySelector("#message-form");
if (messageform) {

    messageform.addEventListener("submit", function(event) {
        event.preventDefault();
        messageform.reset();
    });

}


const tapreview = document.querySelector("#tap-review");
const reviewform = document.querySelector("#review-form");

if (tapreview && reviewform) {
    tapreview.addEventListener("click", function() {
        reviewform.classList.toggle("open");
    });

    const stars = reviewform.querySelectorAll(".star");
    let rating = 0;

    stars.forEach(function(star, index) {
        star.addEventListener("click", function() {
            rating = index + 1;
            stars.forEach(function(item, i) {
                if (i < rating) {
                    item.classList.add("selected");
                } else {
                    item.classList.remove("selected");
                }
            });
        });
    });

    reviewform.addEventListener("submit", function(event) {
        event.preventDefault();
        reviewform.reset();
        rating = 0;

        stars.forEach(function(item) {
            item.classList.remove("selected");
        });

        reviewform.classList.remove("open");

    });

}

let cart = [];

const cartmodal = document.querySelector(".cart-modal");
const cartitems = document.querySelector("#cart-items");
const carttotal = document.querySelector(".cart-total");
const cartcount = document.querySelector(".cart-count");
const bag = document.querySelector(".bag");

function addtocart(id, name, price) {

    let found = null;
    cart.forEach(function(item) {
        if (item.id === id) {
            found = item;
        }
    });
    if (found) {
        found.quantity = found.quantity + 1;
    } else {
        cart.push({ id: id, name: name, price: price, quantity: 1 });
    }

    showcart();

}

function changequantity(id, amount) {
    cart.forEach(function(item) {
        if (item.id === id) {
            item.quantity = item.quantity + amount;
        }
    });

    cart = cart.filter(function(item) {
        return item.quantity > 0;
    });
    showcart();

}

function removefromcart(id) {
    cart = cart.filter(function(item) {
        return item.id !== id;
    });
    showcart();

}

function showcart() {
    if (!cartitems) {
        return;
    }
    let html = "";
    let total = 0;
    let count = 0;

    cart.forEach(function(item) {

        total = total + (item.price * item.quantity);
        count = count + item.quantity;

        html += '' +
            '<div class="cart-item">' +
                '<div class="cart-item-info">' +
                    '<p class="cart-item-name">' + item.name + '</p>' +
                    '<p class="cart-item-price">£' + item.price.toFixed(2) + '</p>' +
                '</div>' +
                '<div class="cart-item-controls">' +
                    '<button class="qty-btn" data-id="' + item.id + '" data-amount="-1">-</button>' +
                    '<span class="qty">' + item.quantity + '</span>' +
                    '<button class="qty-btn" data-id="' + item.id + '" data-amount="1">+</button>' +
                    '<button class="remove-btn" data-id="' + item.id + '">Remove</button>' +
                '</div>' +
            '</div>';

    });

    if (cart.length === 0) {
        html = '<p class="cart-empty">Your bag is empty.</p>';
    }

    cartitems.innerHTML = html;
    carttotal.textContent = "Total: £" + total.toFixed(2);
    cartcount.textContent = count;

}

if (bag && cartmodal) {
    bag.addEventListener("click", function() {
        cartmodal.classList.add("open");
    });

    const cartclose = cartmodal.querySelector(".cart-close");

    if (cartclose) {
        cartclose.addEventListener("click", function() {
            cartmodal.classList.remove("open");
        });
    }
    cartmodal.addEventListener("click", function(event) {
        if (event.target === cartmodal) {
            cartmodal.classList.remove("open");
        }
    });

    const checkoutbutton = cartmodal.querySelector(".checkout-btn");

    if (checkoutbutton) {
        checkoutbutton.addEventListener("click", function() {
            if (cart.length === 0) {
                return;
            }
            alert("Thank you for your order!");
            cart = [];
            showcart();
            cartmodal.classList.remove("open");
        });
    }

}

document.addEventListener("click", function(event) {
    const target = event.target;
    if (target.classList.contains("add-btn")) {
        const id = target.getAttribute("data-id");
        const name = target.getAttribute("data-name");
        const price = parseFloat(target.getAttribute("data-price"));
        addtocart(id, name, price);
    }

    if (target.classList.contains("qty-btn")) {
        const id = target.getAttribute("data-id");
        const amount = parseInt(target.getAttribute("data-amount"), 10);
        changequantity(id, amount);
    }

    if (target.classList.contains("remove-btn")) {
        const id = target.getAttribute("data-id");
        removefromcart(id);
    }

});
showcart();
