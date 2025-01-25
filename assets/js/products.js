
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


// add items to the cart
function addToCart(productName, price, image) {
    let cart = [];

    const item = [productName, price, image];
    cart.push(item);

    // Serialize the array
    let serializedArray = JSON.stringify(cart);
    // Set the cookie
    document.cookie = "cart=" + serializedArray + "; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";

    console.log(cart); // For debugging purposes
}


// add items to the cart from the products page
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        const productId = this.dataset.id; // gets the product id of the element
        const productName = productNames[productId-1];
        const price = parseFloat(this.dataset.price.replace("$", "")); // gets the price of the item and removes the "$"
        const image= this.parentElement.parentElement.parentElement.parentElement.getElementsByTagName('img')[0].src; // path to image

        console.log(productId);
        console.log(price);

        addToCart(productName, price, image);
    });


});