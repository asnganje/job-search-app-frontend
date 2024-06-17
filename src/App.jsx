import { createBrowserRouter, RouterProvider } from "react-router-dom"
function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <h2>Home</h2>
    },
    {
      path: '/about',
      element: <h2>About</h2>
    }
  ])
  return (
    <RouterProvider router={router}/>
)
}

export default App
