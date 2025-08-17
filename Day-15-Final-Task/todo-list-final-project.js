// 

function dark() {
  localStorage.setItem("theme", "dark");
  location.reload();
}
function light() {
  localStorage.setItem("theme", "light");
  location.reload();

}

let theme = localStorage.getItem("theme");

if (theme === "dark") {
  document.getElementById("light").classList.remove("hidden");
  document.getElementById("dark").classList.add("hidden");
  document.getElementById("body").classList.add("dark")
  document.getElementById("body").classList.remove("light")
} else {
  document.getElementById("light").classList.add("hidden");
  document.getElementById("dark").classList.remove("hidden");
  document.getElementById("body").classList.remove("dark")
  document.getElementById("body").classList.add("light")
}

function submitForm(event, form) {
  event.preventDefault();

  const task = form.elements["task"].value;
  const date = form.elements["date"].value;
  const type = form.elements["type"].value;
  const difficulty = form.elements["difficulty"].value;

  const newTask = { task, date, type, difficulty };

  let recordTask = JSON.parse(localStorage.getItem("task")) || [];
  recordTask.push(newTask);
  localStorage.setItem("task", JSON.stringify(recordTask));

  location.reload();
}

let task = JSON.parse(localStorage.getItem("task"));
let html = "";

if (task.length === 0) {
  html = '<div class="no-task">Your to-do list is empty</div>'
} else {
  task.forEach(t => {
    html += `<div class="task-card">
  <div class="task-header">
    <h3>${t.task}</h3>
    <span class="task-date">📅 ${t.date}</span>
  </div>
  <div class="task-meta">
    <span class="task-type">📌 ${t.type}</span>
    <span class="task-difficulty ${t.difficulty.toLowerCase()}">⚡ ${t.difficulty}</span>
  </div>

  <form onsubmit="deleteTask(event, this)">
    <input name="taskName" type="hidden" value="${t.task}">
    <button type="submit" class="delete-btn">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"/>
      </svg>
    </button>
  </form>
</div>

`;
  });
}
document.getElementById("displayTask").innerHTML = html;

function trashButton() {
  let task = [];
  localStorage.setItem("task", JSON.stringify(task));

  location.reload();
}

function deleteTask(event, form) {
  event.preventDefault();

  let taskName = form.elements["taskName"].value;

  let tasks = JSON.parse(localStorage.getItem("task"));

  let updatedTask = tasks.filter(t => t.task !== taskName);

  localStorage.setItem("task", JSON.stringify(updatedTask));

  location.reload();
}