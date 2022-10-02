import React, { useState, useEffect } from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import MobileNav from "../components/MobileNav";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  const [openMenu, setOpenMenu] = useState(true);
  const closeMenu = () => {
    setOpenMenu(true);
  };

  useEffect(() => {
    setOpenMenu(true);
  });

  const works = [
    {
      title: "RestAPI",
      description:
        "A simple RESTAPI with CRUD functionalities using NestJS and MongoDB",
      languages: ["NestJS", "MongoDB"],
      github: "https://github.com/teslim191/nest_api",
      view: "",
    },
    {
      title: "e-commerce",
      description:
        "e-commerce website with user authentication, handling session, add to cart using AJAX, full admin dashboard with CRUD functionalities.",
      languages: ["PHP", "AJAX", "JavaScript", "MySQL"],
      github: "https://github.com/teslim191/ecommerce",
      view: "",
    },
    {
      title: "Abi's Skincare",
      description: "",
      languages: ["PHP", "JavaScript", "MySQL"],
      github: "https://github.com/teslim191/organicskin",
      view: "https://organicskin.herokuapp.com/",
    },
    {
      title: "url shortner",
      description: "",
      languages: ["Express", "NodeJS", "Handlebars", "Mongoose", "MongoDB"],
      github: "https://github.com/teslim191/url-shortner",
      view: "http://mylink-shortner.herokuapp.com/",
    },
    {
      title: "Payment System",
      description:
        "server-side online_payment app with full authentication using session. users can purchase a product using the paystack payment gateway",
      languages: ["NodeJS", "Express", "Mongoose", "Handlebars", "Multer-storage", "Paystack-API"],
      github: "https://github.com/teslim191/online_payment",
      view: "https://shoes.up.railway.app/",
    },
    {
      title: "Blog",
      description: "BLOG with Posts, Users and Comments using GraphQL and MongoDB",
      languages: ["NodeJS", "GraphQL", "Express", "MongoDB", "Mongoose"],
      github: "https://github.com/teslim191/blog_backend",
      view: "",
    },
    {
      title: "Passport-local Authentication",
      description: "About Authentication system using Express Passport-Local",
      languages: ["NodeJS", "Express", "MongoDB", "Mongoose", "Handlebars", "Passport-local"],
      github: "",
      view: "",
    },
    {
      title: "CRM",
      description: "Customer Relationship Management Tool using Python",
      languages: ["MySQL", "Python", "PyMySQL", "Tkinter"],
      github: "https://github.com/teslim191/CRM",
      view: "",
    },
  ];

  return (
    <div className="bg-[#0a192f] text-white">
      <Head>
        <title>Teslim Jimoh - Backend Engineer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <MobileNav />

      <div className="w-full overflow-y-hidden pt-[4rem] h-screen">
        <h2 className="text-white text-2xl cursor-pointer text-center py-2">
          SOME OF MY WORK.
          <a
            href="https://github.com/teslim191"
            target="_blank"
            rel="noreferrer"
          >
            <span className="link hover:text-[#46b1a0]">SEE MORE </span>
          </a>{" "}
        </h2>

        <div className="flex flex-wrap justify-center ">
          <div className="w-[80%] flex-col flex flex-wrap py-4 lg:ml-[5%] lg:flex-row ">
            {works.map((work) => (
              <ProjectCard work={work} key={work} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
