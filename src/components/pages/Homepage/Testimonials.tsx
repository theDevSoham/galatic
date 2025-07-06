"use client";

import { container } from "@/constants/tailwind_customizations";
import React from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    testimonial:
      "We will write a hypothetical testimonial from a satisfied customer. You can replace this with actual testimonials from your clients. Testimonials are a great way to inspire potential customers to trust you.",
    author: "Testimonial Author Name",
    avatar: "images/mission.webp",
  },
  {
    id: 2,
    testimonial:
      "We will write a hypothetical testimonial from a satisfied customer. You can replace this with actual testimonials from your clients. Testimonials are a great way to inspire potential customers to trust you.",
    author: "Testimonial Author Name",
    avatar: "images/mission.webp",
  },
  {
    id: 3,
    testimonial:
      "We will write a hypothetical testimonial from a satisfied customer. You can replace this with actual testimonials from your clients. Testimonials are a great way to inspire potential customers to trust you.",
    author: "Testimonial Author Name",
    avatar: "images/mission.webp",
  },
  {
    id: 4,
    testimonial:
      "We will write a hypothetical testimonial from a satisfied customer. You can replace this with actual testimonials from your clients. Testimonials are a great way to inspire potential customers to trust you.",
    author: "Testimonial Author Name",
    avatar: "images/mission.webp",
  },
];

const Testimonials = () => {
  return (
    <section className="w-full bg-[#f1f5f9] lg:py-16 lg:py-24 py-10">
      <div
        className={`${container} w-full flex flex-col justify-center items-center lg:gap-20 gap-6`}
      >
        <h2 className="lg:text-4xl md:text-2xl text-xl font-semibold">
          Short Heading for Testimonials Section Will be here
        </h2>

        <div className="w-full grid lg:grid-cols-2 grid-cols-1 lg:gap-16 gap-8">
          {testimonials.map((article) => (
            <article
              key={article.id}
              className="flex-1 flex flex-col justify-center items-start gap-4"
            >
              <Quote className="w-[30px] h-[30px] text-[#6000cd] scale-x-[-1]" />
              <p className="font-normal lg:text-lg md:text-lg text-base text-[#54595F] text-left">
                &ldquo;{article.testimonial}&rdquo;
              </p>
              <div className="flex gap-6 items-center">
                <div className="w-8 h-8 rounded-full overflow-hidden">
                  <img
                    src={article.avatar}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="font-medium lg:text-md md:text-md text-sm">
                  {article.author}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
