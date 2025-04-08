import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import { projects } from "../../data/projects";
import { Card, CardContent } from "../ui/Card";
import Button from "../ui/Button";
import { Github } from "lucide-react";

const ProjectsPage = () => {
  const { t } = useLanguage();

  return (
    <div className="max-w-6xl mx-auto">
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">{t("projects.title")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card key={project.id} className="rounded-2xl shadow-md">
              <img
                src={`/src/components/assets/images/${project.image}`}
                alt={`Project ${project.id}`}
                className="rounded-t-2xl w-full h-48 object-cover"
              />
              <CardContent className="p-4">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-700 text-sm mb-4">
                  {t("projects.tech")}: {project.tech}
                </p>
                <Button variant="outline" className="w-full" disabled>
                  <Github className="mr-2 h-4 w-4" /> {t("projects.comingSoon")}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
