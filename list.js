let form = document.getElementById("addForm");
let TaskList = document.getElementById("items");
let filter = document.getElementById("filter");

console.log("inside js file");

// Form submit event
form.addEventListener("submit", addTask);
// Delete event
TaskList.addEventListener("click", removeTask);
// Filter event
filter.addEventListener("keyup", filterTasks);

// Add item
function addTask(e) {
  e.preventDefault();

  // Get input value
  var newTask = document.getElementById("item").value;
  console.log("value entered "+newTask);

  // Create new li element
  var li = document.createElement("li");
  // Add class
  li.className = "list-group-item";
  // Add text node with input value
  li.appendChild(document.createTextNode(newTask));

  // Create del button element
  var deleteBtn = document.createElement("button");

  // Add classes to del button
  deleteBtn.className = "btn btn-danger btn-sm float-right delete";

  // Append text node
  deleteBtn.appendChild(document.createTextNode("X"));

  // Append button to li
  li.appendChild(deleteBtn);

  // Append li to list
  TaskList.appendChild(li);
}

// Remove item
function removeTask(e) {
  console.log(e);
  console.log(e.target);
  console.log(e.target.classList);
  if (e.target.classList.contains("delete")) 
  
  {
    if (confirm("Are You Sure?")) {
      console.log(e.target);
      console.log(e.target.parentElement);
      var li = e.target.parentElement;
      TaskList.removeChild(li);
    }
  }
}

// Filter Items
function filterTasks(e) {
  // convert text to lowercase
  var text = e.target.value.toLowerCase();
  console.log(e.target.value);
  // Get tasks
  var tasks = TaskList.getElementsByTagName("li");
  // Convert to an array
  Array.from(tasks).forEach(function (task) {
    var taskName = task.firstChild.textContent;
    if (taskName.toLowerCase().indexOf(text) != -1) {
      task.style.display = "block";
    } else {
      task.style.display = "none";
    }
  });
}
