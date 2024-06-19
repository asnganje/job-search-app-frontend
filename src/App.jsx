import { createBrowserRouter, RouterProvider } from "react-router-dom"
import {
        HomeLayout,
        Landing,
        Login,
        Register,
        DashboardLayout,
        Error,
        AddJob,
        AllJobs,
        Profile,
        Stats,
        Admin
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
          element: <DashboardLayout />,
          children: [
            {
              index: true,
              element: <AddJob />
            },
            {
              path: 'stats',
              element: <Stats />
            },
            {
              path: 'all-jobs',
              element: <AllJobs />
            },
            {
              path: 'profile',
              element: <Profile />
            },
            {
              path: 'admin',
              element: <Admin />
            },
          ]
        }
      ]
    },
  ])
  return (
    <RouterProvider router={router}/>
)
}

export default App
