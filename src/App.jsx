import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-200 flex items-center justify-center p-6">

      <div className="w-full max-w-2xl bg-white/90 backdrop-blur-md shadow-2xl rounded-2xl p-8">

        <h1 className="text-5xl font-extrabold text-center text-gray-800 mb-2">
          TaskFlow App
        </h1>

        <p className="text-center text-gray-500 mb-8">
          Manage your daily tasks easily ✅
        </p>

        {/* Add Todo Section */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition duration-300">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">
            Add TaskFlow
          </h2>

          <AddTodo />
        </div>

        {/* Todo List Section */}
        <div className="mt-8 bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition duration-300">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">
            Your TaskFlow
          </h2>

          <Todos />
        </div>

      </div>

    </div>
  )
}

export default App