import { Routes, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Homepage from "./Pages/Home/Homepage";
import layout from "./Layout/layout";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route
        path="/login"
        element={
          <layout showHero>
            <Login />
          </layout>
        }
      ></Route>
    </Routes>
  );
};

export default AppRoutes;
