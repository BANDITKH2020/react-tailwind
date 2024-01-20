import './App.css'
import Footer from './Shared/Footer'
import About from './components/About'
import Features from './components/Features'
import Home from './components/Home'
import Newslatter from './components/Newslatter'
import Pricing from './components/Pricing'
import Navbar from './components/navbar'

function App() {
  

  return (
    <>
      <Navbar />
      <Home/>
      <Features />
      <About />
      <Pricing />
      <Newslatter />
      <Footer />
    </>
  )
}

export default App
