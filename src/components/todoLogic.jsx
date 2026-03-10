import React, { useState } from 'react'
import TextList from './textList';
import Form from './form';

export default function TodoContainer() {
    
    const [tasks, setTodo] = useState([]);

    const addTodo = todo => {
        if (todo.text.trim()) { //This declare if the input is not empty
            const newTodo = {
                ...todo,
                text: todo.text.trim()
            };
            const updatedTodo = [newTodo, ...tasks]
            setTodo(updatedTodo);
        }
    }

    const completeTodo = id => {
        const updatedTasks = tasks.map(todo => 
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        );
        setTodo(updatedTasks);
    }

    const deleteTodo = id => {
        const updatedTasks = tasks.filter(todo => todo.id !== id);
        setTodo(updatedTasks);
    }
    
    return (
        //If we don't want new <div></div> we can use <></> instead. This is called Fragment
        <>
            <Form 
                onSubmit={addTodo}
            />
            <div className='text-todo-container'>
                {
                    tasks.map((todo) => 
                        <TextList
                            key={todo.id}
                            id={todo.id}
                            text={todo.text}
                            completed={todo.completed}
                            completeTodo={completeTodo}
                            deleteTodo={deleteTodo}
                        />
                    )
                }
            </div>
        </>
    )
}