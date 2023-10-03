import {Routes, Route, Navigate} from "react-router-dom";
import './App.css'
import HomePage from "./pages/homepage";
import About from "./pages/about";

import Nav from "./components/nav";
import Footer from "./components/footer";




import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';



function App() {

  return (
    
    <>

      <Nav />

      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/about" element={<About />} /> 
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

      <Footer />
      </>
    
  )
}

export default App
