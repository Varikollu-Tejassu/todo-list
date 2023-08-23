
type Task = {
  title: string,
  completed: boolean,
  createdAt: Date
}
var list = document.querySelector<HTMLUListElement>("#list")
var form = document.getElementById("new-task-form") as HTMLFormElement | null
var input = document.querySelector<HTMLInputElement>("#new-task-title")

// create local storage
var tasks: Task[] = loadTasks()
tasks.forEach(addListItem)

form?.addEventListener("submit", e => {
  e.preventDefault()

  
  if(input?.value == "" || input?.value == null) return

  var newTask: Task ={
    
    title: input.value,
    completed: false,
    createdAt: new Date()
  }

  tasks.push(newTask)
  
  addListItem(newTask)
  
  input.value = ""
})



function addListItem  (task: Task){
  const item = document.createElement("li")
  const label = document.createElement('label')
  const checkbox = document.createElement('input')
  checkbox.addEventListener("change", () => {
    task.completed =checkbox.checked
    saveTasks()
  })
  checkbox.type = "checkbox"
  
  checkbox.checked = task.completed
  
  var dropdown=document.createElement("select")
  var option1=document.createElement("option")
  option1.innerHTML="todo"
  dropdown.appendChild(option1)
  var option2=document.createElement("option")
  option2.innerHTML="In-progress"
  dropdown.appendChild(option2)
  var option3=document.createElement("option")
  option3.innerHTML="completed";
  dropdown.appendChild(option3)
  console.log(dropdown)

  var x = document.createElement("BUTTON");
  var t = document.createTextNode("X");
  x.appendChild(t);
  
  x.style.

 
  label.append(checkbox, task.title,dropdown,x)
  item.append(label)
  list?.append(item)

}

var saveTasks = () => {
  localStorage.setItem("TASKS", JSON.stringify(tasks))
}

function loadTasks():Task[] {
  const taskJson = localStorage.getItem('TASKS')
  if(taskJson == null) return []
  return JSON.parse(taskJson)
}

