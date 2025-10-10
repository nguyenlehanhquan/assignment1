import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './main.css';
import Home from './pages/Home.tsx';
import Login from './pages/Login.tsx';
import StudentRegister from './pages/StudentRegister.tsx';
import DashboardOverview from './pages/DashboardOverview.tsx';
import DashboardTestManage from './pages/DashboardTestManage.tsx';
import DashboardLayout from './components/DashboardLayout.tsx';
import TestCreate from './components/TestCreate.tsx';
import TazajMart from './pages/TazajMart.tsx';
import OrganicFood from './pages/OrganicFood.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/studentregister" element={<StudentRegister />} />
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardOverview />} />
          <Route path="testmanage" element={<DashboardTestManage />} />
          <Route path="testmanage/create" element={<TestCreate />} />
        </Route>
        <Route path="/tazajmart" element={<TazajMart />} />
        <Route path="/organicfood" element={<OrganicFood />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
