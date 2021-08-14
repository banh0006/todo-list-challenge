import React, { useState } from 'react'

export default function AddTodoForm({ addNewTodo }) {
    const [name, setName] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        if (!name) return
        addNewTodo(name)
        setName('')
    }

    return (
        <form className="d-flex align-items-center justify-content-center" onSubmit={handleSubmit}>
            <input 
                type="text" 
                className="todo-name py-0.5" 
                placeholder="Add your todo..." value={name} 
                onChange={ e => setName(e.target.value)} 
            />
            <button type="submit" className="btn btn-primary mx-2 px-3 py-1">Add</button>
        </form>
    )
}
