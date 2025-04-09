import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import MedicineHome from './pages/MedicineHome'

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='' element={<Home />}></Route>
          <Route path='home' element={<Home />}></Route>
          <Route path='medicine' element={<MedicineHome />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  )
}

export default App
