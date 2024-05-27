
import { Inter } from "next/font/google";
import "./styles/globals.css";
import Navbar from "./components/Navbar";
const inter = Inter({ subsets: ["latin"] });
import Footer from "./components/Footer";



export const metadata = {
  
  description: "Perth Garden and Lawn Services",
};



export default function RootLayout({ children }) {
  return (<html lang="en"> <body>
   
    <div className="container">
      <div className={inter.className}>
        <Navbar />
        <div className="content-wrap"> {children}</div>
        <Footer />
      </div>
    </div></body></html>
  );
}
