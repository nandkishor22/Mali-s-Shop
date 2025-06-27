document.addEventListener("DOMContentLoaded", function () {
    if (document.querySelector(".contact-form")) {
        document
            .querySelector(".contact-form")
            .addEventListener("submit", function (e) {
                e.preventDefault();
                const name = this.name.value.trim();
                const email = this.email.value.trim();
                const message = this.message.value.trim();
                const whatsappNumber = "918421572075";
                const text = `Name:- ${name}%0AEmail:- ${email}%0AMessage:- ${message}`;
                const url = `https://wa.me/${whatsappNumber}?text=${text}`;
                window.open(url, "_blank", "noopener");
            });
    }

    if (document.querySelectorAll(".buy-now-btn").length) {
        document.querySelectorAll(".buy-now-btn").forEach(function (btn) {
            btn.addEventListener("click", function () {
                const card = btn.closest(".product-card");
                const name = card.querySelector(".product-title").textContent.trim();
                const price = card.querySelector(".product-price").textContent.trim();
                const whatsappNumber = "918421572075";
                const text = `Product:- ${name}%0APrice:- ${price}%0AYour Name:- %0AYour address:- %0AYour contact number:-`;
                const url = `https://wa.me/${whatsappNumber}?text=${text}`;
                window.open(url, "_blank", "noopener");
            });
        });
    }
});
