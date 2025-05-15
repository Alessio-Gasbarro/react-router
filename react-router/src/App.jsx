import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Homepage from './components/Homepage'
import AboutUs from './components/AboutUs'
import Products from './components/Products'
import Contacts from './components/Contacts'

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
