import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";

import PrivateRoute from "./ProtectedRoute";
import Profile from "./pages/Profile";

function App() {
  return (
    <div className="max-w-[1400px] mx-auto ">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/" element={<Profile />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
