import { libreFranklin } from "@/assets/fonts";
import { container } from "@/constants/tailwind_customizations";
import React from "react";
import Button from "./Button";
import { Menu } from "lucide-react";

const navLinks = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "About",
    link: "/",
  },
  {
    id: 3,
    name: "Offerings",
    link: "/",
  },
  {
    id: 4,
    name: "Contact",
    link: "/",
  },
];

interface INavBar {
  selectedRouteId?: number;
}

const Navbar: React.FC<INavBar> = ({ selectedRouteId = 1 }) => {
  return (
    <>
      <nav className="w-full h-[100px] bg-transparent">
        <div
          className={`${container} w-full h-full flex justify-between items-center`}
        >
          <p
            className={`flex-1 text-left ${libreFranklin.className} font-semibold text-2xl`}
          >
            Galatic
          </p>
          <div className="flex-1 hidden lg:flex justify-evenly items-center">
            {navLinks.map((item) => (
              <a
                key={item.id}
                href={item.link}
                className={`font-medium text-[${
                  item.id === selectedRouteId ? "#6000cd" : "#000"
                }] hover:animate-[fade-link_0.3s_ease_out_forwards]`}
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="flex-1 hidden lg:flex justify-end items-center">
            <Button type="linkButton" link="/" label="Call to Action" />
          </div>

          <div className="flex-1 flex lg:hidden justify-end items-center">
            <Button type="icon" label={<Menu />} link="" />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
