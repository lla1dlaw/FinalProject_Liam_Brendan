
document.cookie;

productNames = ["Jordan 1 \"University Blue\"",
                "Jordan 1 X Travis Scott",
                "Jordan 1 \"Black and White\"",
                "Jordan 1 X OFF WHITE \"University Blue\"",
                "Jordan 3 \"Wizards\"",
                "Jordan 4 \"Black and Red\"",
                "Jordan 4 X OFF WHITE",
                "Jordan 5 \"University Blue\"",
                "Jordan 11 \"Midnight Navy\""];


// Retrieve the cart from the cookie
function getCartFromCookie() {
    // Simplified approach to get the cookie value
    let cookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)cart\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    console.log(cookieValue);
    try {
        let cart = JSON.parse(cookieValue);
        console.log(cart + "Array from cookie");
        return cart; // Return the parsed array
    } catch (e) {
        console.error("Error parsing cart cookie:", e);
        return []; // Return an empty array if parsing fails
    }
}

// Reset the value of the "cart" cookie
function setCartCookie(cart) {
    // Serialize the array
    let serializedArray = JSON.stringify(cart);
    // Set the cookie with an expiration date
    document.cookie = "cart=" + serializedArray + "; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
}

// Function to add items to the cart
function addToCart(productName, price, image) {
    let cart = getCartFromCookie(); // Retrieve current cart from cookie

    const item = [productName, price, image];
    cart.push(item);

    // Set the updated cart back to the cookie
    setCartCookie(cart);

    console.log(cart + "current cart array"); // For debugging purposes
}

// Add items to the cart from the products page
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        const productId = this.dataset.id; // gets the product id of the element
        const productName = productNames[productId-1];
        const price = parseFloat(this.dataset.price.replace("$", "")); // gets the price of the item and removes the "$"
        const image = this.parentElement.parentElement.parentElement.parentElement.getElementsByTagName('img')[0].src; // path to image

        console.log(productId);
        console.log(price);

        addToCart(productName, price, image);
    });
});
 
