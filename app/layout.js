import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar/Navbar";
import LeftNav from "./Components/LeftNav/LeftNav";
import Categories from "./Components/Categories/Categories";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dua & Ruqyah",
  description: "Dua and Ruqyah collection",
};

export default function RootLayout({ children }) {
  return (
    <html className="bg-slate-200" lang="en">
      <body className={`${inter.className}`}>
        <div>
          <div className="myContainer">
            <div className="leftNav">
              <LeftNav></LeftNav>
            </div>

            <div className="navBar">
              <Navbar></Navbar>
            </div>            
            <div className="h-fit">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
