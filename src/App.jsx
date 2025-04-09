import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/context/LanguageContext";
import Layout from "@/components/layout/Layout";
import HomePage from "@/components/pages/Homepage.jsx";
import ProjectsPage from "@/components/pages/ProjectsPage.jsx";
import WorkPage from "@/components/pages/WorkPage.jsx";
import EducationPage from "@/components/pages/EducationPage.jsx";
import "./index.css";

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/work" element={<WorkPage />} />
            <Route path="/education" element={<EducationPage />} />
          </Routes>
        </Layout>
      </Router>
    </LanguageProvider>
  );
}

export default App;
