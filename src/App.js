import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/Home'
import Contact from './pages/Contact'
import  Menu  from './pages/Menu';
import About from './pages/About'

function App() {
    
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route  index Component={Home} />
          <Route path='/pages/Menu'  element={<Menu />}/>
          <Route path='/pages/Contact' element={<Contact />}/>
          <Route path='/pages/About' element={<About />}/>  
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
