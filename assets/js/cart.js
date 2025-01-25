

const removeCartItemButtons = document.getElementsByClassName('remove-item-button');
for (let i = 0; i < removeCartItemButtons.length; i++) {
    const button = removeCartItemButtons[i];
    button.addEventListener('click', function (event) {
        const buttonClicked = event.target;
        buttonClicked.parentElement.parentElement.parentElement.parentElement.parentElement.remove();
    })
}

// // add items to the cart
// function addToCart(productName, price, image) {
//     const item = { productName, price, image};
//     cart.push(item);
//     console.log(cart); // For debugging purposes
// }


// display the cart 
function displayCart() {
    // Retrieve the cookie
    let cookieArrayString = document.cookie.replace(/(?:(?:^|.*;\s*)cart\s*\=\s*([^;]*).*$)|^.*$/, "$1"); // using reg ex replace method
    // Parse the string back into an array
    let cart = JSON.parse(cookieArrayString);

    console.log(cart);
    const cartContainer = document.getElementById('cart-container'); // Assuming you have a container with this ID
    //cartContainer.innerHTML = ''; // Clear the container

    cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.setAttribute('class', "card mb-3");
        itemElement.innerHTML = "<div class=\"card-body\">\n" +
            "                                        <div class=\"d-flex justify-content-between\">\n" +
            "                                            <div class=\"d-flex flex-row align-items-center\">\n" +
            "                                                <div>\n" +
            "                                                    <img\n" +
            "                                                            src=\"" + item[2] + "\"\n" +
            "                                                            class=\"img-fluid rounded-3\" alt=\"Shopping item\" style=\"width: 65px;\">\n" +
            "                                                </div>\n" +
            "                                                <div class=\"ms-3\">\n" +
            "                                                    <h5> " + item[0] + " </h5>\n" + // name of product
            "                                                </div>\n" +
            "                                            </div>\n" +
            "                                            <div class=\"d-flex flex-row align-items-center\">\n" +
            "                                                <div style=\"width: 50px;\">\n" +
            "                                                    <h5 class=\"fw-normal mb-0\">2</h5>\n" +
            "                                                </div>\n" +
            "                                                <div style=\"width: 80px;\">\n" +
            "                                                    <h5 class=\"mb-0\">$" + item[1] + "</h5>\n" +
            "                                                </div>\n" +
            "                                                <a href=\"#!\" style=\"color: #cecece;\"><i class=\"fas fa-trash-alt\"></i></a>\n" +
            "                                                <div>\n" +
            "                                                    <button type=\"submit\" class=\"remove-item-button\">\n" +
            "                                                        <img src=\"assets/images/trashcan.png\" alt=\"trashcan\">\n" +
            "                                                    </button>\n" +
            "                                                </div>\n" +
            "                                            </div>\n" +
            "                                        </div>\n" +
            "                                    </div>\n"


        cartContainer.appendChild(itemElement);
    });
}

// Call displayCart whenever the cart is updated
displayCart();







