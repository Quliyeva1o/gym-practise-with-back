import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import { root } from './rooter/rooter'
import { useState } from 'react'
import { getAll } from './API/requests'
import { useEffect } from 'react'
import CoursesContext from './contexts/cardsContext'

function App() {

  const [courses, setCourses] = useState([])

  const routes = createBrowserRouter(root)
  useEffect(() => {
    getAll().then((res) => {
      setCourses(res.res.data.data);
    })
  }, [])
  return (
    <>
      <CoursesContext.Provider value={{courses, setCourses}}>
        <RouterProvider router={routes} />
      </CoursesContext.Provider>
    </>
  )
}

export default App
