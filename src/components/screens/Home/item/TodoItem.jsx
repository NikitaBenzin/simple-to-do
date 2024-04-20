import cn from 'classnames'
import React from 'react'
import { FiTrash } from "react-icons/fi"
import Check from './Check'

const TodoItem = ({ todo, changeTodo, removeTodo }) => {
  return (
    <div className='bg-zinc-800 flex items-center justify-between mb-4 rounded-2xl p-5 w-full'>

      <button className='flex gap-3 items-center' onClick={() => changeTodo(todo._id)}>
        <Check isCompleted={todo.isCompleted} />
        <span className={cn({
          'line-through': todo.isCompleted,
        })}>{todo.title}</span>
      </button>

      <button onClick={() => removeTodo(todo._id)}>
        <FiTrash className='text-gray-600 hover:text-red-500' />
      </button>
    </div>
  )
}

export default TodoItem