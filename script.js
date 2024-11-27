document.addEventListener("DOMContentLoaded", () => {
  // Time Display
  const updateTime = () => {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const timeDisplay = `${hours}:${minutes}`;
    document.getElementById("military-time").textContent = timeDisplay;
    document.getElementById("small-time").textContent = now.toLocaleTimeString();
  };

  setInterval(updateTime, 1000);

  // Transition to login screen
  const preLoginScreen = document.getElementById("pre-login-screen");
  const loginScreen = document.getElementById("login-screen");
  const loadingScreen = document.getElementById("loading-screen");

  preLoginScreen.addEventListener("click", () => {
    preLoginScreen.classList.add("hidden");
    setTimeout(() => loginScreen.classList.remove("hidden"), 1500);
  });

  // Exit login screen
  document.getElementById("close-login").addEventListener("click", () => {
    loginScreen.classList.add("hidden");
    preLoginScreen.classList.remove("hidden");
  });

  // Handle Login
  document.getElementById("login-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "Bob Williams" && password === "Ava-1994") {
      loginScreen.classList.add("hidden");
      loadingScreen.classList.remove("hidden");
      setTimeout(() => {
        alert("Logged In!");
        loadingScreen.classList.add("hidden");
      }, 3000);
    } else {
      alert("Incorrect username or password!");
    }
  });
});

