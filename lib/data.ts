import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import pay from "@/public/pay.png";
import clock from "@/public/clock.png";
import mental from"@/public/mental2.png"

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Education",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Secondary Education",
    location: "Kalupur Panchpota High School",
    description:
      "I have done my secondary education from KPHS.I have Secured 90.2 percentage in that exam",
    icon: React.createElement(LuGraduationCap),
    date: "2018",
  },
  {
    title: "Higher-Secondary Education",
    location: "Kalupur Panchpota High School",
    description:
      "I have done my secondary education from KPHS.I have Secured 92.8 percentage in that exam",
    icon: React.createElement(LuGraduationCap),
    date: "2020",
  },
  {
    title: "Graduation",
    location: "Netaji Subhash Engineering College",
    description:
      "Currently i am studying B.Tech at Computer Science And Business Systems at NSEC. My current cgpa is 8.4",
    icon: React.createElement(LuGraduationCap),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "DevPay",
    description:
      "I  built an Payment Website, that allows user to login or signup to the site, show their balance, add money to the wallet through net banking, send money to another user and show the transactions.",
    tags: [ "Next.js", "PostgreSql", "Tailwind", "Prisma","Express"],
    imageUrl: pay,
  },
  {
    title: "SHRISTI",
    description:
      "We Built a Mental Health Tracking App in a hackathon Held at NSEC.I have contributed in the frontend and backend part",
    tags: ["React", "Next.js", "TypeScript", "Tailwind",],
    imageUrl: mental,
  },
  {
    title: "Analog Clock",
    description:
      "I built an analog watch that shows real time ",
    tags: ["HTML", "CSS", "JavaScript"],
    imageUrl: clock,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "Git",
  "Tailwind",
  "MongoDB",
  "PostgreSql",
  "MySql",
  "Prisma",
  "AWS",
  "Cloudflare",
  "Hono",
  "TurboRepo",

  
 
 
] as const;
