import Header from "@/components/pages/Homepage/Header";
import Offerings from "@/components/pages/Homepage/Offerings";
import ParralaxScroll from "@/components/pages/Homepage/ParralaxScroll";
import ShortAbout from "@/components/pages/Homepage/ShortAbout";
import SubFooter from "@/components/ui/SubFooter";
import Testimonials from "@/components/pages/Homepage/Testimonials";
import ValueProposition from "@/components/pages/Homepage/ValueProposition";
import Navbar from "@/components/ui/Navbar";
import React from "react";
import Footer from "@/components/ui/Footer";

const App = () => {
  return (
    <main className="w-full">
      <Navbar />
      <Header />
      <ParralaxScroll />
      <Offerings />
      <ShortAbout />
      <ValueProposition />
      <Testimonials />
      <SubFooter />
      <Footer />
    </main>
  );
};

export default App;
