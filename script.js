const users = [
    { username: "Pranay", password: "abc@22" },
    { username: "Itachi", password: "xyz@22" },
  ];
  
  const loginForm = document.getElementById("loginForm");
  const registerForm = document.getElementById("registerForm");
  const message = document.getElementById("message");
  
  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const user = users.find(user => user.username === username && user.password === password);
    if (user) {
      document.cookie = "authenticated=true";
      window.location.href = "secure.html";
    } else {
      message.textContent = "Invalid username or password.";
    }
  });
  
  registerForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const regUsername = document.getElementById("regUsername").value;
    const regPassword = document.getElementById("regPassword").value;
    users.push({ username: regUsername, password: regPassword });
    message.textContent = "Registration successful! You can now log in.";
  });
  