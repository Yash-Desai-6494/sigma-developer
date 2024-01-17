let taskInput = document.getElementById("taskInput")
let taskList = document.getElementById("taskList")

const checkBox = () => {
    let checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    return checkbox
}

const addTask = () => {
    if (taskInput.value !== "") {
        let newTask = document.createElement("li")
        newTask.textContent = taskInput.value
        let checkbox = checkBox()
        checkbox.addEventListener('change', function () {
            newTask.classList.toggle('completed', checkbox.checked);
        })
        taskList.appendChild(checkbox)
        taskList.appendChild(newTask)
        taskInput.value = ""
    } else {
        alert("enter valid task")
    }
}