// Wait for the page to load, then show the login screen with the blur effect
window.onload = function() {
  setTimeout(() => {
    document.getElementById('desktop-background').style.filter = 'blur(10px)';
    document.getElementById('login-screen').classList.add('visible');
  }, 1000); // Delay for a smooth transition
};

// Handle login form submission
function submitLogin() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Placeholder check for username and password (this can be expanded later)
  if (username === "BobWilliams" && password === "1234") {
    alert("Login successful!"); // Placeholder action on success
  } else {
    alert("Invalid login credentials.");
  }
}
