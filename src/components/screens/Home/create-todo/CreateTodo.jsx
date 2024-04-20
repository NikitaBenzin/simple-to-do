import React, { useState } from 'react'
import { FaPlus } from "react-icons/fa"

const CreateTodo = ({ setTodos }) => {
  const [title, setTitle] = useState('')

  const addTodo = title => {
    setTodos(prev => [{
      _id: new Date(),
      title,
      isCompleted: false,
    },
    ...prev
    ])
    setTitle('')
  }

  return (
    <div className='border-zinc-800 border-2 flex items-center gap-3 mb-12 rounded-2xl px-5 py-3 w-full'>
      <button
        className='border-2 rounded-lg border-pink-400 bg-pink-400 w-5 h-5 flex items-center p-0.5'
        onClick={() => {
          addTodo(title)
        }}
      >
        <FaPlus className='text-zinc-100' />
      </button>
      <input
        className='bg-transparent outline-none w-full border-none'
        type="text"
        placeholder='Add a task...'
        onChange={e => setTitle(e.target.value)}
        value={title}
        onKeyPress={e => e.key === 'Enter' && addTodo(title)}
      />
    </div>
  )
}

export default CreateTodo