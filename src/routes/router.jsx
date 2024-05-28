import {createBrowserRouter} from "react-router-dom";
import MainPage from "../pages/MainPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage></MainPage>,
  },
  {
    path: "/expenses/:id",
    element: <></>,
  },
]);

export default router;
