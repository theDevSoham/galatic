import { container } from "@/constants/tailwind_customizations";
import React from "react";

const benefits = [
  {
    index: "01",
    title: "Benefit 1",
    description:
      "In this part, we will write about the benefits users derive from choosing your company product or services.",
  },
  {
    index: "02",
    title: "Benefit 2",
    description:
      "In this part, we will write about the benefits users derive from choosing your company product or services.",
  },
  {
    index: "03",
    title: "Benefit 3",
    description:
      "In this part, we will write about the benefits users derive from choosing your company product or services.",
  },
];

const ShortAbout = () => {
  return (
    <section className="w-full bg-[#f1f5f9] lg:py-10 py-4">
      <div className={`${container} lg:p-8 px-6 py-15 flex flex-col lg:gap-16`}>
        <div className="flex-2 flex flex-col lg:flex-row gap-10 md:gap-6">
          <div className="lg:flex-1 flex-1 rounded-lg overflow-hidden flex justify-start items-center">
            <div className="lg:w-[517px] w-full rounded-lg overflow-hidden aspect-[3/2] lg:aspect-square">
              <img
                src="images/mission.webp"
                alt=""
                width={560}
                height={560}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="lg:flex-1 flex-2 flex flex-col gap-10 justify-center items-start">
            <h2 className="lg:text-4xl md:text-2xl text-xl font-semibold">
              Short Headline for Company About Section Will Be Here
            </h2>
            <h3 className="font-normal lg:text-xl md:text-lg text-base text-[#54595F]">
              In this part, we will introduce you or your business to website
              visitors. We’ll write about you, your organization, the products
              or services you offer, and why your company exists. For this part,
              we will write an additional introduction of yourself or your
              business. This can tell about how you helped clients achieve their
              desired results.
            </h3>
            <a href="#">
              <span className="text-purple-700 font-semibold text-sm hover:underline inline-flex items-center">
                Learn More <span className="ml-1">→</span>
              </span>
            </a>
          </div>
        </div>
        <div className="flex-1 flex flex-col lg:flex-row">
          {benefits.map((item, index, arr) => (
            <article
              key={item.index}
              className={`flex flex-col justify-center items-start gap-4 ${
                index !== arr.length - 1
                  ? "lg:border-r-1 lg:border-r-[#8b26ff] lg:border-b-0 border-b-1 border-b-[#8b26ff]"
                  : ""
              } p-5`}
            >
              <p className="lg:text-xl text-base font-semibold text-[#6000cd]">
                {item.index}
              </p>
              <p className="lg:text-3xl text-xl font-semibold">{item.title}</p>
              <p className="text-sm font-normal text-[#54595F]">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShortAbout;
