import type { Metadata } from "next";
import "./globals.scss";
import TopBar from "./components/TopBar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Pierce Labs",
  description: "Pierce Labs: Online Solutions Tailored for You",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <TopBar />
        {children}
      <footer className="footer">
        <p className="footer__text">&copy; Pierce Labs 2024</p>
      </footer>
      </body>
    </html>
  );
}
