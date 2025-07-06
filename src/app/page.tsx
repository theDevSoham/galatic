import Header from "@/components/pages/Homepage/Header";
import Offerings from "@/components/pages/Homepage/Offerings";
import ParralaxScroll from "@/components/pages/Homepage/ParralaxScroll";
import ShortAbout from "@/components/pages/Homepage/ShortAbout";
import Navbar from "@/components/ui/Navbar";
import React from "react";

const App = () => {
  return (
    <main className="w-full">
      <Navbar />
      <Header />
      <ParralaxScroll />
      <Offerings />
      <ShortAbout />
    </main>
  );
};

export default App;
