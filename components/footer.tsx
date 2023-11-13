import { cn } from "@/lib/utils";
import Link from "next/link";
import { FaDiscord, FaGithub, FaLinkedin } from "react-icons/fa";
import { Fira_Code } from "next/font/google";

const firacode = Fira_Code({
  weight: "300",
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
});

const routes = [
  {
    id: 2,
    icon: FaLinkedin,
    label: "",
    href: "/di",
    float: "float-left border-l",
  },
  {
    id: 1,
    label: "",
    href: "/dashboard",
    float: "float-left border-l border-r",
    icon: FaDiscord,
  },

  {
    id: 3,
    icon: FaGithub,
    label: "@ermiasgw ",
    href: "/",
    float: "float-right border-l",
  },
];

export default function Footer() {
  return (
    <div
      className={cn(
        "hidden md:flex h-10  border-t items-center",
        firacode.className,
      )}
    >
      <h1 className="pl-5 pr-5 text-primary-foreground">Find me in:</h1>
      <div className="grow self-stretch ">
        {routes.map((route) => (
          <Link
            key={route.id}
            className={cn(
              " text-primary-foreground pl-4 pr-5 h-full flex justify-center items-center hover:text-foreground",
              route.float,
            )}
            href={route.href}
          >
            {route.label} <span className="pl-2"></span>
            <route.icon size={16} />
          </Link>
        ))}
      </div>
    </div>
  );
}
