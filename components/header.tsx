import { cn } from "@/lib/utils";
import Link from "next/link";
import { Fira_Code } from "next/font/google";

const firacode = Fira_Code({
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
});

const routes = [
  {
    label: "_hello",
    href: "/",
    float: " float-left border-l",
  },
  {
    label: "_about-me",
    href: "/",
    float: " float-left border-l",
  },
  {
    label: "_projects",
    href: "/",
    float: " float-left border-r border-l",
  },
  {
    label: "_contact-me",
    href: "/",
    float: " float-right border-l",
  },
];

export default function Header() {
  return (
    <div className={cn("h-12 flex border-b items-center", firacode.className)}>
      <Link
        href={"/"}
        className="pl-7  mr-24 text-primary-foreground hover:text-foreground"
      >
        ermias-gashaw
      </Link>
      <div className="grow self-stretch ">
        {routes.map((route) => (
          <Link
            key={route.label}
            className={cn(
              "text-primary-foreground pl-5 pr-5 h-full flex justify-center items-center hover:text-foreground hover:border-b-2 hover:border-b-accent",
              route.float,
            )}
            href={route.href}
          >
            {route.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
