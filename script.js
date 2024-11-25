// Get elements for the transition and login page
const background = document.getElementById('background');
const desktopBackground = document.getElementById('desktop-background');
const loginContainer = document.getElementById('login-container');

// Add an event listener to trigger the transition to the login screen
background.addEventListener('click', () => {
    // Add the blur effect to the background
    desktopBackground.classList.add('blurry-background');

    // Smooth transition for the login screen
    loginContainer.style.display = 'flex';

    // Add smooth transition effect for the login page
    loginContainer.classList.add('smooth-transition');
});

// Add a simple form submission handler for the login (just to show functionality)
document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent the default form submission
    alert('Logged In');
});
