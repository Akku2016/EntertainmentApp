import './app.scss'
import Featured from './components/featured/Featured';
import List from './components/list/List';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Watch from './pages/watch/Watch';
 import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
 
  return (
    <>
     <Router>
      <Routes>
         <Route exact path='/'  element={<Home/>}></Route>
         <Route path="/register" element={ <Register />} ></Route>
          <Route path="/login" element={<Login />} ></Route>
          <Route path="/watch" element={ <Watch /> } ></Route>
          <Route path="/list" element={ <List /> } ></Route>
          <Route path="/featured" element={ <Featured /> } ></Route>
         
         
      </Routes>
     </Router>
     </>
 
 
   
  );
}

export default App;
