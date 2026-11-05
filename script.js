
// ==================================
// MOONLIGHT CAFE - INTERACTIONS
// ==================================

// PAGE LOADING
window.addEventListener("load", () => {
    document.body.classList.add("loaded");
});


// MOBILE NAVIGATION
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("open");

        const isOpen = navLinks.classList.contains("open");

        menuToggle.textContent = isOpen ? "✕" : "☰";
        menuToggle.setAttribute("aria-expanded", isOpen);
    });

    navLinks.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("open");
            menuToggle.textContent = "☰";
            menuToggle.setAttribute("aria-expanded", "false");
        });
    });
}


// SCROLL REVEAL ANIMATIONS
const revealElements = document.querySelectorAll(
    ".section, .food-card, .why-card, .review-card"
);

if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0
    });

    revealElements.forEach(element => {
        element.classList.add("reveal");
        observer.observe(element);
    });
} else {
    revealElements.forEach(element => {
        element.classList.add("show");
    });
}


// NEWSLETTER FORM
const newsletterForm = document.querySelector(".newsletter-form");
const newsletterMessage = document.querySelector(".newsletter-message");

if (newsletterForm) {
    newsletterForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const email = newsletterForm.querySelector("input").value;

        if (email.trim() !== "") {
            newsletterMessage.textContent =
                "Thank you for visiting Moonlight Café! ☕";

            newsletterForm.reset();
        }
    });
}


// CONSOLE MESSAGE
console.log("☾ Welcome to Moonlight Café!");

// MENU CATEGORY FILTERS

const filterButtons = document.querySelectorAll(".filter-btn");
const menuItems = document.querySelectorAll(".menu-item");

filterButtons.forEach(button => {
    button.addEventListener("click", () => {

        const selectedCategory = button.dataset.filter;

        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        menuItems.forEach(item => {

            const category = item.dataset.category;

            if (
                selectedCategory === "all" ||
                selectedCategory === category
            ) {
                item.classList.remove("hidden");
            } else {
                item.classList.add("hidden");
            }

        });

    });
});
