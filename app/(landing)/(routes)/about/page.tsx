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
import { useState, useEffect, useRef } from "react";
import CodeSamples from "@/components/codesamples";

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
const hobies = [
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
const profesional = [
  {
    icon: IoMdArrowDropdown,
    title: "fdgdgsgd",
    color: "text-red-200",
    values: [
      {
        title: "dgdgdsf",
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
    title: "dggd",
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

const icons = [
  {
    icon: BsTerminal,
    info: profesional,
    name: "lfksdjlkfds",
  },
  {
    icon: FiAward,
    info: infos,
    name: "lfksdjlkfds",
  },
  {
    icon: RiGamepadLine,
    info: infos,
    name: "lfksdjlkfds",
  },
];

export default function About() {
  const [activeInfo, setActiveInfo] = useState(infos);
  const [tabs, setTabs] = useState([activeInfo[0].values[0]]);
  const [activeValue, setActiveValue] = useState<string>(tabs[0].title);

  const changeInfo = (info) => {
    setActiveInfo(info);
    setTabs([info[0].values[0]]);
    setActiveValue(info[0].values[0].title);
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
    <div className="grid grid-cols-12 h-full w-full divide-x ">
      <div className="flex col-span-2 divide-x">
        <div className="h-full flex flex-col gap-5 p-3 items-center w-9">
          {icons.map((icon, index) => (
            <Button key={index} onClick={() => changeInfo(icon.info)}>
              <icon.icon />
            </Button>
          ))}
        </div>
        <div className="h-full w-full flex flex-col">
          <div className="flex flex-col divide-y">
            <div className="flex flex-col divide-y">
              <div className="flex pl-1 items-center h-8">
                <IoMdArrowDropdown /> <span>personal-info</span>
              </div>
              <div className="pl-3 pt-3 pb-3">
                {activeInfo.map((info, index) => (
                  <Accordion
                    type="multiple"
                    defaultValue={["0"]}
                    key={index}
                    className="p-0"
                  >
                    <AccordionItem value={String(index)}>
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
      <CodeSamples />
    </div>
  );
}
