"use client";
import { IoMdArrowDropdown } from "react-icons/io";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { icons } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion";
import { AccordionTrigger1 } from "@/components/accordion2";
import { FaPython, FaReact, FaDocker } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import {
  BiLogoDjango,
  BiLogoPostgresql,
  BiLogoTailwindCss,
  BiLogoTypescript,
} from "react-icons/bi";
import { SiFastapi, SiExpress, SiWebstorm } from "react-icons/si";
import { MdGroupAdd } from "react-icons/md";
import ExportedImage from "next-image-export-optimizer";

const lables = [
  {
    title: "React",
    icon: FaReact,
    color: "bg-[#43D9AD]",
  },
  {
    title: "Nextjs",
    icon: TbBrandNextjs,
    color: "bg-[#4D5BCE]",
  },
  {
    title: "Python",
    icon: FaPython,
    color: "bg-[#4D5BCE]",
  },
  {
    title: "Django",
    icon: BiLogoDjango,
    color: "bg-[#43D9AD]",
  },
  {
    title: "shadcn-ui",
    icon: BiLogoTailwindCss,
    color: "bg-[#4D5BCE]",
  },
  {
    title: "FastApi",
    icon: SiFastapi,
    color: "bg-[#43D9AD]",
  },
  {
    title: "Typescript",
    icon: BiLogoTypescript,
    color: "bg-[#4D5BCE]",
  },
  {
    title: "Docker",
    icon: FaDocker,
    color: "bg-[#C98BDF]",
  },
  {
    title: "Postgres",
    icon: BiLogoPostgresql,
    color: "bg-[#43D9AD]",
  },
  {
    title: "Web Socket",
    icon: SiWebstorm,
    color: "bg-[#43D9AD]",
  },
];
const project = [
  {
    title: "portfolio",
    picture: "/portfolio.jpeg",
    detail:
      "This is my portfolio site showcasing my skills. It includes games, closable and addable tabs, and filtering options.",
    link: "",
    github: "https://github.com/ermiasgw/portfolio",
    labels: [lables[0], lables[1], lables[4], lables[6]],
  },
  {
    title: "ai-toolkits",
    picture: "/ai-toolkits.jpeg",
    detail:
      "AI Toolkits is a user-friendly and versatile project designed to simplify the integration and utilization of diverse AI capabilities.",
    link: "",
    github: "https://github.com/ermiasgw/ai-toolkits",
    labels: [lables[0], lables[1], lables[4]],
  },
  {
    title: "Job board",
    picture: "/job-board.png",
    detail:
      "A Django job board is a web-based platform designed and developed using the Django web framework, which serves as a centralized hub for connecting job seekers and employers within the context of the Django programming ecosystem.",
    link: "",
    github: "https://github.com/ermiasgw/Django-Job-Board",
    labels: [lables[2], lables[3], lables[8]],
  },
  {
    title: "book tracker",
    picture: "/book-tracker.jpeg",
    detail:
      "This Book tracking project is an innovative solution for avid readers who want to keep track of their reading progress.",
    link: "",
    github: "https://github.com/ermiasgw/Book-Tracking",
    labels: [lables[1], lables[5], lables[6], lables[7], lables[8]],
  },
  {
    title: "study helper",
    picture: "/study-helper.jpeg",
    detail:
      "Study Helper is a user-friendly tool designed to assist with studying, offering access to various APIs such as Wikipedia and YouTube.",
    link: "",
    github: "https://github.com/ermiasgw/study_helper",
    labels: [lables[2], lables[3], lables[8]],
  },
  {
    title: "whatsapp api",
    picture: "/whatsappapi.jpeg",
    detail:
      "It is an API with chat functionality similar to WhatsApp's API server.",
    link: "",
    github: "https://github.com/ermiasgw/whatsapp-api",
    labels: [lables[2], lables[3], lables[9]],
  },
];

