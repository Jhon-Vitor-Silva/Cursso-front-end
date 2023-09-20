function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();
    
    if (taskText === "") {
        alert("Por favor, insira uma tarefa válida.");
        return;
    }
    
    const taskList = document.getElementById("taskList");
    const li = document.createElement("li");
    const taskSpan = document.createElement("span");
    taskSpan.textContent = taskText;
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Excluir";
    deleteButton.className = "delete-button";
    deleteButton.onclick = function () {
        li.remove();
    };
    const doneButton = document.createElement("button");
    doneButton.textContent = "Feito";
    doneButton.className = "done-button";
    doneButton.onclick = function () {
        li.style.textDecoration = "line-through";
        doneButton.style.display = "none";
    };
    
    li.appendChild(taskSpan);
    li.appendChild(doneButton);
    li.appendChild(deleteButton);
    taskList.appendChild(li);
    
    taskInput.value = "";
}