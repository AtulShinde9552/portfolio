import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Pages/Home';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import 'aos/dist/aos.css'
import Navbar from './Pages/Header/Header';
import Footer from './Pages/Footer/Footer';

function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/portfolio' element={<Home/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App;
