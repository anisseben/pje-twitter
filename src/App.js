import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
//import Navbar from "./Components/Navbar"
import Home from "./Components/Home"

import axios from 'axios';
axios.defaults.baseURL = "http://127.0.0.1:5000/";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home/>} />
          </Routes>
      </BrowserRouter>  
    </div>
  );
}

export default App;
