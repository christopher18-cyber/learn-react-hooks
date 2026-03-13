import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RecipeList from './pages/recipe/index.jsx'
import { Link, Route, Routes, useNavigate, useRoutes } from 'react-router-dom'
import CommentList from './pages/comments/index.jsx'
import RecipeDetailsPage from './pages/recipe-details/index.jsx'
import NotFoundPage from './pages/not-found/index.jsx'
import Layout from './components/layout/index.jsx'
import ReactHookFormExamplePage from './pages/react-hook-form-example/index.jsx'
import Hooks from './pages/hooks/index.jsx'
import UseMemoExample from './pages/hooks/use-memo.jsx'
import Counter from './pages/use-callback/counter.jsx'
import UseCallBackExample from './pages/use-callback/index.jsx'
import ReactQueryDemo from './components/react-demo/index.jsx'

function CustomRoutes() {
  const element = useRoutes([
    {
      path: "/home",
      element: <Layout />,
      children: [
        {
          path: "recipe-list",
          element: <RecipeList />
        },
        {
          path: "comment-list",
          element: <CommentList />
        },
        {
          path: "recipe-list/:id",
          element: <RecipeDetailsPage />
        }
      ]
    },
    {
      path: "*",
      element: <NotFoundPage />
    },
    {
      path: "/react-hook-form",
      element: <ReactHookFormExamplePage />
    },
    {
      path: "/hooks",
      element: <Hooks />
    },
    {
      path: "/memo",
      element: <UseMemoExample />
    },
    {
      path: "/counter",
      element: <UseCallBackExample />
    },
    {
      path: "/react-query-demo",
      element: <ReactQueryDemo />
    }
  ])

  return element
}

function App() {

  const navigate = useNavigate()

  return (
    <div>
      {/* <h1>React routing, Custom hooks and more</h1>
      <div>
        <Link to={"/recipe-list"}>
          Alternative to the use naviagte
        </Link>
      </div>
      <button onClick={() => navigate("/home/recipe-list")} style={{
        background: "black",
        color: "white"
      }}>Navigate to Recipe list page</button>

      <button onClick={() => navigate("/home/comment-list")} style={{
        background: "black",
        color: "white"
      }}>Navigate to Comment list page</button> */}
      {/* <Routes>
        <Route path='/home' element={<Layout />}>
          <Route path="recipe-list" element={<RecipeList />} />
          <Route path='recipe-list/:id' element={<RecipeDetailsPage />} />
          <Route path='comment-list' element={<CommentList />} />
        </Route>
        <Route path='*' element={<NotFoundPage />} />
      </Routes> */}
      <CustomRoutes />
    </div>
  )
}

export default App
