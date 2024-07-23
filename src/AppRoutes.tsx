import { Routes, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Homepage from "./Pages/Home/Homepage";
import Layout from "./Layout/layout";
import Signup from "./Pages/Signup/Signup";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route
        path="/login"
        element={
          <Layout>
            <Login />
          </Layout>
        }
      ></Route>
      <Route
        path="/signup"
        element={
          <Layout>
            <Signup />
          </Layout>
        }
      ></Route>
    </Routes>
  );
};

export default AppRoutes;
