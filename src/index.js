document.addEventListener("DOMContentLoaded", () => {
  addingEventListeners();
});

//get the form and add an event listener

function addingEventListeners() {
  document
    .getElementById("create-task-form")
    .addEventListener("submit", handleFormSubmit);
}

function handleFormSubmit(e) {
  
  e.preventDefault();
  //console.log(e)
  
  const task = e.target[0].value //const task = e.target['new_task_description'].value
  //console.log(task)
  const priorityTask = parseInt(e.target.priority.value)
  displayTask(task,priorityTask)
  //console.log(priorityTask)

}
function displayTask(task,priorityTask){
  const taskUl = document.getElementById('tasks')
  const taskLi = document.createElement('li')

  //Create a delete button
  const deleteBtn = document.createElement('button')

  deleteBtn.textContent = 'x'
  deleteBtn.addEventListener('click', deleteTask)

  taskLi.textContent = task + " "

  taskLi.style.color = getPriority(priorityTask)
  taskLi.appendChild(deleteBtn)
  taskUl.appendChild(taskLi)
}

function deleteTask(e){
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