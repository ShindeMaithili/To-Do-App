const addContainer = document.getElementById("task-container");
const listOfTask = document.getElementById("list-of-task");

//add task button
function addTask() {
  if (addContainer.value === "") {
    alert("You must add at least one task!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = addContainer.value;
    listOfTask.appendChild(li);
    let detIcon = document.createElement("deleIcon");
    detIcon.innerHTML = "\u00d7";
    li.appendChild(detIcon);
  }
  addContainer.value = "";
  saveTask();
}

//checked list and delete list
listOfTask.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveTask();
    } else if (e.target.tagName === "DELEICON") {
      e.target.parentElement.remove();
      saveTask();
    }
  },
  false
);

//task save in local storage
function saveTask() {
  localStorage.setItem("tasks", listOfTask.innerHTML);
}

//display task after refreshing
function displayTask() {
  listOfTask.innerHTML = localStorage.getItem("tasks");
}
displayTask();
