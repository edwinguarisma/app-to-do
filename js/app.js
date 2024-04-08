// const tareas = [];
// let time = 0;
// let timer = null;
// let timeBreak = null;
// let current = null;

// // SELECION DE BTN
// const addTask = document.getElementById('addTask');
// const task = document.getElementById('task');
// const form = document.getElementById('formulario__list');
// const taskContent = document.getElementById('taskContent');


// const btnInicio = document.querySelectorAll('.contenedor__tareas-box .btn__start .btn');




// const taskName = document.getElementById('taskName');



// form.addEventListener('submit', (event) => {
//     event.preventDefault();
//     if (task.value != "") {
//         crearTarea(task.value);
//         task.value = "";
//         renderTask();
//     }
// });

// function crearTarea(valor) {

//     const newTask = {
//         id: (Math.random() * 100).toString(36).slice(3),
//         titulo: valor,
//         completado: false
//     }

//     tareas.unshift(newTask);
// }

// function renderTask() {
//     const html = tareas.map(item => {
//         return `
//                     <div class="contenedor__tareas-box">
                        
//                         <div class="contenedor__tareas-titulo">
//                             <h2 class="nombre__tarea">${item.titulo}</h2>
//                         </div>

//                         <div class="contenedor__btn">
//                             <button class="btn__start btn" data-id="${item.id}">Comezar</button>
//                             <button class="btn">Eliminar</button>
//                         </div>
//                     </div>
//         `;
//     });

//     taskContent.innerHTML = html.join('');

// }



// btnInicio.forEach(function (btn) {
//     btn.addEventListener('click', (e) => {
//         if (!timer) {
//             const id = btnInicio.getAttribute('data-id');
//             inicializarTarea(id);
//             btnInicio.textContent = `<button class="btn__start btn" data-id="${item.id}">Pausar</button>`
//         }
//     })
// });


// function inicializarTarea(id) {
//     time = 25 * 60
//     current = id;
//     const taskShow = tareas.findIndex(task => task.id === id);
//     taskName.textContent = tareas[taskShow].titulo;

//     timer = setInterval(() => {
//         tiempoIniciado(id);
//     }, 1000);
// }

// function tiempoIniciado(id) {
//     time--;
//     renderTime();

//     if (time === 0) {
//         clearInterval(timer);
//         current = null;
//         taskName.textContent = '';
//         renderTime();
//     }
// }

// function renderTime() {
//     const timeDiv = document.getElementById('tiempoTask');
//     const minutos = parseInt(time / 60);
//     const segundos = parseInt(time % 60);
//     timeDiv.textContent = `${minutos < 10 ? '0' : ''}${minutos}:${segundos < 10 ? '0' : ''}${segundos}`;
// }


// CODIGO TUBE
const form = document.getElementById('formulario__list');
const addTask = document.getElementById('task');
const btnAddtask = document.getElementById('addTask');
const taskContent = document.getElementById('taskContent');