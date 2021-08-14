import React from 'react'

export default function TodoCard({ text, index, removeTodo }) {
    return (
        <div className="todo-element">
            <span>{text}</span>
            <button className="remove-btn" onClick={ () => removeTodo(text) }>X</button>
        </div>
    )
}
