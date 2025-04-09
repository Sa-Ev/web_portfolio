import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/context/LanguageContext";
import Layout from "@/components/layout/Layout";
import HomePage from "@/components/pages/HomePage";
import ProjectsPage from "@/components/pages/ProjectsPage";
import WorkPage from "@/components/pages/WorkPage";
import EducationPage from "@/components/pages/EducationPage";
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
