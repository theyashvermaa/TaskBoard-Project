import { useState, useEffect } from 'react'
import Navbar from './component/Navbar'
import { FaEdit } from 'react-icons/fa'
import { AiFillDelete } from 'react-icons/ai'
import { v4 as uuidv4 } from 'uuid'
import logo from './assets/TaskBoard-Logo.png'

function App() {
  const [currentTab, setCurrentTab] = useState('home')
  const [todo, setTodo] = useState('')
  const [todos, setTodos] = useState([])
  const [showFinished, setshowFinished] = useState(true)

  useEffect(() => {
    let todoString = localStorage.getItem('todos')
    if (todoString) {
      try {
        let todos = JSON.parse(localStorage.getItem('todos'))
        setTodos(todos)
      } catch (e) {
        console.error('Failed to parse todos', e)
      }
    }
  }, [])

  const saveToLS = (newTodos) => {
    localStorage.setItem('todos', JSON.stringify(newTodos || todos))
  }

  const toggleFinished = () => {
    setshowFinished(!showFinished)
  }

  const handleEdit = (e, id) => {
    let t = todos.filter((i) => i.id === id)
    if (t.length > 0) {
      setTodo(t[0].todo)
      let newTodos = todos.filter((item) => item.id !== id)
      setTodos(newTodos)
      saveToLS(newTodos)
      setCurrentTab('home')
    }
  }

  const handleDelete = (e, id) => {
    let newTodos = todos.filter((item) => item.id !== id)
    setTodos(newTodos)
    saveToLS(newTodos)
  }

  const handleAdd = () => {
    if (!todo.trim()) return
    let newTodos = [...todos, { id: uuidv4(), todo: todo.trim(), isCompleted: false }]
    setTodos(newTodos)
    setTodo('')
    saveToLS(newTodos)
  }

  const handleChange = (e) => {
    setTodo(e.target.value)
  }

  const handleCheckbox = (e) => {
    let id = e.target.name
    let index = todos.findIndex((item) => item.id === id)
    if (index !== -1) {
      let newTodos = [...todos]
      newTodos[index].isCompleted = !newTodos[index].isCompleted
      setTodos(newTodos)
      saveToLS(newTodos)
    }
  }

  return (
    <div className="min-h-screen bg-[#FAF7F2] flex flex-col text-slate-800">
      <Navbar currentTab={currentTab} setCurrentTab={setCurrentTab} />

      <div
        className="mx-auto my-6 rounded-2xl p-5 sm:p-7 bg-[#F5EFE6] min-h-[80vh] w-[92%] sm:w-[85%] md:w-[65%] lg:w-[45%] max-w-2xl shadow-md border border-[#E4DACB] bg-no-repeat bg-center bg-contain"
        style={{
          backgroundImage: `linear-gradient(rgba(245, 239, 230, 0.88), rgba(245, 239, 230, 0.88)), url(${logo})`
        }}
      >

        {currentTab === 'home' ? (
          <>
            <h1 className="font-bold text-center text-2xl sm:text-3xl text-blue-950 mb-2">
              TaskBoard - Manage Your Tasks At One Place
            </h1>

            <div className="addTodo my-5 flex flex-col gap-3">
              <h2 className="text-xl font-bold text-blue-900">Add a Task</h2>
              <div className="flex gap-2 items-center">
                <input
                  onChange={handleChange}
                  onKeyDown={(e) => e.key === 'Enter' && todo.length > 3 && handleAdd()}
                  value={todo}
                  type="text"
                  placeholder="What do you need to do?"
                  className="flex-1 rounded-full px-4 py-2 text-sm sm:text-base border border-blue-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 shadow-xs"
                />
                <button
                  onClick={handleAdd}
                  disabled={todo.length <= 3}
                  className="bg-blue-600 hover:bg-blue-800 disabled:bg-blue-300 px-5 py-2 text-sm font-bold text-white rounded-full transition-all shrink-0 cursor-pointer disabled:cursor-not-allowed shadow-xs"
                >
                  Save
                </button>
              </div>
            </div>

            <div className="flex items-center my-3">
              <input
                className="w-4 h-4 cursor-pointer accent-blue-600"
                id="show"
                onChange={toggleFinished}
                type="checkbox"
                checked={showFinished}
              />
              <label className="mx-2 text-sm font-medium text-slate-700 cursor-pointer select-none" htmlFor="show">
                Show Finished Tasks
              </label>
            </div>

            <div className="bg-[#DFD5C4] h-[px] w-full mx-auto my-4"></div>

            <h2 className="text-xl font-bold text-blue-900 mb-3">Your Tasks</h2>

            <div className="todos space-y-2">
              {todos.length === 0 && (
                <div className="m-5 text-slate-500 text-center font-medium">No Tasks To Display!</div>
              )}

              {todos.map((item) => {
                return (
                  (showFinished || !item.isCompleted) && (
                    <div
                      key={item.id}
                      className="todo flex items-center justify-between p-3 bg-white rounded-lg border border-[#E9E1D4] shadow-xs gap-3"
                    >
                      <div className="flex items-center gap-3 flex-1 min-w-0">
                        <input
                          name={item.id}
                          onChange={handleCheckbox}
                          type="checkbox"
                          checked={item.isCompleted}
                          className="w-4 h-4 cursor-pointer shrink-0 accent-blue-600"
                        />
                        <div
                          className={`wrap-break-words text-slate-800 text-sm sm:text-base flex-1 min-w-0 ${item.isCompleted ? 'line-through text-slate-400' : ''
                            }`}
                        >
                          {item.todo}
                        </div>
                      </div>

                      <div className="buttons flex items-center shrink-0">
                        <button
                          onClick={(e) => handleEdit(e, item.id)}
                          className="bg-blue-600 hover:bg-blue-800 p-2 text-xs sm:text-sm font-bold text-white rounded-md mx-1 transition-all flex items-center justify-center cursor-pointer"
                          title="Edit task"
                        >
                          <FaEdit />
                        </button>
                        <button
                          onClick={(e) => handleDelete(e, item.id)}
                          className="bg-blue-600 hover:bg-blue-800 p-2 text-xs sm:text-sm font-bold text-white rounded-md mx-1 transition-all flex items-center justify-center cursor-pointer"
                          title="Delete task"
                        >
                          <AiFillDelete />
                        </button>
                      </div>
                    </div>
                  )
                )
              })}
            </div>
          </>
        ) : (
          <>
            <h1 className="font-bold text-center text-2xl sm:text-3xl text-blue-950 mb-6">
              Your Tasks
            </h1>

            <div className="todos space-y-2">
              {todos.length === 0 && (
                <div className="m-5 text-slate-500 text-center font-medium">No Tasks To Display!</div>
              )}

              {todos.map((item) => (
                <div
                  key={item.id}
                  className="todo flex items-center justify-between p-3 bg-white rounded-lg border border-[#E9E1D4] shadow-xs gap-3"
                >
                  <div className="flex items-center gap-3 flex-1 min-w-0">
                    <input
                      name={item.id}
                      onChange={handleCheckbox}
                      type="checkbox"
                      checked={item.isCompleted}
                      className="w-4 h-4 cursor-pointer shrink-0 accent-blue-600"
                    />
                    <div
                      className={`wrap-break-words text-slate-800 text-sm sm:text-base flex-1 min-w-0 ${item.isCompleted ? 'line-through text-slate-400' : ''
                        }`}
                    >
                      {item.todo}
                    </div>
                  </div>

                  <div className="buttons flex items-center shrink-0">
                    <button
                      onClick={(e) => handleEdit(e, item.id)}
                      className="bg-blue-600 hover:bg-blue-800 p-2 text-xs sm:text-sm font-bold text-white rounded-md mx-1 transition-all flex items-center justify-center cursor-pointer"
                      title="Edit task"
                    >
                      <FaEdit />
                    </button>
                    <button
                      onClick={(e) => handleDelete(e, item.id)}
                      className="bg-blue-600 hover:bg-blue-800 p-2 text-xs sm:text-sm font-bold text-white rounded-md mx-1 transition-all flex items-center justify-center cursor-pointer"
                      title="Delete task"
                    >
                      <AiFillDelete />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default App