import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { container } from "@/constants/tailwind_customizations";
import React from "react";

const cardData = [
  {
    id: 1,
    heading: "Offering 1",
    description:
      "This section will highlight specific details about a particular service you offer. We will write about what this offering is and how your company uses it to help clients or users achieve their desired goals.",
    link: "/",
    imageLink: "images/mission.webp",
  },
  {
    id: 2,
    heading: "Offering 2",
    description:
      "This section will highlight specific details about a particular service you offer. We will write about what this offering is and how your company uses it to help clients or users achieve their desired goals.",
    link: "/",
    imageLink: "images/mission.webp",
  },
  {
    id: 3,
    heading: "Offering 3",
    description:
      "This section will highlight specific details about a particular service you offer. We will write about what this offering is and how your company uses it to help clients or users achieve their desired goals.",
    link: "/",
    imageLink: "images/mission.webp",
  },
];

const Offerings = () => {
  return (
    <section className="w-full py-20 bg-[#fff]">
      <div
        className={`w-full ${container} flex flex-col justify-center items-center gap-16`}
      >
        <div className="w-full flex-1 flex flex-col md:flex-row justify-between md:items-center items-start gap-10 md:gap-0">
          <div className="flex-1 flex justify-start items-center">
            <h2 className="lg:text-4xl md:text-2xl text-xl font-semibold">
              Headline Describing Your Offerings Will Be Here
            </h2>
          </div>
          <div className="flex-1 flex justify-end items-center">
            <Button type="linkButton" link="/" label="View All" />
          </div>
        </div>
        <div className="w-full flex-2 flex flex-col lg:flex-row justify-center items-center">
          {cardData.map((card) => {
            const { id, ...rest } = card;
            return <Card key={id} type="offering" {...rest} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Offerings;
