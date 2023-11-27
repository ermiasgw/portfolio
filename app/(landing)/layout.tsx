import Footer from "@/components/footer";
import Header from "@/components/header";
import { Fira_Code } from "next/font/google";
import { cn } from "@/lib/utils";

const firacode = Fira_Code({
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "h-full pt-12 pb-10 relative bg-primary border",
        firacode.className,
      )}
    >
      <div className="fixed top-0 w-full">
        <Header />
      </div>

      <div>{children}</div>

      <div className="fixed bottom-0 w-full hidden md:block">
        <Footer />
      </div>
    </div>
  );
}
