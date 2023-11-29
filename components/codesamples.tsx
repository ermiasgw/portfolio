import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { useState, useEffect } from "react";

interface code {
  url: string;
  language: string;
  code: string;
  description: string;
  username: string;
}

export default function CodeSamples() {
  const [codes, setCodes] = useState<code[]>();

  useEffect(() => {
    try {
      fetch("/api/about")
        .then((res) => res.json())
        .then((data) => {
          const codearray: code[] = [];
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
    } catch {}
  }, [codes]);

  console.log(codes);
  return (
    <div className="h-full relative col-span-5">
      <div className="h-8 border-b absolute top-0 w-full"></div>
      <div className="h-full flex pt-8 ">
        <div className="h-full w-full flex flex-col">
          <div className="w-full p-5">{"// Code Snippet showcase"}</div>
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
  );
}
