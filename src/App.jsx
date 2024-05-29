import routes from "./Routes";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter(routes);

function App() {
  

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
