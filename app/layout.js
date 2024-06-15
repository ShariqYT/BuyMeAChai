import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SessionWrapper from "@/components/SessionWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Buy Me A Chai - Fund your projects with Chai",
  description: "This website is a crowd funding platform for creators.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='text-white bg-black bg-[radial-gradient(circle_500px_at_50%_200px,#00454a,transparent)]'>
        <SessionWrapper>
          <Navbar />
          <div className="min-h-screen text-white bg-black bg-[radial-gradient(circle_500px_at_50%_200px,#00454a,transparent)]">
            {children}
          </div>
          <Footer />
        </SessionWrapper>
      </body>
    </html>
  );
}