export default function Projects() {
  const [projects, setProjects] = useState(project);
  const [filters, setFilters] = useState<string[]>([]);

  const filterProject = (filters: any) => {
    if (filters.length === 0 || filters.length === lables.length) {
      setProjects(project);
    } else {
      setProjects(
        project.filter((item) =>
          filters.some(
            (filter: any) =>
              item.labels.map((obj) => obj.title)?.includes(filter),
          ),
        ),
      );
    }
  };

  const filterLabels = (title: string, event: any) => {
    if (event.target.ariaChecked === "false") {
      setFilters((item) => {
        const filter = [...item, title];
        filterProject(filter);
        console.log(filter);
        return filter;
      });
    } else {
      setFilters((item) => {
        const filter = item.filter((item) => item !== title);
        filterProject(filter);
        console.log(filter);
        return filter;
      });
    }
  };

  return (
    <div className="md:grid md:grid-cols-12 md:h-full w-full divide-x bg-primary">
      <h1 className="md:hidden p-5 pl-10 pb-6">_projects</h1>
      <div className="w-full md:hidden ">
        <Accordion type="multiple" defaultValue={[]} className="md:hidden ">
          <AccordionItem value={"skills"}>
            <AccordionTrigger1 className="w-full pl-10 mb-1 bg-[#1E2D3D]">
              skills
            </AccordionTrigger1>
            <AccordionContent className="p-0 pl-10">
              <ul className="h-full">
                {lables.map((label, index) => (
                  <li
                    key={index}
                    className="flex items-center p-2 pl-3 gap-2  text-primary-foreground"
                  >
                    <Checkbox
                      id={label.title}
                      onClick={(e) => filterLabels(label.title, e)}
                      className="peer"
                    />
                    <label.icon />
                    <label
                      htmlFor={label.title}
                      className=" peer-checked:text-foreground"
                    >
                      {label.title}
                    </label>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div className=" col-span-2 hidden md:flex flex-col divide-y">
        <div className="flex pl-2 items-center h-8">
          <IoMdArrowDropdown /> <span>skills</span>
        </div>
        <ul className="h-full">
          {lables.map((label, index) => (
            <li
              key={index}
              className="flex items-center p-2 pl-3 gap-2 text-primary-foreground"
            >
              <Checkbox
                id={label.title}
                onClick={(e) => filterLabels(label.title, e)}
                className="peer"
              />
              <label.icon />
              <label
                htmlFor={label.title}
                className=" peer-checked:text-foreground"
              >
                {label.title}
              </label>
            </li>
          ))}
        </ul>
      </div>

      <div className="w-full h-full col-span-10 flex flex-col md:divide-y overflow-hidden ">
        <div className="h-8 hidden md:flex w-full">
          <div className="flex pl-3 pr-2 items-center h-full border-r text-primary-foreground">
            <h1 className="mr-6 ">{filters.join(";")} </h1> <span>x</span>
          </div>
        </div>
        <div className="flex h-full w-full overflow-hidden">
          <div className="h-full w-full grid grid-cols-1 md:grid-cols-3 auto-rows-max p-10 gap-5 gap-y-10 no-scrollbar overflow-scroll">
            {projects.map((project, index) => (
              <div key={index} className="relative overflow-hidden h-54">
                <div className="flex flex-row gap-1 p-1 ">
                  <h1 className=" font-medium text-secondary">
                    Project {index + 1}{" "}
                  </h1>
                  <h1 className="text-primary-foreground">
                    {"// "}
                    {project.title}
                  </h1>
                </div>

                <Card className=" bg-[#011221] p-0 pb-12 relative h-64">
                  <div className="p-0 w-full h-24  rounded-t-lg relative">
                    <ExportedImage
                      src={project.picture}
                      fill
                      alt={project.title}
                      className="rounded-t-lg"
                    />
                    <div className="absolute right-1 top-1 text-[#011221] flex gap-1">
                      {project.labels.map((label, index) => (
                        <div key={index} className={label.color}>
                          <label.icon />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className=" relative rounded-b-lg">
                    <p className="p-2 text-primary-foreground text-sm pl-5 pr-1">
                      {project.detail}
                    </p>
                  </div>
                  <div className="w-full flex items-center justify-between p-5 rounded-lg  h-12 absolute bottom-0 z-10 bg-[#011221]">
                    <Link
                      href={project.github}
                      className="bg-[#1C2B3A] p-1 pl-3 pr-3 flex items-center m-0 rounded-lg text-primary-foreground hover:text-foreground hover:bg-[#22313f] text-sm"
                    >
                      view-project
                    </Link>
                    {project.link ? (
                      <Link
                        href={project.link}
                        className="bg-[#1C2B3A] p-1 pl-3 pr-3 flex items-center m-0 rounded-lg text-primary-foreground hover:text-foreground hover:bg-[#22313f] text-sm"
                      >
                        demo
                      </Link>
                    ) : (
                      <div></div>
                    )}
                  </div>
                </Card>
              </div>
            ))}
          </div>
          <div className="hidden md:block border-l h-full w-5 p-[2px] ">
            <div className="h-2 w-full m-auto bg-foreground"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
