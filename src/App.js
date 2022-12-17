import logo from './logo.svg';
import './App.css';
import {Routes, Route, BrowserRouter} from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    // <div className="App">
    //   Welcome!
    // </div>
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/test" element={<Home/>}/>
    </Routes>
    </BrowserRouter>
    <div>
      Hello!
    </div>
    </>
  );
}

export default App;
