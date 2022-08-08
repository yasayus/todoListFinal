const taskBtnAdd = document.querySelector(".btnAdd");
const taskListOutput = document.querySelector(".taskOutput");
const taskInput = document.querySelector(".taskInput");

function addTask() {
	if (taskInput.value === "") {
		return null;
	}
	const taskItem = document.createElement("li");
	taskItem.classList.add("taskItem");

	const taskPara = document.createElement("p");
	taskPara.innerHTML = taskInput.value;
	taskPara.classList.add("taskPara");
	taskItem.appendChild(taskPara);

	const taskDiv = document.createElement("div");
	taskItem.appendChild(taskDiv);

	const btnDone = document.createElement("button");
	btnDone.innerHTML = "";
	btnDone.classList.add("btnDone");
	taskDiv.appendChild(btnDone);

	const btnDel = document.createElement("button");
	btnDel.innerHTML = "Delete";
	btnDel.classList.add("btnDel");
	taskDiv.appendChild(btnDel);

	taskListOutput.appendChild(taskItem);
	taskInput.value = "";
}

function deleteOrComplete(event) {
	const buttonClicked = event.target;
	if (buttonClicked.classList[0] === "btnDel") {
		buttonClicked.parentElement.parentElement.remove();
	} else if (buttonClicked.classList[0] === "btnDone") {
		buttonClicked.classList.toggle("btnUndo");
		buttonClicked.parentElement.parentElement.classList.toggle(
			"taskCompleted"
		);
	}
}

taskBtnAdd.addEventListener("click", addTask);
taskListOutput.addEventListener("click", deleteOrComplete);
