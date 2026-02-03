import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import SignIn from './pages/auth/SignIn';
import ForgotPassword from './pages/auth/ForgotPassword';
import AdminLayout from './layouts/AdminLayout';
import DashboardHome from './pages/admin/DashboardHome';
import Listing from './pages/admin/Listing';
import Forms from './pages/admin/Forms';
import Cards from './pages/admin/Cards';
import Modals from './pages/admin/Modals';
import Calendar from './pages/admin/Calendar';
import { ThemeProvider } from './context/ThemeContext';
import EmptyStates from './pages/admin/EmptyStates';
import Tabs from './pages/admin/Tabs';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          {/* Auth Routes */}
          <Route path="/" element={<SignIn />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />

          {/* Admin Routes */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Navigate to="/admin/dashboard" replace />} />
            <Route path="dashboard" element={<DashboardHome />} />
            <Route path="listing" element={<Listing />} />
            <Route path="forms" element={<Forms />} />
            <Route path="modals" element={<Modals />} />
            <Route path="calendar" element={<Calendar />} />
            <Route path="users" element={<Listing />} /> {/* Reusing listing for demo */}
            <Route path="analytics" element={<DashboardHome />} /> {/* Reusing for demo */}
            <Route path="cards" element={<Cards />} />
            <Route path="empty" element={<EmptyStates />} />
            <Route path="tabs" element={<Tabs />} />
            <Route path="settings" element={<Forms />} /> {/* Reusing for demo */}
          </Route>

          {/* Catch all */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
