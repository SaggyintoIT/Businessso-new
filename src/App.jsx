import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdminLoginPage from './admin/admin';


function App() {
  return (
    <>
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AdminLoginPage />} />
        
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
