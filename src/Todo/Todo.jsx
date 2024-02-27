import React, { useState } from 'react';
import TodoList from './TodoList';

const Todo = () => {


    const [task, setTask] = useState("");

    const[todos,setTodos] =useState([]);

    const changeHandler = e => {
        setTask(e.target.value)
    }

    const submitHandler = e =>{
        e.preventDefault();
       const newTodos = [...todos,task];
     setTodos(newTodos);
     setTask("");

    }


    const deleteHandler = (indexValue) =>{
            const newTodos = todos.filter((todo,index)=>index!==indexValue);
            setTodos(newTodos);
    }
    return (
        <div>
            <center>

                <div className='card'>
                    <div className='card-body'>
                        <h5 className='card-title'>Todo Mangagement Application</h5>
                    </div>
                    <form onSubmit={submitHandler}>
                        <input type='text' name="task" value={task} onChange={changeHandler} ></input>&nbsp;
                        <input type='submit' value='Add' name='Add'></input>
                    </form>

                    <TodoList todolist={todos} deleteHandler={deleteHandler}></TodoList>
                </div>
            </center>
        </div>
    );
}

export default Todo;


//form lo enter chesi edina oka variable lo store chesukovali dani kosam manam usestate use chestam