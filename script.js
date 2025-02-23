document.querySelectorAll('.menu-item img').forEach(img => {
    img.onerror = function() {
        this.src = 'https://via.placeholder.com/200';
    };
});

function loadBuyPage() {
    const params = new URLSearchParams(window.location.search);
    const itemName = params.get('item') || 'Unknown Item';
    const price = parseFloat(params.get('price')) || 0.00;
    const image = params.get('image') || 'https://via.placeholder.com/200';

    document.getElementById('item-name').innerText = itemName;
    document.getElementById('item-price').innerText = `$${price.toFixed(2)}`;
    document.getElementById('item-image').src = image;

    document.getElementById('item-image').onerror = () => {
        document.getElementById('item-image').src = 'https://via.placeholder.com/200';
    };
}

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");
    const successMessage = document.getElementById("success-message");

    const nameError = document.getElementById("name-error");
    const emailError = document.getElementById("email-error");
    const messageError = document.getElementById("message-error");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        let isValid = true;

        // Validate Name
        if (nameInput.value.trim() === "") {
            nameError.textContent = "Name is required!";
            isValid = false;
        } else {
            nameError.textContent = "";
        }

        // Validate Email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailInput.value.trim())) {
            emailError.textContent = "Enter a valid email address!";
            isValid = false;
        } else {
            emailError.textContent = "";
        }

        // Validate Message
        if (messageInput.value.trim() === "") {
            messageError.textContent = "Message cannot be empty!";
            isValid = false;
        } else {
            messageError.textContent = "";
        }

        // If all validations pass, show success message
        if (isValid) {
            successMessage.classList.remove("hidden");

            // Reset the form after 2 seconds
            setTimeout(() => {
                form.reset();
                successMessage.classList.add("hidden");
            }, 2000);
        }
    });
});

if (window.location.pathname.includes('buy.html')) {
    loadBuyPage();
}
