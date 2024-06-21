import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SessionWrapper from "@/components/SessionWrapper";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Buy Me A Chai - Fund your projects with Chai",
  description: "This website is a crowd funding platform for creators.",
};
export default function RootLayout({ children }) {
  const maintenance = false;
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="jEAJb--5CmKi8Vki01te7J0SAjEz6dO-trepN8mHnto" />
      </head>
      <body className='text-white bg-black bg-[radial-gradient(circle_500px_at_50%_200px,#00454a,transparent)]'>
        <SessionWrapper>
          {maintenance ? (
            <div class="flex items-center justify-center h-screen w-screen antialiased text-center bg-stone-100 text-gray-800 font-openSans">
              <article class="mx-auto max-w-screen-md lg:p-12 items-center">
                <h1 class="lg:text-6xl text-4xl  mb-12">We&rsquo;ll be back soon!</h1>
                <div>
                  <p class="lg:text-xl px-2 lg:px-0 text-gray-800 mb-8">Sorry for the inconvenience. We&rsquo;re performing some maintenance at the moment. </p>
                  <p class="lg:text-4xl text-2xl flex items-center justify-center">&mdash; BuyMeAChai<Image priority={true} width={70} height={70} unoptimized className="drop-shadow-[0px_0px_5px_#a1a1a1] lg:w-[70px] lg:h-[70px] w-[50px] h-[50px]" src="/coffee.gif" alt="Coffee Gif" /></p>
                </div>
              </article>
            </div>
          ) : (

            <>
              <Navbar />
              <div className="min-h-screen text-white bg-black bg-[radial-gradient(circle_500px_at_50%_200px,#00454a,transparent)]">
                {children}
              </div>
              <Footer />
            </>
          )}
        </SessionWrapper>
      </body>
    </html>
  );
}
