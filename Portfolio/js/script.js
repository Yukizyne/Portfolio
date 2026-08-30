const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light");

    themeToggle.textContent =
        document.body.classList.contains("light") ? "☀" : "☼";
});

const revealElements = document.querySelectorAll(".reveal");

const revealOnScroll = () => {
    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight - 100) {
            element.classList.add("show");
        }
    });
};

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });
});

const menuToggle = document.getElementById("menuToggle");
const navLinksContainer = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinksContainer.classList.toggle("open");

    menuToggle.textContent =
        navLinksContainer.classList.contains("open") ? "✕" : "☰";
});

navLinksContainer.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        navLinksContainer.classList.remove("open");
        menuToggle.textContent = "☰";
    });
});