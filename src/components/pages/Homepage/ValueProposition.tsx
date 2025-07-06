import { container } from "@/constants/tailwind_customizations";
import React from "react";
import { Check } from "lucide-react";

const valueProposition = [
  {
    id: 1,
    title: "Unique Value Proposition 1",
    description:
      "In this part, we will write about what makes your business unique and the value people get from using your products or services over competitors.",
  },
  {
    id: 2,
    title: "Unique Value Proposition 2",
    description:
      "In this part, we will write about what makes your business unique and the value people get from using your products or services over competitors.",
  },
  {
    id: 3,
    title: "Unique Value Proposition 3",
    description:
      "In this part, we will write about what makes your business unique and the value people get from using your products or services over competitors.",
  },
];

const ListIndicator = () => (
  <div className="flex items-center justify-center lg:w-10 lg:h-10 w-6 h-6 rounded-full bg-[#f1f5f9]">
    <div className="flex items-center justify-center lg:w-5 lg:h-5 w-3 h-3 rounded-full bg-[#6000cd]">
      <Check className="w-3 h-3 text-white" strokeWidth={3} />
    </div>
  </div>
);

const ValueProposition = () => {
  return (
    <section className="w-full bg-[#fff]">
      <div
        className={`${container} w-full flex flex-col-reverse lg:flex-row lg:py-16 py-6 gap-10 md:gap-2`}
      >
        <div className="flex-1 flex flex-col justify-center items-start gap-4 lg:gap-8">
          <h2 className="lg:text-4xl md:text-2xl text-xl font-semibold">
            Headline Describing Your Unique Value Propositions Will Be Here
          </h2>

          <ul className="flex flex-col gap-4">
            {valueProposition.map((item) => (
              <li
                key={item.id}
                className="flex justify-center items-start gap-4"
              >
                <span>
                  <ListIndicator />
                </span>
                <span className="flex flex-col lg:gap-4 gap-2">
                  <h2 className="font-semibold lg:text-2xl md:text-xl text-base">
                    {item.title}
                  </h2>
                  <p className="font-normal lg:text-lg md:text-sm text-sm text-[#54595F]">
                    {item.description}
                  </p>
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:flex-1 flex-1 rounded-lg overflow-hidden flex justify-end items-center">
          <div className="lg:w-[600px] w-full rounded-lg overflow-hidden aspect-[3/2] lg:aspect-square">
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
      </div>
    </section>
  );
};

export default ValueProposition;
