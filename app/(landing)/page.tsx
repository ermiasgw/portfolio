import Link from "next/link";
import MyGame from "@/components/mygame";
import { cn } from "@/lib/utils";
import { Fira_Code } from "next/font/google";

const firacode = Fira_Code({
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
});

export default function LandingPage() {
  return (
    <div
      className={cn(
        " w-full h-full overflow-hidden grid grid-cols-2 before:absolute before:h-[50%] before:w-[80%]  before:content-[''] before:-translate-x-10 before:-translate-y-1/3 before:rounded-full before:bg-gradient-to-tr before:from-secondary-foreground before:to-transparent before:blur-2xl before:opacity-40 after:opacity-40 after:absolute after:bottom-1/3 after:right-0 after:h-[50%] after:w-[50%] after:translate-x-2 after:translate-y-1/3 after:bg-gradient-to-t after:from-secondary after:blur-2xl after:content-[''] md:before:hidden md:after:hidden ",
        firacode.className,
      )}
    >
      <div className="  pt-20 pl-10 md:pt-44 md:pl-44 col-span-2 md:col-span-1 ">
        <h1 className=" font-light text-lg">Hi all. I am</h1>
        <h1 className=" font-normal text-6xl">Ermias Gashaw </h1>
        <h1 className="text-secondary-foreground font-light text-xl mb-32 md:mb-10 ">
          {" "}
          {`>`} Full-stack Software Developer
        </h1>
        <h1 className="font-light text-base text-primary-foreground hidden md:block">
          {" "}
          {"// complete the game to continue"}
        </h1>
        <h1 className="font-light text-base text-primary-foreground">
          {"// you can also see it on my github page"}
        </h1>
        <Link
          href="https://github.com/ermiasgw"
          className=" font-medium text-base text-secondary"
        >
          const <span className=" text-secondary-foreground">githubLink</span>{" "}
          <span className=" text-foreground">=</span>{" "}
          <span className=" text-accent-foreground">{`"https://github.com/ermiasgw"`}</span>
        </Link>
      </div>
      <div className="lg:p-24 lg:pt-20 md:p-5 lg:pl-5 hidden md:block ">
        <MyGame />
      </div>
    </div>
  );
}
