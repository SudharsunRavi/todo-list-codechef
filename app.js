const todoInput=document.getElementById("new-task");
const todoList=document.getElementById("todo-list");
const searchInput=document.getElementById("search");

function addTask(){
    if (todoInput.value===""){
        alert("Empty, Add a task!");
    }
    else{
        let newTask=document.createElement("li");
        newTask.innerHTML=todoInput.value;
        todoList.appendChild(newTask);
        //Delete icon
        let delIcon=document.createElement("span");
        delIcon.innerHTML="&times";
        newTask.appendChild(delIcon);
    }
    todoInput.value="";
    saveData();
};

// 13 - Enter btn keycode
todoInput.addEventListener("keyup", function(event) {
    if (event.keyCode === 13){
      event.preventDefault();
      addTask();
    }
});

todoList.addEventListener("click", function(e){
    if (e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("todoList",todoList.innerHTML);
};

function loadData(){
    todoList.innerHTML=localStorage.getItem("todoList");
};
loadData();

document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.querySelector("#search-bar");
    searchInput.addEventListener("input", (e) => {
      const value = e.target.value;
      const list = document.querySelectorAll("li");
      list.forEach((task) => {
        if (task.innerText.toLowerCase().includes(value.toLowerCase())) {
          task.style.display = "block";
          
        } else {
          task.style.display = "none";
        }
      });
    });
});