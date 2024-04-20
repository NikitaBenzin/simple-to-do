import React, { useState } from 'react'
import CreateTodo from './create-todo/CreateTodo'
import TodoItem from './item/TodoItem'

const data = [
  {
    _id: 'ads234',
    title: 'Finish the assay',
    isCompleted: false,
  },
  {
    _id: 'rty856',
    title: 'Do the homework',
    isCompleted: false,
  },
  {
    _id: 'jkh282',
    title: 'Read english book',
    isCompleted: false,
  }
]


const Home = () => {
  const [todos, setTodos] = useState(data)

  const changeTodo = id => {
    const copy = [...todos]
    const current = copy.find(t => t._id === id)
    current.isCompleted = !current.isCompleted
    setTodos(copy)
  }

  const removeTodo = id => setTodos([...todos].filter(t => t._id !== id))

  return (
    <div className=' text-white w-4/5 mx-auto'>
      <h1 className='text-2xl font-bold text-center mb-10'>Todo tasks</h1>
      <CreateTodo setTodos={setTodos} />
      {todos.map(todo =>
        <TodoItem key={todo._id} todo={todo} changeTodo={changeTodo} removeTodo={removeTodo} />
      )}
    </div>
  )
}

export default Home