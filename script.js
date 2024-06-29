const todoForm = document.querySelector('.form-todo');
const todoInput = document.querySelector('.form-todo input[type="text"]');
const todoList  = document.querySelector('.todo-list');
todoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const newTask = todoInput.value;
    const newLi = document.createElement("li");
    const newLiInnerHtml = `<span class="text">${newTask}</span>
                <div class="todo-buttons">
                    <button class="todo-btn done">Done</button>
                    <button class="todo-btn remove">Remove</button>
                </div>`;
    newLi.innerHTML = newLiInnerHtml;
    todoList.append(newLi);
    todoInput.value = "";
});

todoList.addEventListener('click', (e) => {
    //check if user clicks on any target
    if(e.target.classList.contains("done")){
        const parentDiv = e.target.parentNode;
        const liSpan = parentDiv.previousElementSibling;
        liSpan.style.textDecoration = "line-through white";
    }
    
    if(e.target.classList.contains("remove")){
        const removeLi = e.target.parentNode.parentNode;
        removeLi.remove();
    };
});