
function addcart(event) {
  const button = event.target;
  const carItem = button.closest(".car-item");
  const carModel = carItem.querySelector("h2").textContent;
  const driver = carItem.querySelector("p:nth-child(2)").textContent;
  const price = carItem.querySelector("p:nth-child(3)").textContent;

  const cartItem = `${carModel},${driver},${price}`;

  let cart = localStorage.getItem("cart")
    ? localStorage.getItem("cart").split("|")
    : [];
  cart.push(cartItem);
  localStorage.setItem("cart", cart.join("|"));
  alert("Added to cart!");
}
document.querySelectorAll(".add-to-card").forEach((button) => {
  button.addEventListener("click", addcart);
});
