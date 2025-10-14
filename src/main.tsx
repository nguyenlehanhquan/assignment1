import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './main.css';
import Login from './pages/Login.tsx';
import StudentRegister from './pages/StudentRegister.tsx';
import DashboardOverview from './pages/DashboardOverview.tsx';
import DashboardTestManage from './pages/DashboardTestManage.tsx';
import DashboardLayout from './components/DashboardLayout.tsx';
import TestCreate from './components/TestCreate.tsx';
import TazajMart from './pages/TazajMart.tsx';
import OrganicFood from './pages/OrganicFood.tsx';
import Login2 from './pages/Login2.tsx';
import Signup from './pages/Signup.tsx';
import ProtectedRoute from "./components/ProtectedRoute.tsx";
import Profile from "./pages/Profile.tsx";
import {AuthProvider} from "./contexts/AuthContext.tsx";
import Home from "./pages/Home.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      {/*<AuthProvider>*/}
          <BrowserRouter>
              <Routes>
                  <Route path="/login2" element={<Login2 />} />
                  <Route path="/signup" element={<Signup />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/" element={<ProtectedRoute><Home/></ProtectedRoute>}/>
                  <Route path="/studentregister" element={<ProtectedRoute><StudentRegister /></ProtectedRoute>} />
                  <Route path="/dashboard" element={<ProtectedRoute><DashboardLayout /></ProtectedRoute>}>
                      <Route index element={<ProtectedRoute><DashboardOverview /></ProtectedRoute>} />
                      <Route path="testmanage" element={<ProtectedRoute><DashboardTestManage /></ProtectedRoute>} />
                      <Route path="testmanage/create" element={<ProtectedRoute><TestCreate /></ProtectedRoute>} />
                  </Route>
                  <Route path="/tazajmart" element={<TazajMart />} />
                  <Route path="/organicfood" element={<OrganicFood />} />
                  <Route path="/profile" element={<Profile />}/>
              </Routes>
          </BrowserRouter>
      {/*</AuthProvider>*/}
  </StrictMode>,
);
