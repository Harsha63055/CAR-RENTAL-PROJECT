document.addEventListener("DOMContentLoaded", function () {
  const cartContainer = document.querySelector(".cart-items");
  let cart = localStorage.getItem("cart")
    ? localStorage.getItem("cart").split("|")
    : [];

  if (cart.length === 0 || cart[0] === "") {
    cartContainer.innerHTML = "<p>No items in the cart</p>";
  } else {
    cartContainer.innerHTML = "";
    cart.forEach((item, index) => {
      const [model, driver, price] = item.split(",");
      const cartItem = document.createElement("div");
      cartItem.classList.add("cart-item");
      cartItem.innerHTML = `
                <h2>${model}</h2>
                <p>${driver}</p>
                <p>${price}</p>
                <button class="remove-from-cart" data-index="${index}">Remove</button>
            `;
      cartContainer.appendChild(cartItem);
    });
  }

  document.querySelectorAll(".remove-from-cart").forEach((button) => {
    button.addEventListener("click", function () {
      let cart = localStorage.getItem("cart")
        ? localStorage.getItem("cart").split("|")
        : [];
      const index = this.getAttribute("data-index");
      cart.splice(index, 1);
      localStorage.setItem("cart", cart.join("|"));
      location.reload();
    });
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const checkoutBtn = document.querySelector(".checkout-btn");
  const cartItemsContainer = document.querySelector(".cart-items");

  checkoutBtn.addEventListener("click", () => {
      const cartItems = document.querySelectorAll(".cart-items p");
      
      if (cartItems.length === 0 || cartItems[0].textContent === "No items in the cart") {
          alert("Your cart is empty!");
          return;
      }

      let cartData = [];
      cartItems.forEach(item => {
          cartData.push(item.textContent);
      });

      // Save the cart data in localStorage
      localStorage.setItem("bookings", JSON.stringify(cartData));

      alert("Proceeding to checkout. Your booking details are saved.");
  });
});
