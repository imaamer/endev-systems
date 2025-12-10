import "./globals.css";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";

export const metadata = {
  title: "Endev Systems",
  description: "Engineering & Technology Solutions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar /> {/* ALWAYS rendered */}
        {children} {/* The page */}
        <Footer /> {/* ALWAYS rendered */}
      </body>
    </html>
  );
}
