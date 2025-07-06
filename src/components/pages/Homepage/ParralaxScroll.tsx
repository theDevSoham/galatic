import React from "react";

const ParralaxScroll = () => {
  return (
    <div className="relative lg:h-[500px] md:h-[400px] h-[200px] overflow-hidden">
      <div className="parallax-bg absolute top-0 left-0 w-full h-full bg-cover bg-center z-[-1]" />
    </div>
  );
};

export default ParralaxScroll;
