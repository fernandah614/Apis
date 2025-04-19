import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Dogs from "./pages/dogs/Dogs";
import Cats from "./pages/cats/Cats";
import Ghibli from "./pages/ghibli/Ghibli";

import './App.css'

function App() {

  return (
    <div>
      <Router>
        <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/Dogs' element={<Dogs></Dogs>}></Route>
        <Route path='/Cats' element={<Cats></Cats>}></Route>
        <Route path='/Ghibli' element={<Ghibli></Ghibli>}></Route>
        </Routes>
      </Router>
    </div>
      
    
  )
};

export default App
