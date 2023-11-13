import Footer from "@/components/footer";
import Header from "@/components/header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full relative bg-primary border">
      <div className="fixed top-0 w-full">
        <Header />
      </div>

      <div className=""></div>
      <div className="fixed bottom-0 w-full">
        <Footer />
      </div>
    </div>
  );
}
