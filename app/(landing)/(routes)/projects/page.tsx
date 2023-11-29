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

const projects = [
  {
    title: "kdlsfljl",
    picture: "kldfjsk",
    icon: "dfkl",
    detail: "fdsjl",
    link: "sdfhkj",
    github: "fdsjlkjk",
    icon_color: "",
  },
  {
    title: "kdlsfljl",
    picture: "kldfjsk",
    icon: "dfkl",
    detail: "fdsjl",
    link: "sdfhkj",
    github: "fdsjlkjk",
    icon_color: "",
  },
  {
    title: "kdlsfljl",
    picture: "kldfjsk",
    icon: "dfkl",
    detail: "fdsjl",
    link: "sdfhkj",
    github: "fdsjlkjk",
    icon_color: "",
  },
  {
    title: "kdlsfljl",
    picture: "kldfjsk",
    icon: "dfkl",
    detail: "fdsjl",
    link: "sdfhkj",
    github: "fdsjlkjk",
    icon_color: "",
  },
  {
    title: "kdlsfljl",
    picture: "kldfjsk",
    icon: "dfkl",
    detail: "fdsjl",
    link: "sdfhkj",
    github: "fdsjlkjk",
    icon_color: "",
  },
  {
    title: "kdlsfljl",
    picture: "kldfjsk",
    icon: "dfkl",
    detail: "fdsjl",
    link: "sdfhkj",
    github: "fdsjlkjk",
    icon_color: "",
  },
];

export default function Projects() {
  return (
    <div className="grid grid-cols-12 h-full w-full divide-x">
      <div className=" col-span-2 flex flex-col divide-y">
        <div className="flex pl-2 items-center h-8">
          <IoMdArrowDropdown /> <span>contacts</span>
        </div>
        <div className="h-full"></div>
      </div>

      <div className="w-full h-full col-span-10 flex flex-col divide-y">
        <div className="h-8 flex">
          <div className="flex pl-3 pr-2 items-center h-full border-r">
            <h1 className="mr-6">dfslhjfds </h1> <span>x</span>
          </div>
        </div>
        <div className="flex h-full w-full">
          <div className="h-full w-full grid grid-cols-3 pl-24 pr-24 p-10 grid-rows-2 gap-5 gap-y-10">
            {projects.map((project, index) => (
              <div key={index} className="flex flex-col h-full bg-red-100">
                <div className="flex flex-row">
                  <h1>Project {index + 1} </h1>
                  <h1>{project.title}</h1>
                </div>
                <Card className="h-full bg-[#011221] p-0 flex flex-col">
                  <CardHeader className="p-0 w-full h-2/5 bg-red-700 rounded-t-lg relative">
                    <Image src={"/next.svg"} fill alt="fjdkjfd" />
                    <div className="absolute right-1 text-red-500 top-0">
                      <IoMdArrowDropdown />
                    </div>
                  </CardHeader>
                  <CardContent className="bg-red-400 h-2/6">
                    <p>Card Content</p>
                  </CardContent>
                  <CardFooter className="h-2/6 z-10 justify-between">
                    <Button>dfdfgfggf</Button>
                    <Button>dfdfgfggf</Button>
                  </CardFooter>
                </Card>
              </div>
            ))}
          </div>
          <div className=" border-l h-full w-5 p-[2px] ">
            <div className="h-2 w-full m-auto bg-foreground"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
