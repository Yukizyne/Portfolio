/* =========================================================
   DEVCHOLO — MAIN SCRIPT
   H1 / NAME ANIMATION REMOVED
========================================================= */


/* =========================================================
   THEME TOGGLE
========================================================= */

const themeToggle = document.getElementById("themeToggle");

if (themeToggle) {
    themeToggle.addEventListener("click", () => {

        document.body.classList.toggle("light");

        themeToggle.textContent =
            document.body.classList.contains("light")
                ? "☀"
                : "☼";

    });
}


/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {

    revealElements.forEach(element => {

        const elementTop =
            element.getBoundingClientRect().top;

        const windowHeight =
            window.innerHeight;

        if (elementTop < windowHeight - 100) {
            element.classList.add("show");
        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

const sections =
    document.querySelectorAll("section");

const navLinks =
    document.querySelectorAll(".nav-links a");

function updateActiveNavigation() {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            current =
                section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            `#${current}`
        ) {
            link.classList.add("active");
        }

    });

}

window.addEventListener(
    "scroll",
    updateActiveNavigation
);

updateActiveNavigation();


/* =========================================================
   MOBILE MENU
========================================================= */

const menuToggle =
    document.getElementById("menuToggle");

const navLinksContainer =
    document.querySelector(".nav-links");

if (menuToggle && navLinksContainer) {

    menuToggle.addEventListener("click", () => {

        navLinksContainer.classList.toggle("active");

        menuToggle.textContent =
            navLinksContainer.classList.contains("active")
                ? "✕"
                : "☰";

    });


    navLinksContainer
        .querySelectorAll("a")
        .forEach(link => {

            link.addEventListener("click", () => {

                navLinksContainer.classList.remove(
                    "active"
                );

                menuToggle.textContent = "☰";

            });

        });

}


/* =========================================================
   SKILL BARS
========================================================= */

const skillsSection =
    document.querySelector("#skills");

const skillProgressBars =
    document.querySelectorAll(".skill-progress");

if (skillsSection && skillProgressBars.length) {

    const skillsObserver =
        new IntersectionObserver(
            (entries) => {

                entries.forEach(entry => {

                    if (!entry.isIntersecting) {
                        return;
                    }

                    skillProgressBars.forEach(bar => {

                        const progress =
                            bar.dataset.progress;

                        if (progress) {

                            bar.style.width =
                                `${progress}%`;

                        }

                    });

                    skillsObserver.unobserve(
                        entry.target
                    );

                });

            },
            {
                threshold: 0.3
            }
        );

    skillsObserver.observe(skillsSection);

}


/* =========================================================
   ROBLOX GAME DROPDOWN
========================================================= */

const viewGamesBtn =
    document.querySelector(".view-games-btn");

const gameOptions =
    document.querySelector(".game-options");

if (viewGamesBtn && gameOptions) {

    viewGamesBtn.addEventListener("click", () => {

        gameOptions.classList.toggle("show");

    });

}


/* =========================================================
   STATIC H1
   NO MOVEMENT
   NO PARTICLES
   NO DESTRUCTION
   NO REBUILD
   NO AUTO ANIMATION
========================================================= */

const nameElement =
    document.querySelector(".animated-name");

if (nameElement) {

    /* Remove any animation added by JavaScript */
    nameElement.style.animation = "none";

    /* Remove movement */
    nameElement.style.transform = "none";

    /* Remove transition */
    nameElement.style.transition = "none";

    /* Keep it visible */
    nameElement.style.opacity = "1";
    nameElement.style.visibility = "visible";


    /* Remove any old particle elements */
    nameElement
        .querySelectorAll(".name-particle")
        .forEach(particle => {
            particle.remove();
        });


    /* Remove old animation classes */
    nameElement.classList.remove(
        "destroying",
        "rebuilding"
    );

}