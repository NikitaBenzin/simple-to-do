import cn from 'classnames'
import React from 'react'
import { BsCheck } from "react-icons/bs"

const Check = ({ isCompleted }) => {
  return (
    <div className={cn(
      'border-2 rounded-lg border-pink-400 w-5 h-5 flex items-center',
      {
        'bg-pink-400': isCompleted,
      })
    }>
      <BsCheck size={24} className='text-zinc-800' />
    </div>
  )
}

export default Check