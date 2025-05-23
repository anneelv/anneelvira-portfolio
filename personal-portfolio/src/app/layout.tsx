// import Icons
import "bootstrap-icons/font/bootstrap-icons.css";
import "boxicons/css/boxicons.css";

// import bootstrap
import "bootstrap/dist/css/bootstrap.css";

//import glightbox
import "glightbox/dist/css/glightbox.css";

import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BackToTopBtn from "./components/BackToTopBtn";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Personal Profile",
  description: "Generated by create next app",
};

/* PUT SOETHING THAT IS GOING TO BE STATIC AN SHARED ACROSS THE WEB HERE
    {children} -> the body web page that will change based on the content
*/
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${raleway.variable}`}>
        <Header />
        {children}
        <Footer />
        <BackToTopBtn />
      </body>
    </html>
  );
}
