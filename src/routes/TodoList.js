import React, { useState, useEffect } from 'react'
import AddTodoForm from '../components/AddTodoForm'
import TodoCard from '../components/TodoCard'

function Todo() {
  const [todos, setTodo] = useState([])
  const [todoElements, setTodoElements] = useState([])

  const addTodo = name => {
    const newTodos = [...todos, name]
    setTodo(newTodos)
  }

  const removeTodo = index => {
    const newTodos = [...todos]
    newTodos.splice(index, 1)
    setTodo(newTodos)
  }

  useEffect(() => {
    if (todos.length < 0) return 
    const newTodoList = todos.map((todo, index) => (
      <TodoCard 
        key={index}
        text={todo}
        index={index}
        removeTodo={removeTodo}
      />
    )) 
    setTodoElements(newTodoList)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (todos.length < 0) return

    const newTodoList = todos.map((todo, index) =>(
      <TodoCard 
        key={index}
        text={todo}
        index={index}
        removeTodo={removeTodo}
      />
    )) 
    setTodoElements(newTodoList)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [todos])

  return (
    <div className="container container-fluid">
      <h1 className="text-uppercase m-4">What is your plan look like?</h1>
      <AddTodoForm addNewTodo={addTodo} />
      <div className="todo-element-list row d-flex my-4">
          { todoElements }
      </div>
    </div>
  )
}

export default Todo
