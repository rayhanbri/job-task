import Image from "next/image";
import Navbar from "./components/Navbar.jsx"
import "./globals.css"
import Hero from "./components/Hero.jsx";

export default function Home() {
  return (
   <div className="bg-color">
    <Navbar className="bg-color"></Navbar>
    <Hero></Hero>
   </div>
  );
}
