function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskText = taskInput.value.trim();
    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }
    var taskList = document.getElementById("taskList");
    var newTask = document.createElement("li");
    newTask.textContent = taskText;

     var span = document.createElement('span');
    var checkbox = document.createElement('input');
    
    checkbox.type = "checkbox";
   
    var dropdown = document.createElement("select");
    

    var option0 = document.createElement("option");
    option0.innerHTML = "select";
    dropdown.appendChild(option0);
    var option1 = document.createElement("option");
    option1.innerHTML = "todo";
    dropdown.appendChild(option1);
    var option2 = document.createElement("option");
    option2.innerHTML = "In-progress";
    dropdown.appendChild(option2);
    var option3 = document.createElement("option");
    option3.innerHTML = "completed";
    dropdown.appendChild(option3);
     newTask.appendChild(checkbox)

     span.appendChild(dropdown)

     dropdown.addEventListener("change",function(){
        console.log("drop",dropdown.value);
         if(dropdown.value==="completed"){
           
            checkbox.checked=true;
            newTask.classList.add("line")
            // console.log("aaaaaaaaaaaaaaa");

         }
         else{
            checkbox.checked=false;
            newTask.classList.remove("line");
         }
     })
     
    checkbox.addEventListener("change",function(){
        console.log("jjjjjjjjjjjjj",checkbox.checked)
        if(checkbox.cheked=true){
          
         dropdown.value="completed";
        }
        else{
        
            dropdown.value="select";
        }
    })
    
     



    var deleteButton = document.createElement("button");
    console.log("aaaaaaaaaaaaaaaaaaaaaaa",deleteButton);
    deleteButton.textContent = "Delete";
   
    deleteButton.addEventListener("click",function(){
        console.log("assssssssss",newTask);
        taskList.removeChild(newTask);
     
        updateLocalStorage();
       
        

    });
   
    newTask.appendChild(span);
   newTask.appendChild(deleteButton)
    taskList.appendChild(newTask);
    taskInput.value = "";
    updateLocalStorage();
   

}

// Function to update local storage with the current task list

function updateLocalStorage() {

    var taskList = document.getElementById("taskList").innerHTML;
    localStorage.setItem("tasks", taskList);


}

// Function to load tasks from local storage on page load

function loadTasks() {
    var taskList = document.getElementById("taskList");
    var savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {

        taskList.innerHTML = savedTasks;
    }

}
loadTasks();

function search(){
   
    var searchinput= document.getElementById("search").value.toLowerCase();
    var savedTasks = localStorage.getItem("tasks");
    var filter=savedTasks.filter((task)=>task.textContent.toLowerCase().includes(searchinput))
    
    taskList.innerHTML = filter;
}


// clear all

function clearall(){
    localStorage.clear();
    location.reload();
}
