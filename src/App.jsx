import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RecipeList from './pages/recipe'
import { Route, Routes, useNavigate } from 'react-router-dom'
import CommentList from './pages/comments'

function App() {

  const navigate = useNavigate()

  return (
    <div>
      <h1>React routing, Custom hooks and more</h1>
      <button onClick={() => navigate("/recipe-list")} style={{
        background: "black",
        color: "white"
      }}>Navigate to Recipe list page</button>

      <button onClick={() => navigate("/comment-list")} style={{
        background: "black",
        color: "white"
      }}>Navigate to Comment list page</button>
      <Routes>
        <Route path="/recipe-list" element={<RecipeList />} />

        <Route path='/comment-list' element={<CommentList />} />
      </Routes>
    </div>
  )
}

export default App
