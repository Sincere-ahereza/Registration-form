// Toggle password visibility
document.addEventListener('DOMContentLoaded', function() {
    const passwordInput = document.getElementById('password');
    const togglePassword = document.getElementById('togglePassword');
    if (togglePassword && passwordInput) {
        togglePassword.addEventListener('click', function() {
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);
        });
    }
});
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registrationForm');
    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirm-password');

    const usernameError = document.getElementById('username-error');
    const emailError = document.getElementById('email-error');
    const passwordError = document.getElementById('password-error');
    const confirmPasswordError = document.getElementById('confirm-password-error');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent default form submission

        let isValid = true;

        // Reset error messages
        usernameError.textContent = '';
        emailError.textContent = '';
        passwordError.textContent = '';
        confirmPasswordError.textContent = '';
  // Validate Username
        if (usernameInput.value.trim() === '') {
            usernameError.textContent = 'Username is required.';
            isValid = false;
        }

        // Validate Email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value.trim())) {
            emailError.textContent = 'Invalid email format.';
            isValid = false;
        }

        // Validate Password
        if (passwordInput.value.length < 6) {
            passwordError.textContent = 'Password must be at least 8 characters long.';
            isValid = false;
        }

        // Validate Confirm Password
        if (passwordInput.value !== confirmPasswordInput.value) {
            confirmPasswordError.textContent = 'Passwords do not match.';
            isValid = false;
        }
          if (isValid) {
            alert('Registration successful!'); // Or send data to a server
            form.reset(); // Clear the form
        }
    });
});