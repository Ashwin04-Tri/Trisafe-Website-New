// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Hover Effect for Buttons
document.querySelectorAll('.cta-buttons a').forEach(button => {
    button.addEventListener('mouseenter', function () {
        this.style.transform = 'scale(1.1)';
        this.style.transition = 'transform 0.3s ease-in-out';
    });
    button.addEventListener('mouseleave', function () {
        this.style.transform = 'scale(1)';
    });
});

// Modal for Contact Form Submission
function showAlert(message) {
    const alertBox = document.createElement('div');
    alertBox.classList.add('alert-box');
    alertBox.textContent = message;
    document.body.appendChild(alertBox);

    // Remove the alert after 3 seconds
    setTimeout(() => {
        document.body.removeChild(alertBox);
    }, 3000);
}

// Form Validation and Submission
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (email === '' || message === '') {
            showAlert('Please fill out all fields.');
        } else {
            showAlert('Thank you for contacting us!');
            // Reset form fields
            contactForm.reset();

            // Send the form data via email or to a backend (this part can be integrated later)
            // Example: sendEmail(email, message);
        }
    });
}
