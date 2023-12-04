import { cn } from "@/lib/utils";
import Link from "next/link";
import { FaDiscord, FaGithub, FaLinkedin } from "react-icons/fa";
import { Fira_Code } from "next/font/google";

const firacode = Fira_Code({
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
});

const routes = [
  {
    id: 2,
    icon: FaLinkedin,
    label: "",
    href: "https://www.linkedin.com/in/ermiasgw",
    float: "float-left",
  },
  {
    id: 1,
    label: "",
    href: "https://www.discordapp.com/users/ermiasgw",
    float: "float-left border-l border-r",
    icon: FaDiscord,
  },

  {
    id: 3,
    icon: FaGithub,
    label: "@ermiasgw ",
    href: "https://www.github.com/ermiasgw",
    float: "float-right border-l",
  },
];

export default function Footer() {
  return (
    <div
      className={cn("flex h-10  border-t items-center fixed bottom-0 w-full")}
    >
      <h1 className="pl-5 pr-5 text-primary-foreground border-r flex items-center h-full">
        Find me in:
      </h1>
      <div className="grow self-stretch hidden md:block ">
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

      <div className="grow self-stretch md:hidden ">
        {routes.map((route) => (
          <Link
            key={route.id}
            className={cn(
              " text-primary-foreground pl-4 pr-5 h-full flex justify-center items-center hover:text-foreground float-left border-r",
            )}
            href={route.href}
          >
            <route.icon size={16} />
          </Link>
        ))}
      </div>
    </div>
  );
}
