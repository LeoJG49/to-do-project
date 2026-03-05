import React from 'react'
import { TiDelete } from "react-icons/ti";
import '../stylesheets/text-list.css'

export default function TextList({ text, completed }) {
    return (
        <div className={completed ? "text-container completed" : "text-container"}>
            <div className="list-text">
                {text}
            </div>
            <div className="delete-icon">
                <TiDelete size={25}/>
            </div>
        </div>
    )
}
