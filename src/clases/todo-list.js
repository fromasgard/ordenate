import {todo} from './class'
export class TodoList{
    constructor()
    {
      
        this.cargarLs();
    }
    nuevoTodo(todo){
        this.todos.push(todo)
        this.guardarLs();
    }
    eliminarTodo(id){
       
        this.todos=this.todos.filter(todo =>todo.id !=id);
        this.guardarLs();
    }
    marcarCompletado(id){
        // por cada tarea del this. arreglo(todos) haz esto
        for(const todo of this.todos){
            if(todo.id==id){
                todo.completado=!todo.completado;
                break;
            }
        }
    }
    eliminarCompletados(){
        this.todos=this.todos.filter(todo => !todo.completado);
        this.guardarLs();
    }
    guardarLs(){
        localStorage.setItem('todo',JSON.stringify(this.todos));

    }
    cargarLs(){
        /*
        if(localStorage.getItem('todo')){
            this.todos=JSON.parse(localStorage.getItem('todo'))
        }else{
            this.todos=[];
        }
        */
        this.todos = (localStorage.getItem('todo')) 
                    ? this.todos=JSON.parse(localStorage.getItem('todo'))
                    : this.todos=[];
                    ;
      this.todos=this.todos.map(todo.fromJson)
    }

}