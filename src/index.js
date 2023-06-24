import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter, Routes, Route
} from 'react-router-dom';
import { AppProvider } from './context.';
import './index.css';
import Home from './pages/Home/Home';

import BookList from "./components/BookList/BookList";
import BookDetails from "./components/BookDetails/BookDetails";
import Login from './components/Login/Login.jsx';
import SignUp from './components/Login/SignUp';
import Cart from './components/Cart/Cart';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppProvider>
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Home />}>
          <Route path = "book" element = {<BookList />} />
          <Route path = "/book/:id" element = {<BookDetails />} />
        </Route>
        <Route path = "login" element = {<Login />} />
        <Route path = 'signup' element={<SignUp />} />
        <Route path = 'cart' element={<Cart />} />
        
      </Routes>
    </BrowserRouter>
  </AppProvider>
);

