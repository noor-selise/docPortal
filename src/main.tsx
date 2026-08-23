import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Login from './pages/Login'
import Callback from './pages/Callback'
import './main.css'

const root = createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/login/callback" element={<Callback />} />
      <Route path="/login" element={<Login />} />
      <Route path="/*" element={<App />} />
    </Routes>
  </BrowserRouter>
)
