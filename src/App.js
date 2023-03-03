import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Navbar from './Common/Navbar';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
// import Footer from './Common/Footer';

function App() {
  return (
    <div>
       <Router>
        <Navbar/>
        <div style={{height:100}}></div>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
        {/* <Footer/> */}
       </Router>
    </div>
  );
}

export default App;
