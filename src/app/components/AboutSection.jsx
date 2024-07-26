"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Python</li>
        <li>MATLAB</li>
        <li>C/C++</li>
        <li>HTML/CSS</li>
        <li>Raspberry Pi</li>
        <li>Node.js</li>
        <li>Express</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Microsoft Office</li>
        <li>Google Suite</li>
      </ul>
    ),
  },
  {
    title: "Campus Involvements",
    id: "organizations",
    content: (
      <ul className="list-disc pl-2">
        <li>Purdue University College of Engineering</li>
        <li>InnovateHer Hackathon: Program Lead</li>
        <li>Purdue Student Government: Director of Sustainability, Host: Talk Trash Podcast</li>
        <li>Electrical & Computer Engineering Student Society (ECESS): SPARK, Podcast Committees</li>         
        <li>Women in Engineering: Mentor, Recruitment Project Committee</li>
      </ul>
    ),
  },
 {
    title: "Areas of Interest",
    id: "interests",
    content: (
      <ul className="list-disc pl-2">
        <li>Computer Vision</li>
        <li>Data Engineering</li>
        <li>FinTech</li>
        <li>Sustainability</li>
        <li>Technology</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am an aspiring computer engineer with a passion for creating
            AI/ML-based implementations to problems involving data analysis, 
            generation, and collection. I have experience working with 
            multiple programming languages including Python, C, MATLAB, JS, 
            and Git. I'm a quick and enthusiastic learner, always
            willing to broaden my horizons. I am a team player with excellent
            communication, leadership, and organizational skills. 
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("organizations")}
              active={tab === "organizations"}
            >
              {" "}
              Campus Involvement{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("interests")}
              active={tab === "interests"}
            >
              {" "}
              Areas of Interest{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
