//Info Date
const dateNumber = document.getElementById('dateNumber')
const dateMonth = document.getElementById('dateMonth')
const dateYear = document.getElementById('dateYear')
const dateDay = document.getElementById('dateDay')


const setDate = () => {
    const date = new Date()
    dateNumber.textContent = date.toLocaleString('es', {day: 'numeric'})
    dateMonth.textContent = date.toLocaleString('es', {month: 'short'})
    dateYear.textContent = date.toLocaleString('es', {year: 'numeric'})
    dateDay.textContent = date.toLocaleString('es', {weekday: 'long'})
};


setDate();
 

//Tasks List
const tasksList = document.getElementById('tasksList')


//Agrego una nueva tarea
const addNewTask = event => {
    event.preventDefault()
    const task = document.getElementById('newTask').value

    if(task.trim().length!=0){
        let newTask = document.createElement('div')
        newTask.classList.add('task')

        let newTaskText = document.createElement('li')
        newTaskText.textContent = task
        document.getElementById('newTask').value=''

        //Creo button para eliminar la tarea
        let newTaskButton = document.createElement('button')
        newTaskButton.classList.add('taskButton')
        newTaskButton.innerHTML = 'x'

        //Limpio la tarea
        newTaskButton.addEventListener('click', cleanTask)
        
        //Agrego la nueva tarea
        newTask.appendChild(newTaskText)
        newTask.appendChild(newTaskButton)
        tasksList.appendChild(newTask)
    }
};

/*classList es un objeto especial con métodos para agregar, eliminar y alternar ( add/remove/toggle ) una sola clase. */


const cleanTask = event => {
    // Elimina el elemento de la tarea del DOM
    event.target.parentNode.remove();
    /*Cuando hago clic en el botón de eliminar dentro de una tarea, event.target se refiere al botón. Por lo tanto, event.target.parentNode se refiere al div que contiene tanto el texto de la tarea como el botón de eliminar. Al llamar a .remove() en este nodo padre, estoy eliminando todo el div de la tarea del DOM, eliminando efectivamente la tarea de la lista.*/
};


const addTaskButton = document.getElementById('addTaskButton')

addTaskButton.addEventListener('click', addNewTask)


//Borro todas las tareas
const cleanTasks = () => {
    tasksList.innerHTML = ''
}

const cleanTasksButton = document.getElementById('cleanTasks')

cleanTasksButton.addEventListener('click', cleanTasks)