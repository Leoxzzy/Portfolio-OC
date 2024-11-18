// Modules
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Pages
import Home from './pages/home/home.jsx';
import SheetPage from './pages/sheetPage/sheetPage.jsx';
import Contact from './pages/contact/contact.jsx';

import './index.scss'; // styles

// DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/:id' element={<SheetPage />} />
            <Route path='/contact' element={<Contact />} />
        </Routes>
  </BrowserRouter>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//import reportWebVitals from './reportWebVitals';
//reportWebVitals();