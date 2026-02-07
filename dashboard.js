function checkAuth() {
  if (localStorage.getItem("loggedIn") !== "true") {
    window.location.href = "login.html";
  }
}

function logout() {
  localStorage.removeItem("loggedIn");
  window.location.href = "login.html";
}

function saveStartup() {
  const startup = {
    name: startupName.value,
    problem: problem.value,
    solution: solution.value
  };
  localStorage.setItem("startup", JSON.stringify(startup));
  alert("Startup saved!");
}

function addTask() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push(taskInput.value);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  renderTasks();
}

function renderTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  taskList.innerHTML = "";
  tasks.forEach(t => {
    const li = document.createElement("li");
    li.textContent = t;
    taskList.appendChild(li);
  });
}

renderTasks();