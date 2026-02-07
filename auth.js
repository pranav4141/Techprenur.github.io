function login() {
  const name = document.getElementById("name").value;
  const role = document.getElementById("role").value;

  if (!name) {
    alert("Enter your name");
    return;
  }

  localStorage.setItem("user", JSON.stringify({ name, role }));
  window.location.href = "dashboard.html";
}