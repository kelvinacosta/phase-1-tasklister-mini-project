document.addEventListener("DOMContentLoaded", () => {
  addingEventListeners();
});

let taskObjArr = []
//get the form and add an event listener

function addingEventListeners() {
  document
    .getElementById("create-task-form")
    .addEventListener("submit", handleFormSubmit);

  document.getElementById('sort-tasks').addEventListener('change',sortTasks)
}

function handleFormSubmit(e) {
  
  e.preventDefault();
  //console.log(e)
  
  const task = e.target[0].value //const task = e.target['new_task_description'].value
  //console.log(task)
  const priorityTask = parseInt(e.target.priority.value)
  
  const taskObj = {task,priorityTask}
  taskObjArr.push(taskObj)
  console.log(taskObjArr)
  
  displayTasks()
  //console.log(priorityTask)


}
function displayTasks(){
  const taskUl = document.getElementById('tasks')
  taskUl.innerHTML = ''
  taskObjArr.forEach((task)=>{

    const taskLi = document.createElement('li')
    //Create a delete button
    const deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'x'
    deleteBtn.addEventListener('click', (e) => deleteTask(e,task))
    
    taskLi.textContent = task.task + " "
    taskLi.style.color = getPriority(task.priorityTask)
    taskLi.appendChild(deleteBtn)
    taskUl.appendChild(taskLi)
  })


}

function deleteTask(e,task){
  
  taskObjArr = taskObjArr.filter((element)=> element.task !== task.task )
  e.target.parentNode.remove()
}

function getPriority(priorityTask){
  if (priorityTask === 1) {
    return 'red'
  } else if(priorityTask === 2) {
    return 'blue'
  }else{
    return 'orange'
  }
}


function sortTasks(){
  const sortTasksSelect = document.getElementById('sort-tasks')

  if(sortTasksSelect.value === 'h-l'){
    taskObjArr.sort((a,b)=> a.priorityTask - b.priorityTask)
  }else{
    taskObjArr.sort((a,b)=> b.priorityTask - a.priorityTask)
  }
  displayTasks()

}