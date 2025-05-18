import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Homepage from './pages/Homepage'
import AboutUs from './pages/AboutUs'
import Products from './pages/Products'
import Contacts from './pages/Contacts'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Homepage}></Route>
          <Route path="/about" Component={AboutUs}></Route>
          <Route path="/products" Component={Products}></Route>
          <Route path="/contacts" Component={Contacts}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
