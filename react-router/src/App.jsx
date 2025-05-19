import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Homepage from './pages/Homepage'
import AboutUs from './pages/AboutUs'
import Products from './pages/Products'
import Contacts from './pages/Contacts'
import SingleProduct from './pages/SingleProduct'
import DefaultLayout from './layouts/DefaultLayout'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Homepage}></Route>
          <Route path="/about" Component={AboutUs}></Route>
          <Route path="/contacts" Component={Contacts}></Route>
          <Route path="/products">
            <Route index Component={Products}></Route>
            <Route path=":id" Component={SingleProduct}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
