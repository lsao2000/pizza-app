import './App.css';
import Navbar from './components/Navbar';
import { createBrowserRouter, RouterProvider, createRoutesFromElements ,Route} from 'react-router-dom';
import Home from './pages/Home'
import Contact from './pages/Contact'
import  Menu  from './pages/Menu';
import About from './pages/About'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route path='/' element={<Navbar />}>
        <Route index element={<Home />}/>
        <Route path='/pages/Menu'  element={<Menu />}/>
        <Route path='/pages/Contact' element={<Contact />}/>
        <Route path='/pages/About' element={<About />}/>
        
      </Route>
      </>
    )
  )
  return (
    <div className="App">
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
