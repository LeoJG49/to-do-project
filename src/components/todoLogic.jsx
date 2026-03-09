import React, { useState } from 'react'
import TextList from './textList';
import Form from './form';

export default function TodoContainer() {
    
    const [tasks, setTodo] = useState([]);

    const addTodo = todo => {
        if (todo.text.trim()) { //This declare if the input is not empty
            todo.text = todo.text.trim();
            const updatedTodo = [todo, ...tasks]
            setTodo(updatedTodo);
        }
    }
    
    return (
        //If we don't want new <div></div> we can use <></> instead. This is called Fragment
        <>
            <Form 
                onSubmit={addTodo}
            />
            {
                tasks.map((todo) => 
                    <TextList
                        key={todo.id}
                        id={todo.id}
                        text={todo.text}
                        completed={todo.completed}
                    />
                )
            }
        </>
    )
}