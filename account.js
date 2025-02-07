document.addEventListener("DOMContentLoaded", () => {
    const viewOrdersBtn = document.querySelector(".view-orders");
    const accountContainer = document.querySelector(".account-container");

    viewOrdersBtn.addEventListener("click", () => {
        let bookings = localStorage.getItem("bookings");
        
        if (!bookings) {
            alert("No bookings found!");
            return;
        }

        bookings = JSON.parse(bookings);
        let bookingSection = document.querySelector(".bookings");

        if (!bookingSection) {
            bookingSection = document.createElement("div");
            bookingSection.classList.add("bookings");
            accountContainer.appendChild(bookingSection);
        }

        bookingSection.innerHTML = "<h2>My Bookings</h2>";

        bookings.forEach((item, index) => {
            const bookingItem = document.createElement("p");
           // bookingItem.textContent = `Booking ${index + 1}: ${item.name} - ${item
            bookingItem.textContent = `${item}`;
            bookingSection.appendChild(bookingItem);
        });
    });
});
