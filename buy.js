 // Get URL parameters
 const urlParams = new URLSearchParams(window.location.search);
 const itemName = urlParams.get('item');
 const itemPrice = urlParams.get('price');
 const itemImage = urlParams.get('image');

 // Set item details
 document.getElementById('item-name').textContent = itemName;
 document.getElementById('item-price').textContent = itemPrice;
 document.getElementById('item-image').src = itemImage;

 // Confirm purchase
 document.getElementById('confirm-purchase').addEventListener('click', () => {
     const quantity = document.getElementById('quantity').value;
     const total = (quantity * itemPrice).toFixed(2);
     alert(`You have purchased ${quantity} of ${itemName} for a total of ₹ ${total}.`);
 });