console.log("")

let tasks = [];

function addTask() {

    const taskInput = document.getElementById("todo-input");
    const dateInput = document.getElementById("date-input");

    if (taskInput.value === "" || dateInput.value === "") {
        alert("Please enter task and date.");

    } else {
        tasks.push({
        title: taskInput.value,
        date: dateInput.value
    });

    console.log("Task added", taskInput.value, "on", dateInput.value);
    console.log(tasks);

    renderTasks();

    }
}

function removeAllTask() {
    
    tasks = [];

    renderTasks();

}

function toggleFilter() {

}

function completeTask(index){
    tasks[index].completed = true;
}


function renderTasks() {
    const taskList = document.getElementById("todo-list");
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        taskList.innerHTML += `
            <li class="todo-item flex justify-between items-center bg-white p-4 rounded-md mb-2">
                <span>${task.title}</span>
                <div>
                    <button class="px-[26px] py-[4px] rounded-[8px] bg-green-500 text-white">Edit</button>
                    <button class="px-[26px] py-[4px] rounded-[8px] bg-red-500 text-white">Delete</button>
                </div>
            </li>
        `;
    });
}