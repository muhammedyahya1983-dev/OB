const unitPriceInput = document.getElementById('unitPrice');
const quantityInput = document.getElementById('quantity');
const totalPriceDisplay = document.getElementById('totalPrice');

function calculateTotal() {
    const price = parseFloat(unitPriceInput.value) || 0;
    const qty = parseInt(quantityInput.value) || 0;
    const total = price * qty;
    totalPriceDisplay.innerText = total.toLocaleString();
}

unitPriceInput.addEventListener('input', calculateTotal);
quantityInput.addEventListener('input', calculateTotal);

function sendOrder() {
    const price = unitPriceInput.value;
    const qty = quantityInput.value;
    const total = price * qty;
    
    if(!qty || qty <= 0) {
        alert("Please enter a quantity!");
        return;
    }

    // Professional OB Water order template
    const message = 💧 *New Order for OB Water* 💧\n\n +
                    - *Quantity:* ${qty} bags\n +
                    - *Price:* ₦${price}/bag\n +
                    - *Total:* ₦${total.toLocaleString()}\n\n +
                    Please confirm this order.;

    // EDIT THIS: Put your real number inside the quotes below when ready
    const phoneNumber = "2340000000000"; 
    const whatsappUrl = https://wa.me{phoneNumber}?text=${encodeURIComponent(message)};
    
    window.open(whatsappUrl, '_blank');
}