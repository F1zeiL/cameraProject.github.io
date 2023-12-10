// Dummy user data for demonstration purposes
const users = [
  { username: "admin", password: "admin" }
];

let currentUser = null;

function login() {
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");

  const enteredUsername = usernameInput.value;
  const enteredPassword = passwordInput.value;

  // Check if the entered credentials match any user
  const user = users.find(u => u.username === enteredUsername && u.password === enteredPassword);

  if (user) {
    // Successful login
    currentUser = user;
    showWelcomeMessage();
  } else {
    // Failed login
    alert("Invalid username or password. Please try again.");
  }

  // Clear the input fields
  usernameInput.value = "";
  passwordInput.value = "";
}

function logout() {
  currentUser = null;
  showLoginForm();
}

function showLoginForm() {
  document.getElementById("loginForm").style.display = "block";
  document.getElementById("welcomeMessage").style.display = "none";
}

function showWelcomeMessage() {
  document.getElementById("loginForm").style.display = "none";
  document.getElementById("welcomeMessage").style.display = "block";
  document.getElementById("loggedInUser").textContent = currentUser.username;
  // 跳转到 index.html
  window.location.href = 'index.html';
}

// Initial setup: Show the login form
showLoginForm();