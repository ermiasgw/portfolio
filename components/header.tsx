"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Fira_Code } from "next/font/google";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { IoMenu } from "react-icons/io5";
import Footer from "./footer";
import { usePathname } from "next/navigation";

const firacode = Fira_Code({
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
});

const routes = [
  {
    label: "_hello",
    href: "/",
    float: " float-left",
  },
  {
    label: "_about-me",
    href: "/about",
    float: " float-left border-l",
  },
  {
    label: "_projects",
    href: "/projects",
    float: " float-left border-r border-l",
  },
];

export default function Header() {
  const pathname = usePathname();
  return (
    <div className="h-12 w-full grid grid-cols-12 border-b items-center md:divide-x">
      <Link
        href={"/"}
        className="col-span-10 pl-5 pr-5 md:col-span-2 md:pr-0 h-full flex items-center text-primary-foreground hover:text-foreground"
      >
        ermias-gashaw
      </Link>
      <div className="grow self-stretch col-span-10 hidden md:block">
        {routes.map((route) => (
          <Link
            key={route.label}
            className={cn(
              "text-primary-foreground pl-5 pr-5 h-full flex justify-center items-center hover:text-foreground hover:border-b-2 hover:border-b-accent",
              pathname === route.href
                ? "border-b-2 border-b-accent " + route.float
                : route.float,
            )}
            href={route.href}
          >
            {route.label}
          </Link>
        ))}
      </div>
      <div className="grow self-stretch col-span-2 block md:hidden">
        <Sheet>
          <SheetTrigger className="h-full flex items-center mr-5 float-right text-xl">
            <IoMenu />
          </SheetTrigger>
          <SheetContent className="bg-[#011627] p-0">
            <SheetHeader className="w-full border-b h-12">
              <SheetTitle className=" text-primary-foreground text-sm flex items-center h-full p-5">
                ermias-gashaw
              </SheetTitle>
            </SheetHeader>
            <div className="flex flex-col divide-y border-b">
              {routes.map((route) => (
                <Link
                  key={route.label}
                  className={cn(
                    "pl-5 pt-2 pb-2 h-full flex items-center text-foreground hover:border-b-2 hover:border-b-accent font-fira",
                  )}
                  href={route.href}
                >
                  {route.label}
                </Link>
              ))}
            </div>
            <SheetFooter>
              <Footer />
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}
