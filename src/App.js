import { Routes, Route, } from "react-router-dom";
import './App.css';
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Current from "./Pages/Current";
import Landing from "./Pages/Landing";
import Past from "./Pages/Past";


function App() {
    
  return (
    <div className="App">
    <Routes>
        <Route exact path='/' element={<Landing/>}/>
        <Route path="About" element={<About/>}/>
        <Route path="Contact" element={<Contact/>}/>
        <Route path="Current" element={<Current/>}/>
        <Route path="Past" element={<Past/>}/>
      </Routes>
    </div>
  );
}

export default App;
