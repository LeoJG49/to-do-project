import { TiDelete } from "react-icons/ti";
import '../stylesheets/text-list.css'

export default function TextList({ id, text, completed, completeTodo, deleteTodo }) {
    return (
        <div className={completed ? "text-container completed" : "text-container"}>
            <div 
                className="list-text"
                onClick={() => completeTodo(id)}
                //This is making a anonymous function which is assign with an ID to know what task is completed or not
            >
                {text}
            </div>
            <div 
                className="delete-icon"
                onClick={() => deleteTodo(id)}
                //This makes the same as completeTodo, but instead of complete it, it deletes the task
            >
                <TiDelete size={25}/>
            </div>
        </div>
    )
}
