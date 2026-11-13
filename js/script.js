
document.addEventListener("DOMContentLoaded", function () {
    console.log("ELITE Hospital Website Loaded Successfully!");
});

// APPOINTMENT FORM DEMO

const appointmentForm =
    document.getElementById("appointmentForm");

if (appointmentForm) {

    appointmentForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const fullname =
            document.getElementById("fullname").value.trim();

        const message =
            document.getElementById("formMessage");

        if (!fullname) {
            message.textContent = "Please enter your name.";
            return;
        }

        message.textContent =
            "Demo successful! This request has not been sent or saved.";

        appointmentForm.reset();

    });

}

// CONTACT FORM DEMO

const contactForm =
    document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const response =
            document.getElementById("contactResponse");

        response.textContent =
            "Demo successful! Your enquiry has not been sent or saved.";

        contactForm.reset();

    });

}

// MOBILE NAVIGATION MENU

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

if (menuToggle && mainNav) {

    menuToggle.addEventListener("click", function() {

        mainNav.classList.toggle("active");

        const isOpen = mainNav.classList.contains("active");

        menuToggle.setAttribute("aria-expanded", isOpen);

        menuToggle.textContent = isOpen ? "✕" : "☰";

    });

}

// HOSPITAL SERVICE SEARCH

const serviceSearch =
    document.getElementById("serviceSearch");

if (serviceSearch) {

    const serviceCards =
        document.querySelectorAll(".hospital-service-card");

    const searchMessage =
        document.getElementById("searchMessage");

    serviceSearch.addEventListener("input", function() {

        const searchText =
            serviceSearch.value.toLowerCase().trim();

        let visibleCount = 0;

        serviceCards.forEach(function(card) {

            const serviceName =
                card.textContent.toLowerCase();

            if (serviceName.includes(searchText)) {

                card.style.display = "block";
                visibleCount++;

            } else {

                card.style.display = "none";

            }

        });

        if (searchText === "") {
            searchMessage.textContent =
                "Showing all healthcare services.";
        } else if (visibleCount > 0) {
            searchMessage.textContent =
                visibleCount + " service(s) found.";
        } else {
            searchMessage.textContent =
                "No matching service found.";
        }

    });

}

// BASIC INPUT LENGTH PROTECTION

document.querySelectorAll("input, textarea").forEach(function(field) {

    field.addEventListener("input", function() {

        if (field.maxLength > 0 &&
            field.value.length > field.maxLength) {

            field.value = field.value.slice(
                0,
                field.maxLength
            );

        }

    });

});
