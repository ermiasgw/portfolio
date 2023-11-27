"use client";
import Link from "next/link";
import { BsTerminal } from "react-icons/bs";
import { FiAward } from "react-icons/fi";
import { RiGamepadLine } from "react-icons/ri";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { RiMarkdownFill } from "react-icons/ri";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState, useEffect } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { StringToBoolean } from "class-variance-authority/types";

const icons = [
  { icon: BsTerminal },
  { icon: FiAward },
  { icon: RiGamepadLine },
];

const infos = [
  {
    icon: IoMdArrowDropdown,
    title: "dfdsf",
    color: "text-red-200",
    values: [
      {
        title: "sdfdf",
        value: `
                /**
                 * fdsajlkj
                 * fsdkajl
                 * fsdkjl
                 * fsdajlkjl
                 */
                `,
      },
    ],
  },
  {
    icon: IoMdArrowDropdown,
    title: "dfdsf",
    color: "text-red-200",
    values: [
      {
        title: "sdff",
        value: `
                /**
                 * fdsajlkj
                 * fsdkajl
                 * 
                 * fsdajlkjl
                 */
                `,
      },
    ],
  },
  {
    icon: IoMdArrowDropdown,
    title: "dfdsf",
    color: "text-red-200",
    values: [
      {
        title: "h",
        value: `
                /**
                 * fdsajlkj
                 * fsdkajl
                 * fsdkjl
                 * fsdajlkjl
                 */
                `,
      },
    ],
  },
  {
    icon: IoMdArrowDropdown,
    title: "dfdsf",
    color: "text-red-200",
    values: [
      {
        title: "sff",
        value: `
1 /**
2 * fdsajlkj
                 * fsdkajl
                 * 
                 * fsdajlkjl
                 */
             
                <datagrid></datagrid>
                `,
      },
    ],
  },
];

export default function About() {
  const [tabs, setTabs] = useState(infos.flatMap((info) => info.values));
  const [activeValue, setActiveValue] = useState<string>("sdfdf");
  const [codes, setCodes] = useState<Object[] | null>(null);

  useEffect(() => {
    fetch("/api/about")
      .then((res) => res.json())
      .then((data) => {
        const codearray: {
          url: string;
          language: string;
          code: string;
          description: string;
          username: string;
        }[] = [];
        data.data.forEach((element: any) => {
          let key: any = Object.values(element.files)[0];

          fetch(key.raw_url)
            .then((res) => res.text())
            .then((code) => {
              codearray.push({
                url: element.html_url,
                language: key.language,
                code: code,
                description: element.description,
                username: element.owner.login,
              });
            });
        });
        setCodes(codearray);
      });
  }, []);

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
    <div className="grid grid-cols-12 h-full w-full divide-x ">
      <div className="flex col-span-2 divide-x">
        <div className="h-full flex flex-col gap-5 p-3 items-center w-9">
          {icons.map((icon, index) => (
            <Link key={index} href={"/"}>
              <icon.icon />
            </Link>
          ))}
        </div>
        <div className="h-full w-full flex flex-col">
          <div className="flex flex-col divide-y">
            <div className="flex flex-col divide-y">
              <div className="flex pl-1 items-center h-8">
                <IoMdArrowDropdown /> <span>personal-info</span>
              </div>
              <div className="pl-3 pt-3 pb-3">
                {infos.map((info, index) => (
                  <Accordion type="multiple" key={index} className="p-0">
                    <AccordionItem value="item-1">
                      <AccordionTrigger className="p-0 gap-1">
                        <span className={cn("", info.color)}>
                          <info.icon />
                        </span>{" "}
                        <span>{info.title}</span>
                      </AccordionTrigger>
                      <AccordionContent className="p-0 pl-2">
                        {info.values.map((value, index) => (
                          <Button
                            onClick={() => addTab(value)}
                            variant={"ghost"}
                            size={"sm"}
                            key={index}
                            className=" gap-1 h-auto hover:bg-transparent hover:text-white"
                          >
                            <RiMarkdownFill /> <span>{value.title}</span>
                          </Button>
                        ))}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                ))}
              </div>
            </div>
            <div>
              <div className="flex pl-1 items-center border-b mb-2 h-8">
                <IoMdArrowDropdown /> <span>contacts</span>
              </div>
              <h1 className="ml-2">dfslhjlk</h1>
              <h1 className="ml-2">dsfhlkjsfd</h1>
            </div>
          </div>
        </div>
      </div>

      <Tabs value={activeValue} className="relative h-full col-span-5">
        <TabsList className=" absolute top-0 bg-transparent p-0 rounded-none border-b w-full justify-start h-8">
          {tabs ? (
            tabs.map((tab, index) => (
              <div
                key={index}
                className={cn(
                  "flex items-center h-full border-r",
                  tab.title === activeValue
                    ? "text-foreground h-8 bg-primary"
                    : "",
                )}
              >
                <TabsTrigger
                  value={tab.title}
                  className="p-1 pl-3 pr-16 rounded-none h-full  data-[state=active]:bg-transparent"
                >
                  <div
                    className="cursor-pointer"
                    onClick={() => changeTab(tab.title)}
                  >
                    {tab.title}
                  </div>
                </TabsTrigger>
                <Button
                  onClick={() => removetab(tab)}
                  variant={"ghost"}
                  className="h-full"
                >
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
                <pre className="w-full h-full">{tab.value}</pre>{" "}
                <div className=" border-l h-full w-5 p-[2px] ">
                  {" "}
                  <div className="h-2 w-full m-auto bg-foreground"></div>
                </div>
              </div>{" "}
            </TabsContent>
          ))
        ) : (
          <div></div>
        )}
      </Tabs>

      <div className="h-full relative col-span-5">
        <div className="h-8 border-b absolute top-0 w-full"></div>
        <div className="h-full flex pt-8 ">
          <div className="h-full w-full flex flex-col">
            <div className="w-full p-5 bg-black">
              {"// Code Snippet showcase"}
            </div>
            <div className="h-full p-3">
              {codes ? (
                codes.map((code, index) => (
                  <div key={index} className="relative flex flex-col ">
                    <div className="absolute flex top-0 right-0">
                      <div className="flex pl-1 items-center h-8">
                        <IoMdArrowDropdown /> <span>personal-info</span>
                      </div>
                      <div className="flex pl-1 items-center h-8">
                        <IoMdArrowDropdown /> <span>personal-info</span>
                      </div>
                    </div>
                    <div className="flex">
                      <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col">
                        <h1>dfdsf</h1>
                        <h1>sdsdf</h1>
                      </div>
                    </div>
                    <div>
                      <SyntaxHighlighter
                        language="javascript"
                        style={dark}
                        className="p-3"
                      >
                        {code.code}
                      </SyntaxHighlighter>
                    </div>
                    <div className="border-t p-3">
                      <p>lkjfdsjlkjklsd</p>
                    </div>
                  </div>
                ))
              ) : (
                <div></div>
              )}
            </div>
          </div>
          <div className=" border-l h-full w-5 p-[2px] ">
            <div className="h-2 w-full m-auto bg-foreground"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
