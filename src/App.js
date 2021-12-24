import './App.css';
import Register from "./Components/Register";
import Login from "./Components/Login";
import Home from "./Components/Home";
import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
          <Register/>
        <Routes>
              <Route path={"/"} element={<Login/>}/>
              <Route path={"/home"}  element={<Home/>}/>
          </Routes>
    </div>
  );
}

export default App;
