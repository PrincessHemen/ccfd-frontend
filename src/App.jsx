import React from 'react';
import {Route, Routes} from 'react-router-dom'

import LandingPage from './pages/LandingPage/LandingPage'
import UploadPage from './pages/UploadPage/UploadPage'
import ResultsPage from './pages/ResultsPage/ResultsPage'

import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'

import './App.css'


function App() {

  return (
      <div className="app-container">
      <Header />  {/* Your global header will always appear */}

      <main className="app-main-content"> {/* This <main> tag will render your page components */}
        <Routes>
          {/* Define your routes here */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/upload" element={<UploadPage />} />
          <Route path="/results" element={<ResultsPage />} />

          {/* Optional: Add a catch-all route for 404 Not Found */}
          {/* <Route path="*" element={<NotFoundPage />} /> */}
        </Routes>
      </main>

      <Footer /> {/* Your global footer will always appear */}
    </div>
  )
}

export default App
