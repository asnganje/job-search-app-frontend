import { createBrowserRouter, RouterProvider } from "react-router-dom"
import {
        HomeLayout,
        Landing,
        Login,
        Register,
        DashboardLayout,
        Error
} from './pages'

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomeLayout />,
      errorElement: <Error />,
      children:[
        {
          element: <Landing />,
          index: true,
        },
        {
          path: 'login',
          element: <Login />
        },
        {
          path: 'register',
          element: <Register />
        },
        {
          path: 'dashboard',
          element: <DashboardLayout />
        }
      ]
    },
  ])
  return (
    <RouterProvider router={router}/>
)
}

export default App
