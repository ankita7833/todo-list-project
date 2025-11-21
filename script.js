function addItem() {
    let task = document.getElementById("task");
    let list = document.getElementById("list");
    if (task.value === "") return;
    let li = document.createElement("li");
    li.textContent = task.value;
    list.appendChild(li);
    task.value = "";
}
