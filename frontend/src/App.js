
import React from "react";
import Home from './pages/Home'
import NoPage from "./pages/NoPage";
import {Route, Link, BrowserRouter, Routes, Navigate} from 'react-router-dom'

export default function App() {
  return (
      <BrowserRouter>
        <main className="text-gray-400 bg-gray-900 body-font">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/home" element={<Navigate to="/"/>}/>
            <Route path="/index" element={<Navigate to="/"/>}/>
            <Route path="*" element={<NoPage></NoPage>}/>
          </Routes>
        </main>
      </BrowserRouter>
  );
}