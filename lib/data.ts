import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import newsRoomCMS from "@/public/newsRoomCMS.jpg";
import SubscriptionBox from "@/public/subscriptionBox.jpg"
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

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
		name: "Experience",
		hash: "#experience",
	},
	{
		name: "Contact",
		hash: "#contact",
	},
] as const;

export const experiencesData = [
	{
		title: "Graduated University",
		location: "Dhaka, Bangladesh",
		description:
			"I graduated my BSc in Computer Science and Engineering. After That I start creating project for some clients.",
		icon: React.createElement(LuGraduationCap),
		date: "02/02/2023",
	},
	{
		title: "Front-End Developer",
		location: "Orlando, FL",
		description:
			"I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
		icon: React.createElement(CgWorkAlt),
		date: "2023 - present",
	},
	{
		title: "Full-Stack Developer",
		location: "Houston, TX",
		description:
			"I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
		icon: React.createElement(FaReact),
		date: "2021 - present",
	},
] as const;

export const projectsData = [
	{
		title: "newsRoomCMS",
		description:
			"I worked as a full-stack developer on this startup project.It was build on MERN stack.It's a factCheck website made for factwatchBD(CQS).",
		tags: ["MongoDB", "Express", "React", "Node.js", "MUI"],
		imageUrl: newsRoomCMS,
	},
	{
		title: "SubscriptionBox",
		description:
			"It was e FullProject build with PHP. I build it for Web Technology course. ",
		tags: ["HTML", "CSS", "JavaScript", "PHP", "Bootstrape"],
		imageUrl: SubscriptionBox,
	},
	{
		title: "Word Analytics",
		description:
			"A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
		tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
		imageUrl: wordanalyticsImg,
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
	"Git",
	"Tailwind",
	"MongoDB",
	"Redux",
	"Express",
	"Python",
	"Php",
	"Laravel",
	"Framer Motion",
] as const;
