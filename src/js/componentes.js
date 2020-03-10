import { todo } from "../clases";
import {todoList} from "../index.js"
const divTodolist=document.querySelector('.todo-list');
const input      =document.querySelector('.new-todo');
const btnBorrar  =document.querySelector('.clear-completed');
const ulFiltro   =document.querySelector('.filters');
export const crearTodoHtml = (todo) =>{
    const htmltodo=`
    <li class="${   (todo.completado) ? 'completed' : ''}" data-id="${todo.id}">
		<div class="view">
		<input class="toggle" type="checkbox" ${   (todo.completado) ? 'checked' : ''}>
		<label>${todo.tarea}</label>
		<button class="destroy"></button>
         </div>
		<input class="edit" value="Create a TodoMVC template">
		</li> 
    `;
    const div =document.createElement('div');
    div.innerHTML=htmltodo;
    divTodolist.append(div.firstElementChild);
    return div.firstElementChild;
}
input.addEventListener('keyup',(event)=>{
    if(event.keyCode===13 &&input.value.length > 0){
        const nuevaTarea=new todo(input.value);
        todoList.nuevoTodo(nuevaTarea);
        console.log(todoList);
        crearTodoHtml(nuevaTarea);
        input.value='';
    }
     }); 
divTodolist.addEventListener('click',(event) =>{

    const nombreElemento=event.target.localName; // input label button
     console.log(nombreElemento);

    const todoElemento  =event.target.parentElement.parentElement;
    console.log(todoElemento);

    const todoId        =todoElemento.getAttribute('data-id');
    console.log(todoId)

    if(nombreElemento.includes('input')){

        todoList.marcarCompletado(todoId);  
        todoElemento.classList.toggle('completed');

    }else if(nombreElemento.includes('button')){
    
        todoList.eliminarTodo(todoId);
        divTodolist.removeChild( todoElemento );
    
    }
    console.log(todoList);    
})


btnBorrar.addEventListener('click',()=>{
    todoList.eliminarCompletados();
    for(let i = divTodolist.children.length-1; i>=0; i--){
        const elemento=divTodolist.children[i];
        console.log(elemento)
        if(elemento.classList.contains('completed')){
            divTodolist.removeChild(elemento);
        }
    }
    
})

ulFiltro.addEventListener('click',(event) => {
const filtro=event.target.text;
if(!filtro){return;}
for(const elemento of divTodolist.children){
    elemento.classList.remove('hidden');
    const completado=elemento.classList.contains('completed');
    switch(filtro){
        case 'Pendientes':
        if(completado){
            elemento.classList.add('hidden');
        }
        break;
        case 'Completados':
        if(!completado){
            elemento.classList.add('hidden');
        }
        break;
    }
}
});