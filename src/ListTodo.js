import { useSelector } from "react-redux";
import Content from "./Content";


function ListTodo(){
 const todos =  useSelector((state)=>state.todos);
 console.log(todos);
   return (

   <ul className="list-group mt-4">
    {todos.map(
      (todo) => (
         <Content key={todo.id} id={todo.id} title={todo.title}/>
      ))}   
    </ul>  
 );
 
}

export default ListTodo;

