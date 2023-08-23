var list = document.querySelector("#list");
var form = document.getElementById("new-task-form");
var input = document.querySelector("#new-task-title");
// create local storage
var tasks = loadTasks();
tasks.forEach(addListItem);
form === null || form === void 0 ? void 0 : form.addEventListener("submit", function (e) {
    e.preventDefault();
    
    if ((input === null || input === void 0 ? void 0 : input.value) == "" || (input === null || input === void 0 ? void 0 : input.value) == null)
        return;
   
    var newTask = {
        title: input.value,
        completed: false,
        createdAt: new Date()
    };
    tasks.push(newTask);

    addListItem(newTask);

    input.value = "";
});

function addListItem(task) {
    var item = document.createElement("li");
    var label = document.createElement('label');
    var checkbox = document.createElement('input');
    checkbox.addEventListener("change", function () {
        task.completed = checkbox.checked;
        saveTasks();
    });
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;
    var dropdown = document.createElement("select");
    var option1 = document.createElement("option");
    option1.innerHTML = "todo";
    dropdown.appendChild(option1);
    var option2 = document.createElement("option");
    option2.innerHTML = "In-progress";
    dropdown.appendChild(option2);
    var option3 = document.createElement("option");
    option3.innerHTML = "completed";
    dropdown.appendChild(option3);
   dropdown.style.marginLeft="30px"
    var x = document.createElement("BUTTON");
    var t = document.createTextNode("X");
    x.appendChild(t);
    x.addEventListener("click",function(){

    })
    // compine all the field/ elements into one using the array append method
    label.append(checkbox, task.title, dropdown, x);
    item.append(label);
    list === null || list === void 0 ? void 0 : list.append(item);
}
var saveTasks = function () {
    localStorage.setItem("TASKS", JSON.stringify(tasks));
};
function loadTasks() {
    var taskJson = localStorage.getItem('TASKS');
    if (taskJson == null)
        return [];
    return JSON.parse(taskJson);
}





