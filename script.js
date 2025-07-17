// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Fade in animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// Certificates accordion logic
const certificateTitles = document.querySelectorAll('.certificate-title');
certificateTitles.forEach(title => {
    title.addEventListener('click', function() {
        const li = this.parentElement;
        const openLi = li.parentElement.querySelector('li.open');
        if (openLi && openLi !== li) {
            openLi.classList.remove('open');
        }
        li.classList.toggle('open');
    });
});

// Contact form submission
document.querySelector('.contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(e.target);
    const name = e.target.querySelector('input[placeholder="Your Name"]').value;
    const email = e.target.querySelector('input[placeholder="Your Email"]').value;
    const subject = e.target.querySelector('input[placeholder="Subject"]').value;
    const message = e.target.querySelector('textarea').value;
    
    // Basic validation
    if (!name || !email || !subject || !message) {
        showAlert('Please fill in all fields.');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showAlert('Please enter a valid email address.');
        return;
    }
    
    // Show success message
    showAlert('Thank you for your message, ' + name + '! I\'ll get back to you soon.');
});

// Show alert function (if not present)
function showAlert(message) {
    alert(message);
}