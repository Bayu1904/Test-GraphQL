import React from "react";
import { Carousel } from "flowbite-react";

export default function BannerHome() {
  return (
    <div>
      <div className="h-56 md:h-128 relative -top-16">
        {/* <div className="w-96 h-56 absolute">
          <Carousel>
            <img
              src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
              alt="..."
            />
            <img
              src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
              alt="..."
            />
            <img
              src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
              alt="..."
            />
          </Carousel>
        </div> */}
        <Carousel>
          <img
            src="https://thumbs.dreamstime.com/b/horizontal-banner-hands-typing-laptop-keyboard-various-electronic-devices-symbols-programming-software-horizontal-125917922.jpg"
            alt="..."
          />
          <img
            src="https://previews.123rf.com/images/zinetron/zinetron2002/zinetron200200058/140370883-programmer-at-work-concept-banner-software-web-development-programming-concept-computer-animation-de.jpg"
            alt="..."
          />
          <img
            src="https://previews.123rf.com/images/monsitj/monsitj2005/monsitj200500032/147649194-programming-code-abstract-technology-background-of-software-developer-and-computer-script-banner-3d-.jpg"
            alt="..."
          />
        </Carousel>
      </div>
    </div>
  );
}
