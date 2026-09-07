const themeToggle = document.getElementById("themeToggle");

if (themeToggle) {
const savedTheme = localStorage.getItem("theme");


if (savedTheme === "light") {
    document.body.classList.add("light");
    themeToggle.textContent = "☀";
}

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light");

    const isLight = document.body.classList.contains("light");

    themeToggle.textContent = isLight ? "☀" : "☼";
    localStorage.setItem("theme", isLight ? "light" : "dark");
});


}

const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {
revealElements.forEach(element => {
const elementTop = element.getBoundingClientRect().top;


    if (elementTop < window.innerHeight - 100) {
        element.classList.add("show");
    }
});


}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

function updateActiveNavigation() {
let current = "";


sections.forEach(section => {
    const sectionTop = section.offsetTop - 180;

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


}

window.addEventListener("scroll", updateActiveNavigation);
updateActiveNavigation();

const menuToggle = document.getElementById("menuToggle");
const navLinksContainer = document.querySelector(".nav-links");

if (menuToggle && navLinksContainer) {
menuToggle.addEventListener("click", () => {
navLinksContainer.classList.toggle("open");


    menuToggle.textContent =
        navLinksContainer.classList.contains("open")
            ? "✕"
            : "☰";
});

navLinksContainer.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        navLinksContainer.classList.remove("open");
        menuToggle.textContent = "☰";
    });
});

document.addEventListener("click", event => {
    if (
        !navLinksContainer.contains(event.target) &&
        !menuToggle.contains(event.target)
    ) {
        navLinksContainer.classList.remove("open");
        menuToggle.textContent = "☰";
    }
});

}

const skillsSection = document.querySelector("#skills");
const skillProgressBars = document.querySelectorAll(".skill-progress");

if (skillsSection && skillProgressBars.length) {
const skillsObserver = new IntersectionObserver(
entries => {
entries.forEach(entry => {
if (!entry.isIntersecting) {
return;
}


            skillProgressBars.forEach(bar => {
                const progress = bar.dataset.progress;

                if (progress) {
                    bar.style.width = `${progress}%`;
                }
            });

            skillsObserver.unobserve(entry.target);
        });
    },
    {
        threshold: 0.3
    }
);

skillsObserver.observe(skillsSection);


}

const viewGamesBtn = document.querySelector(".view-games-btn");
const gameOptions = document.querySelector(".game-options");

if (viewGamesBtn && gameOptions) {
viewGamesBtn.addEventListener("click", event => {
event.stopPropagation();
gameOptions.classList.toggle("show");
});


document.addEventListener("click", event => {
    if (
        !gameOptions.contains(event.target) &&
        !viewGamesBtn.contains(event.target)
    ) {
        gameOptions.classList.remove("show");
    }
});


}

const nameElement = document.querySelector(".animated-name");

if (nameElement) {
nameElement.style.animation = "none";
nameElement.style.transform = "none";
nameElement.style.transition = "none";
nameElement.style.opacity = "1";
nameElement.style.visibility = "visible";


nameElement.querySelectorAll(".name-particle").forEach(particle => {
    particle.remove();
});

nameElement.classList.remove("destroying", "rebuilding");

}
