import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Todo from './Components/Todo'

const App = () => {
  return (
    <>



     <Routes>
      <Route index  element={<Todo/>}/>
      </Routes> 
    </>
  )
}

export default App
