import logo from './logo.svg';
import './App.css';
import {Routes, Route, BrowserRouter} from "react-router-dom";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import Project from './pages/Project';
import Aboutme from './pages/Aboutme';

function App() {
  return (
    // <div className="App">
    //   Welcome!
    // </div>
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/jignasu" element={<Home/>}/>
        <Route path="/jignasu/resume" element={<Resume/>}/>
        <Route path="/jignasu/project" element={<Project/>}/>
        <Route path="/jignasu/aboutme" element={<Aboutme/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
