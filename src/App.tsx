
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import HomePage from "./pages/HomePage/HomePage"
import DashboardPage from "./pages/DashboardlPage/Dashboard"
import AllModelsPage from "./pages/AllModelsPage/AllModelsPage"
import ModelPage from "./pages/ModelPage/ModelPage"

const App = () => {


    const router = createBrowserRouter([

      {
        path: "/",
        element: <HomePage/>
      },
      {
        path: "/dashboard",
        element: <DashboardPage/>
      },
      {
        path: "/models",
        element: <AllModelsPage/>
      },
      {
        path: "/models/:id",
        element: <ModelPage/>
      }
    ])

    return (
      <RouterProvider router={router} />
    )
}

export default App