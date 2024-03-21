import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Home from './components/Home.js';
import PetsList from './components/PetsList.js';
import PetDetails from './components/PetDetails.js';
import About from './components/About.js';
import EmailForm from './components/EmailForm.js';
import Donate from './components/Donate';
import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pets" element={<PetsList />} />
            <Route path="/pets/:id" element={<PetDetails />} />
            <Route path="/about" element={<About />} />
            <Route path="/subscribe" element={<EmailForm />} />
            <Route path="/donate" element={<Donate />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
