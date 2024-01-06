import App from './App';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Pages/Home';
import Features from './Pages/Features';
import Pricing from './Pages/Pricing';

// import 'bootstrap/dist/css/bootstrap.min/css'

function Routing() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App/>}/>
                <Route path='/home' element={<Home/>}/>
                <Route path='/features' element={<Features/>}/>
                <Route path='/pricing' element={<Pricing/>}/>
            </Routes> 
        </BrowserRouter>
    </div>
  );
}

export default Routing;
