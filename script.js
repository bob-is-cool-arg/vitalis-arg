document.addEventListener("DOMContentLoaded", () => {
  const militaryTimeDisplay = document.getElementById("military-time");
  const footerTimeDisplay = document.getElementById("footer-time");

  const preLoginScreen = document.getElementById("pre-login-screen");
  const loginScreen = document.getElementById("login-screen");
  const loadingScreen = document.getElementById("loading-screen");

  // Update time in real time
  const updateTime = () => {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    militaryTimeDisplay.textContent = `${hours}:${minutes}`;
    footerTimeDisplay.textContent = now.toLocaleTimeString();
  };
  setInterval(updateTime, 1000);
  updateTime();

  // Open login screen
  preLoginScreen.addEventListener("click", () => {
    preLoginScreen.classList.add("hidden");
    loginScreen.classList.remove("hidden");
  });

  // Close login screen
  document.getElementById("close-login").addEventListener("click", () => {
    loginScreen.classList.add("hidden");
    preLoginScreen.classList.remove("hidden");
  });

  // Handle login submission
  document.getElementById("login-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "Bob" && password === "Ava2003") {
      loginScreen.classList.add("hidden");
      loadingScreen.classList.remove("hidden");

      setTimeout(() => {
        alert("Welcome to Vitalis Research!");
        loadingScreen.classList.add("hidden");
      }, 5000); // 5-second loading screen
    } else {
      alert("Incorrect username or password.");
    }
  });
});
