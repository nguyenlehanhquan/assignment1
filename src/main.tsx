import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import Home from "./pages/Home.tsx";
import Login from "./pages/Login.tsx";
import Dashboard from "./pages/Dashboard.tsx";
import StudentRegister from "./pages/StudentRegister.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/dashboard" element={<Dashboard/>}/>
              <Route path="/studentregister" element={<StudentRegister/>}/>
          </Routes>
      </BrowserRouter>
  </StrictMode>
);
