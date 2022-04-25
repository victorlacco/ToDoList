import React from 'react'

export default function ToDo({ todo,  clickToDo}) {
    function handleClick(){
        clickToDo(todo.id)
    }
    return (
        <div>
            <label>
                <input type='checkbox' checked={todo.completed} onChange={handleClick}/>
                {todo.name}
            </label>
        </div>
    )
}
