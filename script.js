window.addEventListener('load', function() {
    const loader = document.getElementById('loader');
    
    setTimeout(() => {
        loader.classList.add('hidden');
    }, 500);
});

const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navMenu = document.getElementById('navMenu');

mobileMenuToggle.addEventListener('click', function() {
    navMenu.classList.toggle('active');
    const icon = this.querySelector('i');
    if (navMenu.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        if (window.innerWidth <= 768) {
            navMenu.classList.remove('active');
            const icon = mobileMenuToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

const buyButtons = document.querySelectorAll('.buy-button');
buyButtons.forEach(button => {
    button.addEventListener('click', function() {
        const productCard = this.closest('.product-card');
        const productName = productCard.querySelector('h3').textContent;
        window.location.href = `product-details.html?product=${encodeURIComponent(productName)}`;
    });
});
