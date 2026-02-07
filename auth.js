function signup(e) {
  e.preventDefault();

  const user = {
    name: name.value,
    email: email.value,
    password: password.value
  };

  localStorage.setItem("user", JSON.stringify(user));
  localStorage.setItem("loggedIn", "true");

  window.location.href = "dashboard.html";
}

function login(e) {
  e.preventDefault();

  const user = JSON.parse(localStorage.getItem("user"));

  if (
    user &&
    user.email === email.value &&
    user.password === password.value
  ) {
    localStorage.setItem("loggedIn", "true");
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid credentials");
  }
}