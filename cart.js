function incrementQuantity(itemId) {
  const quantityElement = document.getElementById(`quantity${itemId.slice(-1)}`);
  const currentQuantity = parseInt(quantityElement.textContent, 10);
  quantityElement.textContent = currentQuantity + 1;
  updateTotal();
}

function decrementQuantity(itemId) {
  const quantityElement = document.getElementById(`quantity${itemId.slice(-1)}`);
  const currentQuantity = parseInt(quantityElement.textContent, 10);
  if (currentQuantity > 0) {
    quantityElement.textContent = currentQuantity - 1;
    updateTotal();
  }
}

function updateTotal() {
  // Calculate the total based on the quantity and price of each item
  const totalPrice = 19.99 * parseInt(document.getElementById('quantity1').textContent, 10);
  document.querySelector('.cart-total p').textContent = `Total: $${totalPrice.toFixed(2)}`;
}

function proceedToCheckout() {
  alert('Thankyou For order.');
}
