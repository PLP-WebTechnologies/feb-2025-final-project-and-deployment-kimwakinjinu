// Simple JavaScript for demonstration

document.addEventListener('DOMContentLoaded', () => {
    console.log('Blog loaded successfully!');

    // --- Blog Post Interactivity (from previous version) ---
    const readMoreLinks = document.querySelectorAll('.read-more');

    readMoreLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent the default link behavior
            // In a real blog, this would navigate to the full post page
            alert('This is a fake post!!');
        });
    });

    const header = document.querySelector('header');
    if (header) { // Check if header exists on the page
        header.addEventListener('click', () => {
            // Example: Toggle header background color on click
            const currentColor = header.style.backgroundColor;
            if (currentColor === 'rgb(51, 51, 51)' || currentColor === '') { // Check for initial color or empty
                 header.style.backgroundColor = '#555';
            } else {
                 header.style.backgroundColor = '#333';
            }
            console.log('Header clicked!');
        });
    }

    // --- Contact Form Validation ---
    const contactForm = document.getElementById('contactForm');

    if (contactForm) { // Check if the contact form exists on the page
        contactForm.addEventListener('submit', function(event) {
            // Prevent the default form submission
            event.preventDefault();

            // Get form elements
            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const messageInput = document.getElementById('message');

            // Get error message spans
            const nameError = document.getElementById('nameError');
            const emailError = document.getElementById('emailError');
            const messageError = document.getElementById('messageError');

            // Reset previous error messages
            nameError.textContent = '';
            emailError.textContent = '';
            messageError.textContent = '';
            nameError.style.display = 'none';
            emailError.style.display = 'none';
            messageError.style.display = 'none';


            let isValid = true; // Flag to track overall form validity

            // Validate Name
            if (nameInput.value.trim() === '') {
                nameError.textContent = 'Name is required.';
                nameError.style.display = 'block';
                isValid = false;
            }

            // Validate Email (basic format check)
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (emailInput.value.trim() === '') {
                emailError.textContent = 'Email is required.';
                emailError.style.display = 'block';
                isValid = false;
            } else if (!emailPattern.test(emailInput.value.trim())) {
                emailError.textContent = 'Please enter a valid email address.';
                emailError.style.display = 'block';
                isValid = false;
            }

            // Validate Message
            if (messageInput.value.trim() === '') {
                messageError.textContent = 'Message is required.';
                messageError.style.display = 'block';
                isValid = false;
            }

            // If the form is valid, you would typically send the data
            if (isValid) {
                // In a real application, you would send this data to a server
                console.log('Form submitted successfully!');
                console.log('Name:', nameInput.value.trim());
                console.log('Email:', emailInput.value.trim());
                console.log('Message:', messageInput.value.trim());

                // Display a success message or clear the form
                alert('Thank you for your message! (Form data logged to console)');
                contactForm.reset(); // Clear the form after successful submission
            }
        });
    }
});

