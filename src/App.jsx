import './App.css'
import Home from './components/home/Home'
import Products from './components/products/Products'
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom'


function App() {
  return (
    <>
        <div>
          <Router>
            <Routes>
              <Route path = "/" element = {<Home/>} />
              <Route path = "/products" element = {<Products/>} />
            </Routes>
          </Router>
          {/* <Products/> */}
        </div>
    </>
  )
}

export default App
