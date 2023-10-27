import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SeccionContenido from "./components/SeccionContenido/SeccionContenido";
import Login from "./components/login/Login";
import Register from "./components/register/Register";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SeccionContenido></SeccionContenido>}></Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
