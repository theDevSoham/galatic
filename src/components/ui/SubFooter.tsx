"use client";

import Button from "@/components/ui/Button";
import { container } from "@/constants/tailwind_customizations";
import React from "react";

const SubFooter = () => {
  return (
    <section className="w-full lg:h-[300px] md:h-[200px] h-[200px] relative py-60">
      <div className="w-full h-full absolute inset-0 z-2">
        <img
          src="images/mission.webp"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="w-full h-full absolute inset-0 z-4 bg-black/50">
        <div
          className={`${container} w-full h-full flex flex-col justify-center items-center text-center lg:px-[100px] gap-10`}
        >
          <h2 className="lg:text-4xl md:text-2xl text-xl font-semibold text-white lg:leading-[3rem] leading:2-rem">
            We Will Write a Convincing Call To Action to Engage Your Audience
            Here
          </h2>

          <h4 className="font-normal lg:text-lg md:text-lg text-base text-white">
            We will write a sub-headline that introduces your call to action to
            website visitors here
          </h4>

          <Button type="primary" label="Call to Action" onClick={() => {}} />
        </div>
      </div>
    </section>
  );
};

export default SubFooter;
