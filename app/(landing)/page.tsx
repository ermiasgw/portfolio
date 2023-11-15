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
        "w-full h-full grid grid-cols-2 overflow-hidden ",
        firacode.className,
      )}
    >
      <div className=" pt-36 pl-20">
        <div className=" h-full w-full">
          <h1 className=" font-light text-lg">Hi all. I am</h1>
          <h1 className=" font-normal text-6xl">Ermias Gashaw </h1>
          <h1 className="text-secondary font-light text-2xl mb-10 ">
            {" "}
            {`>`} Full-stack Software Developer
          </h1>
          <h1 className="font-light text-base text-primary-foreground ">
            {" "}
            {"// complete the game to continue"}
          </h1>
          <h1 className="font-light text-base text-primary-foreground">
            {"// you can also see it on my github page"}
          </h1>
          <Link href="/" className=" font-medium text-base text-secondary">
            const <span className=" text-secondary-foreground">githubLink</span>{" "}
            <span className=" text-foreground">=</span>{" "}
            <span className=" text-accent-foreground">{`"fdsdfs"`}</span>
          </Link>
        </div>
      </div>
      <div className="p-5 ">
        <MyGame />
      </div>
    </div>
  );
}
