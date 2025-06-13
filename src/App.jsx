import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'

import LandingPage from './pages/LandingPage/LandingPage'
import UploadPage from './pages/UploadPage/UploadPage'
import ResultsPage from './pages/ResultsPage/ResultsPage'

import About from './components/About/About';
import Docs from './components/Docs/Docs';
import Contact from './components/Contact/Contact';

import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'

import { ToastContainer } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';

import './App.css'


function App() {

  return (
      <div className="app-container">
      <Header />  {/* global header always appear */}

      <main className="app-main-content"> 
        <Routes>
          {/* routes defined here */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/upload" element={<UploadPage />} />
          <Route path="/results" element={<ResultsPage />} />

          <Route path="/about" element={<About />} />           
          <Route path="/docs" element={<Docs />} />
          <Route path="/contact" element={<Contact />} />

        </Routes>
      </main>

      <Footer /> {/* global footer always appear */}
      <ToastContainer position="bottom-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
    </div>
  )
}

export default App
