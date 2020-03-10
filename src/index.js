import './styles.css';
import {todo,TodoList} from './clases';
import { crearTodoHtml } from './js/componentes';
//import { todo } from './clases/class.js';
//import { TodoList } from './clases/todo-list';




export const todoList = new TodoList();

todoList.todos.forEach( crearTodoHtml );

console.log( 'todos', todoList.todos );