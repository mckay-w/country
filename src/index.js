import { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ParticlesBg from 'particles-bg'
//import App from './pages/App';
import Home from './pages/Home';
import Interview from './pages/Interview';
import Digitalvillage from './pages/Digitalvillage';
import Policies from './pages/Policies';
import Merchant from './pages/Merchant';
import Us from './pages/Us';

import Article from './component/article';

const container = document.getElementById('root');


if(container) {
    const root = createRoot(container);
    root.render(
        <>
        
        <Router>
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/interview" element={<Interview />} />
            <Route path="/digitalvillage" element={<Digitalvillage />} />
            <Route path="/policies" element={<Policies />} />
            <Route path="/merchant" element={<Merchant/>}/>
            <Route path="/us" element={<Us />} />
            <Route path="/articles/:id" element={<Article/>} />
        </Routes>
        </Router>
        </>
  ); 
}
//<Route path="/AdminLogin" element={<AdminLogin setAuth={setAuth} />} />