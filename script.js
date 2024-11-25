window.onload = function() {
  // Show a loading screen initially
  const loadingScreen = document.createElement('div');
  loadingScreen.className = 'loading-screen';
  loadingScreen.innerHTML = 'Loading...';
  document.body.appendChild(loadingScreen);

  // Wait for a second before transitioning to login
  setTimeout(() => {
    // Hide loading screen
    loadingScreen.style.visibility = 'hidden';
    loadingScreen.style.opacity = 0;

    // Blur the background
    document.getElementById('desktop-background').style.filter = 'blur(10px)';

    // Show the login screen with the transition
    document.getElementById('login-screen').classList.add('visible');
  }, 1500); // 1.5 second delay for loading
};

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
