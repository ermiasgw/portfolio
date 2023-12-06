"use client";
import { BsTerminal } from "react-icons/bs";
import { FiAward } from "react-icons/fi";
import { RiGamepadLine } from "react-icons/ri";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Accordion1,
  AccordionContent1,
  AccordionItem1,
  AccordionTrigger1,
} from "@/components/accordion2";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { RiMarkdownFill } from "react-icons/ri";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import {
  dark,
  a11yDark,
  dracula,
  vscDarkPlus,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import Link from "next/link";
import { IoInformationSharp } from "react-icons/io5";
import { IoFolderOpenSharp } from "react-icons/io5";
import { FaDiscord, FaGithub, FaLinkedin } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";

const contacts = [
  {
    title: "linkedin",
    url: "https://www.linkedin.com/in/ermiasgw",
    icon: FaLinkedin,
  },
  {
    title: "discord",
    url: "https://www.discordapp.com/users/ermiasgw",
    icon: FaDiscord,
  },
  {
    title: "email",
    url: "mailto:ermiasgashaw7881@gmail.com",
    icon: MdAttachEmail,
  },
  {
    title: "github",
    url: "https://www.github.com/ermiasgw",
    icon: FaGithub,
  },
];

const personal_info = {
  title: "personal-info",
  data: [
    {
      icon: IoFolderOpenSharp,
      title: "introduction",
      color: "text-[#E99287]",
      values: [
        {
          title: "about-me",
          value: `
/**
* I enjoy building everything from a small business site to web
* application. I am a driven individual with the ability to adapt
* to any situation and a proven potential to grow myself
* and others. My profession allows me the scope to update my
* knowledge to the latest trends and be part of a diverse and
* dynamic team that adds to both my personal and professional
* growth, and I am highly interested in looking for a challenging
* position in an organization specializing in tech, which will be
* the motivation to my professional and personal prosperity and
* will play to my strengths.
*/
                `,
        },
      ],
    },
    {
      icon: IoFolderOpenSharp,
      title: "personality",
      color: "text-[#43D9AD]",
      values: [
        {
          title: "strengths",
          value: `
/**
 * I am creative
 * I never lose hope
 * I am adaptable to evolving technologies
 * I am committed to continuous learning
 */
                `,
        },
        {
          title: "qualities",
          value: `
/**
 * I am creative
 * I never lose hope
 * I am adaptable to evolving technologies
 * I am committed to continuous learning
 */
                `,
        },
      ],
    },
    {
      icon: IoFolderOpenSharp,
      title: "education",
      color: "text-[#3A49A4]",
      values: [
        {
          title: "high-school",
          value: `
/**
 * School name: Mariam monastery mission secondary school
 * location: Addis Ababa
 * 
 * 
 */
                `,
        },
        {
          title: "university",
          value: `
/**
 * university name: Adama Science and Technology University
 * location: Adama
 * specialization: BA degree in Computer Science and Engineering
 * 
 * 
 */
                `,
        },
      ],
    },
  ],
};
const hobbies = {
  title: "hobbies",
  data: [
    {
      icon: IoFolderOpenSharp,
      title: "sports",
      color: "text-[#3A49A4]",
      values: [
        {
          title: "football",
          value: `
/**
 * I love playing football
 * 
 * 
 * 
 */
                `,
        },
      ],
    },
  ],
};
const profesional_info = {
  title: "profesional-info",
  data: [
    {
      icon: IoFolderOpenSharp,
      title: "experience",
      color: "text-[#43D9AD]",
      values: [
        {
          title: "cargo-ai(upwork)",
          value: `
/**
 * job_title: Python Developer
 * location: Singapore
 * type: remote
 * tasks: 
 *      - extract data from cargo tracking websites
 *      - create APIs for easy retrieval
 *      - deploy the APIs using AWS lambda
 * 
 */
                `,
        },
        {
          title: "dallol-tech",
          value: `
/**
 * job_title: Software Developer
 * location: Ethiopia
 * type: hybrid
 * tasks: 
 *       - create robust web applications
 *       - integrate CI/CD pipelines
 *       - test them with unit, integration and E2E tests
 *
 */
                `,
        },
      ],
    },
  ],
};

const icons = [
  {
    icon: BsTerminal,
    info: profesional_info,
    title: profesional_info.title,
  },
  {
    icon: FiAward,
    info: personal_info,
    title: personal_info.title,
  },
  {
    icon: RiGamepadLine,
    info: hobbies,
    title: hobbies.title,
  },
];

export default function Information() {
  const [activeInfo, setActiveInfo] = useState(personal_info);
  const [tabs, setTabs] = useState([activeInfo.data[0].values[0]]);
  const [activeValue, setActiveValue] = useState<string>(
    tabs[0] ? tabs[0].title : "",
  );
  const [activeTab, setActiveTab] = useState(activeInfo.data[0].values[0]);

  const changeInfo = (info: any) => {
    setActiveInfo(info);
    setTabs([info.data[0].values[0]]);
    setActiveValue(info.data[0].values[0].title);
  };
  const changeActiveTab = (value: any) => {
    setActiveTab(value);
    setActiveValue(value.title);
  };

  const removetab = (tab: { title: string; value: string }) => {
    if (activeValue !== tab.title) {
      setTabs((tabs) => tabs.filter((value) => value !== tab));
    } else {
      const activeIndex =
        tabs.length - 1 === tabs.indexOf(tab)
          ? tabs.length - 2
          : tabs.indexOf(tab);
      setTabs((tabs) => tabs.filter((value) => value !== tab));
      setTabs((tabs) => {
        if (tabs.length >= 1) {
          setActiveValue(tabs[activeIndex].title);
        }
        return tabs;
      });
    }
  };
  const changeTab = (value: string) => {
    setActiveValue(value);
  };

  const addTab = (tab: { title: string; value: string }) => {
    if (tabs.indexOf(tab) === -1) {
      if (tabs.length >= 3) {
        setTabs((tabs) => [...tabs.slice(1), tab]);

        setTabs((tabs) => {
          setActiveValue(tabs[tabs.length - 1].title);
          return tabs;
        });
      } else {
        setTabs((tabs) => [...tabs, tab]);
        setTabs((tabs) => {
          setActiveValue(tabs[tabs.length - 1].title);
          return tabs;
        });
      }
    } else {
      changeTab(tab.title);
    }
  };
  return (
    <>
      <div className="w-full md:hidden">
        <Accordion1 type="multiple" defaultValue={[]} className="md:hidden">
          {icons.map((icon, index) => (
            <AccordionItem key={index} value={String(index)}>
              <AccordionTrigger1 className="w-full pl-5 mb-1 bg-[#1E2D3D]">
                {icon.title}
              </AccordionTrigger1>
              <AccordionContent className="p-0 pl-2">
                <div className="pl-3 pt-3 pb-3 font-normal text-base text-primary-foreground ">
                  <Accordion
                    type="multiple"
                    defaultValue={["0"]}
                    className="p-0"
                  >
                    {icon.info.data.map((info, index) => (
                      <AccordionItem key={index} value={String(index)}>
                        <AccordionTrigger>
                          <span className={cn("", info.color)}>
                            <info.icon />
                          </span>{" "}
                          <span>{info.title}</span>
                        </AccordionTrigger>
                        <AccordionContent className="p-0 pl-2 flex flex-col items-start">
                          {info.values.map((value, index) => (
                            <Button
                              onClick={() => changeActiveTab(value)}
                              variant={"ghost"}
                              size={"sm"}
                              key={index}
                              className={cn(
                                " gap-1 h-auto hover:bg-transparent hover:text-foreground",
                                value.title === activeValue
                                  ? "text-foreground"
                                  : "",
                              )}
                            >
                              <RiMarkdownFill /> <span>{value.title}</span>
                            </Button>
                          ))}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion1>
      </div>

      <div className="md:flex col-span-2 divide-x hidden">
        <div className="h-full flex flex-col gap-y-7 pt-7 items-center w-9">
          {icons.map((icon, index) => (
            <Button
              key={index}
              onClick={() => changeInfo(icon.info)}
              className={cn(
                "p-0 m-0 w-full h-fit hover:text-foreground",
                icon.title === activeInfo.title ? "text-foreground" : "",
              )}
            >
              <icon.icon />
            </Button>
          ))}
        </div>
        <div className="h-full w-full flex flex-col">
          <div className="flex flex-col divide-y">
            <div className="flex flex-col divide-y">
              <div className="flex pl-1 items-center h-8 font-normal text-base">
                <IoMdArrowDropdown /> <span>{activeInfo.title}</span>
              </div>
              <div className="pl-3 pt-3 pb-3 font-normal text-base text-primary-foreground ">
                <Accordion type="multiple" defaultValue={["0"]} className="p-0">
                  {activeInfo.data.map((info, index) => (
                    <AccordionItem key={index} value={String(index)}>
                      <AccordionTrigger className="p-0 gap-1 ">
                        <span className={cn("", info.color)}>
                          <info.icon />
                        </span>{" "}
                        <span>{info.title}</span>
                      </AccordionTrigger>
                      <AccordionContent className="p-0 pl-2 flex flex-col items-start">
                        {info.values.map((value, index) => (
                          <Button
                            onClick={() => addTab(value)}
                            variant={"ghost"}
                            size={"sm"}
                            key={index}
                            className={cn(
                              " gap-1 h-auto hover:bg-transparent hover:text-foreground",
                              value.title === activeValue
                                ? "text-foreground"
                                : "",
                            )}
                          >
                            <RiMarkdownFill /> <span>{value.title}</span>
                          </Button>
                        ))}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
            <div>
              <div className="flex pl-1 items-center border-b mb-2 h-8">
                <IoMdArrowDropdown /> <span>contacts</span>
              </div>
              {contacts.map((item, index) => (
                <Link
                  key={index}
                  className="ml-2 flex gap-1 items-center text-primary-foreground hover:text-foreground text-sm"
                  href={item.url}
                >
                  <item.icon /> {item.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="w-full pl-6 md:hidden">
        <h1 className="pt-7">
          {"// "} {activeValue}
        </h1>
        <SyntaxHighlighter
          language={"javascript"}
          style={vscDarkPlus}
          customStyle={{ background: "transparent", width: "100%", padding: 0 }}
        >
          {activeTab.value}
        </SyntaxHighlighter>
      </div>

      <Tabs
        value={activeValue}
        className="relative h-full col-span-5 md:block hidden"
      >
        <TabsList className=" absolute top-0 bg-transparent p-0 rounded-none border-b w-full justify-start h-8">
          {tabs ? (
            tabs.map((tab, index) => (
              <div
                key={index}
                className={cn(
                  "flex items-center text-primary-foreground h-full border-r",
                  tab.title === activeValue ? " h-8 bg-primary" : "",
                )}
              >
                <TabsTrigger
                  value={tab.title}
                  className="p-1 pl-3 rounded-none h-full  data-[state=active]:bg-transparent data-[state=active]:text-primary-foreground"
                >
                  <div
                    className="cursor-pointer pr-5 mr-2"
                    onClick={() => changeTab(tab.title)}
                  >
                    {tab.title}
                  </div>
                </TabsTrigger>
                <Button onClick={() => removetab(tab)} className="h-full w-3">
                  x
                </Button>
              </div>
            ))
          ) : (
            <div></div>
          )}
        </TabsList>

        {tabs ? (
          tabs.map((tab, index) => (
            <TabsContent key={index} value={tab.title} className="h-full pt-8 ">
              <div className="h-full flex ">
                <SyntaxHighlighter
                  language={"javascript"}
                  style={vscDarkPlus}
                  customStyle={{ background: "transparent", width: "100%" }}
                >
                  {tab.value}
                </SyntaxHighlighter>
                <div className=" border-l h-full w-5 p-[2px] ">
                  <div className="h-2 w-full m-auto bg-foreground"></div>
                </div>
              </div>
            </TabsContent>
          ))
        ) : (
          <div></div>
        )}
      </Tabs>
    </>
  );
}
