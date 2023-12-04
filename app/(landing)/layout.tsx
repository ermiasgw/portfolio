import Footer from "@/components/footer";
import Header from "@/components/header";
import { Fira_Code } from "next/font/google";
import { cn } from "@/lib/utils";

const firacode = Fira_Code({
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
});

export const revalidate = 60;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "h-screen pt-12 pb-10 relative bg-primary border",
        firacode.className,
      )}
    >
      <div className="fixed top-0 w-full z-10 bg-primary">
        <Header />
      </div>

      <div className="h-full w-full">{children}</div>

      <div className="fixed bottom-0 w-full hidden md:block">
        <Footer />
      </div>
    </div>
  );
}
