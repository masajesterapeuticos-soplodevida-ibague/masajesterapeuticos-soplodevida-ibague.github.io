document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        window.scrollTo({
            top: targetSection.offsetTop - 60, // Compensa la altura del header fijo
            behavior: 'smooth'
        });
    });
});

const revealElements = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15
});

revealElements.forEach(el => observer.observe(el));

let lastScrollTop = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop && currentScroll > 120) {
        // Bajando
        header.classList.add('hide');
    } else {
        // Subiendo
        header.classList.remove('hide');
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});


//MODAL IMAGENES

const modal = document.getElementById("modal-img");
const modalImg = document.getElementById("img-ampliada");
const closeBtn = document.querySelector(".close");

document.querySelectorAll(".img-beneficio").forEach(img => {
    img.addEventListener("click", () => {
        modal.style.display = "flex";
        modalImg.src = img.src;
    });
});

closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        modal.style.display = "none";
    }
});