
import React from "react";
import Home from './pages/Home'
import NoPage from "./pages/NoPage";
import ProjectDetails from "./pages/ProjectDetails";
import {Route, Link, BrowserRouter, Routes, Navigate} from 'react-router-dom'

export default function App() {
  return (
      <BrowserRouter>
        <main className="text-gray-400 bg-gray-900 body-font w-full h-full">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/home" element={<Navigate to="/"/>}/>
            <Route path="/index" element={<Navigate to="/"/>}/>
            <Route path="/projects/:id" element={<ProjectDetails/>}/>
            <Route path="*" element={<NoPage></NoPage>}/>
          </Routes>
        </main>
      </BrowserRouter>
  );
}