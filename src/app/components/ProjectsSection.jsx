"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "Website built using Javascript",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Multilingual Music App",
    description: "Spotify-based music translation platform with language-aware playlist generation",
    image: "/images/projects/2.png",
    tag: ["All", "AI/ML", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Stock Market Prediction",
    description: "Model that uses sentiment analysis and economic data to predict if the user should buy/sell/hold shares of a given stock",
    image: "/images/projects/3.png",
    tag: ["All", "Python", "AI/ML"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "ISF DUIRI Hearing-Loss Impacted Population Analysis",
    description: "Longitudinal analysis of US-based hearing-impaired population's relationship with infrastructure",
    image: "/images/projects/4.png",
    tag: ["All", "Research", "Data", "Python"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "VIP: Reproducible AI Software",
    description: "Development of tool that anlysed repository reproducibility",
    image: "/images/projects/5.png",
    tag: ["All", "Research", "AI/ML"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Generative Visual Model",
    description: "Analysis of 3-D AI generation software for efficiency, quality, and reproducibility",
    image: "/images/projects/6.png",
    tag: ["All", "Research", "AI/ML"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Research"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Python"
          isSelected={tag === "Mobile"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="AI/ML"
          isSelected={tag === "Mobile"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Data"
          isSelected={tag === "Mobile"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
