import {Routes, Route, Navigate} from "react-router-dom";
import './App.css'
import HomePage from "./pages/homepage";
import About from "./pages/about";

import Nav from "./components/nav";
import Footer from "./components/footer";

import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme({
  palette: {
    background: {
      default: "#f8f8f8"
    }
  }
});



import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';



function App() {
  return (
    
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Nav />

      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/about" element={<About />} /> 
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

      <Footer />
      </ThemeProvider>
    
  )
}

export default App
