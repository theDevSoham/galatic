import Button from "@/components/ui/Button";
import { container } from "@/constants/tailwind_customizations";
import React from "react";

const Header = () => {
  return (
    <header className={`w-full ${container}`}>
      <div
        className={`w-full lg:px-[165px] md:px-[125px] px-[10px] lg:py-[100px] md:py-[60px] py-[20px] flex flex-col justify-center items-center gap-10 text-center`}
      >
        <p
          className={`text-[#6000cd] font-semibold lg:text-xl md:text-[1rem] text-[0.8rem] uppercase`}
        >
          PREFIX DESCRIBING WHAT YOUR BUSINESS DOES WILL BE HERE
        </p>
        <h1
          className={`font-semibold lg:text-5xl md:text-3xl text-2xl lg:leading-[4rem]`}
        >
          We Will Write a Headline Highlighting Your Business Offerings Here
        </h1>
        <h2
          className={`font-normal lg:text-xl md:text-[1rem] text-[0.8rem] text-[#54595F]`}
        >
          We will write a persuasive introduction for you or your company. This
          can be about your products, offerings, or simply why you exist.
        </h2>
        <div>
          <Button type="primary" label="Call to Action" />
        </div>
      </div>
    </header>
  );
};

export default Header;
