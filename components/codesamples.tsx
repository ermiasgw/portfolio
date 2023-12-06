"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import SyntaxHighlighter from "react-syntax-highlighter";
import {
  dark,
  dracula,
  vscDarkPlus,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import {
  vs2015,
  a11yDark,
} from "react-syntax-highlighter/dist/esm/styles/hljs";
import { PiChatTeardropTextFill } from "react-icons/pi";
import { MdStar } from "react-icons/md";
import { useState, useEffect } from "react";
import Link from "next/link";

interface code {
  url: string;
  language: string;
  raw_url: string;
  code: string;
  description: string;
  username: string;
  avatar_url: string;
}

export default function CodeSamples() {
  const [codes, setCodes] = useState<code[]>();

  const customStyle = {
    background: "#011221",
    borderRadius: "1em",
  };

  useEffect(() => {
    try {
      fetch("/api/about")
        .then((res) => res.json())
        .then((data) => {
          setCodes(data);
        });
    } catch (error: any) {
      throw new Error(`Error fetching data: ${error.message}`);
    }
  }, []);

  return (
    <div className="h-full md:overflow-hidden relative col-span-5">
      <div className="h-8 border-b absolute top-0 w-full"></div>
      <div className="h-full flex pt-8 ">
        <div className="h-full w-full relative flex flex-col ">
          <div className="w-full p-5 font-medium text-lg text-primary-foreground">
            {"// Code Snippet showcase"}
          </div>
          <div className="h-full m-0 md:overflow-scroll p-3 pb-20 no-scrollbar flex flex-col gap-7">
            {codes ? (
              codes.map((code, index) => (
                <div key={index} className="relative flex flex-col ">
                  <div className="absolute flex top-0 right-0">
                    <Link
                      href={code.url}
                      className="flex pl-1 gap-1 items-center h-8 text-sm text-primary-foreground hover:text-foreground"
                    >
                      <PiChatTeardropTextFill /> <span>details</span>
                    </Link>
                    <div className="hidden md:flex pl-1 items-center h-8 text-sm text-primary-foreground gap-1">
                      <MdStar /> <span>5 stars</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <Avatar>
                      <AvatarImage src={code.avatar_url} />
                      <AvatarFallback>EG</AvatarFallback>
                    </Avatar>
                    <div className=" font-normal text-xs text-primary-foreground">
                      <h1 className="text-[#5565E8] text-sm">
                        @{code.username}
                      </h1>
                      <h1>created 5 months ago</h1>
                    </div>
                  </div>

                  <SyntaxHighlighter
                    language={code.language.toLowerCase()}
                    style={a11yDark}
                    customStyle={customStyle}
                  >
                    {code.code}
                  </SyntaxHighlighter>

                  <div className="border-t p-3 text-sm font-light text-primary-foreground">
                    <p>{code.description}</p>
                  </div>
                </div>
              ))
            ) : (
              <div></div>
            )}
          </div>
        </div>
        <div className="hidden md:block border-l h-full w-5 p-[2px] ">
          <div className="h-2 w-full m-auto bg-foreground"></div>
        </div>
      </div>
    </div>
  );
}
