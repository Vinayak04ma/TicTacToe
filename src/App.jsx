import { useState } from 'react'
import './App.css'
import Addtodo from './components/Addtodo'
import Todos from './components/Todos'
import TicTacToe from './ticToecomponents/ticTocToe/TicTacToe'

function App() {


  return (
    <>
      {/* <div className="text-bold text-black-100">Todos</div>
      <Addtodo/>
      <Todos/> */}
    <TicTacToe/>
    </>
  )
}

export default App
