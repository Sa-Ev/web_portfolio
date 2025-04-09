import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import { projects } from "../../data/projects";
import { Card, CardContent } from "../ui/Card";
import Button from "../ui/Button";
import { Github } from "lucide-react";

// Импортируем изображения проектов
import project1Image from "../../assets/images/project1.jpg";
import project2Image from "../../assets/images/project2.jpg";
import project3Image from "../../assets/images/project3.jpg";

// Карта изображений проектов
const projectImages = {
  "project1.jpeg": project1Image,
  "project2.jpeg": project2Image,
  "project3.jpeg": project3Image,
};

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
                src={
                  projectImages[project.image] ||
                  `https://via.placeholder.com/400x200?text=Проект+${project.id}`
                }
                alt={`Project ${project.id}`}
                className="rounded-t-2xl w-full h-48 object-cover"
                onError={(e) => {
                  console.error(
                    "Ошибка загрузки изображения проекта:",
                    project.image
                  );
                  e.target.src = `https://via.placeholder.com/400x200?text=Проект+${project.id}`;
                }}
              />
              <CardContent className="p-4">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-700 text-sm mb-4">
                  {t("projects.tech")}: {project.tech}
                </p>
                {project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full"
                  >
                    <Button variant="outline" className="w-full">
                      <Github className="mr-2 h-4 w-4" />{" "}
                      {project.gitHubText || "GitHub"}
                    </Button>
                  </a>
                ) : (
                  <Button variant="outline" className="w-full" disabled>
                    <Github className="mr-2 h-4 w-4" />{" "}
                    {t("projects.comingSoon")}
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
