import React, { useState } from 'react'
import '../stylesheets/form.css'
import { v4 as uuidv4 } from 'uuid'

export default function Form(props) {

    const [input, setInput] = useState("");

    const handleChange = e => {
        setInput(e.target.value);
        //We obtain the value of the input
    }

    const handleSent = e => {
        e.preventDefault()
        //This prevent the app to reload all the time when it changes
        const newTodo = {
            id: uuidv4(),
            //We need a package to generate ID on its own
            text: input,
            completed: false,
        }
        props.onSubmit(newTodo)
        //This is a standard if the form is sent
    }

    return (
        <form 
            className="form-container"    
        >
            <input placeholder='Something in mind?' 
                className='input-section'
                type='text'
                name='text'
                onChange={handleChange}
                />
            <button 
                className='add-button'
                onSubmit={handleSent}
            >
                New TODO 
            </button>
        </form>
    )
}
