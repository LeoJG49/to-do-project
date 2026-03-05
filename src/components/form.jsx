import React from 'react'
import '../stylesheets/form.css'

export default function Form(props) {
    return (
        <div className="form-container">
            <input placeholder='Something in mind?' 
                className='input-section'
                type='text'
                name='text'    
            />
            <button className='add-button'>
                New TODO 
            </button>
        </div>
    )
}
