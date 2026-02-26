import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {addTodo} from '../features/todo/todoSlice' 

function AddTodo() {

    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    const addTodoHandler = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
    }

  return (
    <form
  onSubmit={addTodoHandler}
  className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
>
  <input
    type="text"
    className="w-full sm:w-80 bg-gray-800 rounded-lg border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-2 px-4 transition duration-200 ease-in-out shadow-md"
    placeholder="Enter a Todo..."
    value={input}
    onChange={(e) => setInput(e.target.value)}
  />

  <button
    type="submit"
    className="w-full sm:w-auto text-white bg-indigo-500 py-2 px-6 rounded-lg text-lg font-semibold transition-all duration-200 hover:bg-indigo-600 hover:shadow-lg active:scale-95"
  >
    Add Todo
  </button>
</form>

  )
}

export default AddTodo
