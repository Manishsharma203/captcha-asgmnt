import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Dash from "../pages/Dash";
import Login from "../pages/Login";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path={"/"} element={<Login />}></Route>
      <Route path={"/dash"} element={<Dash />}></Route>
    </>
  )
);
