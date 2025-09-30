"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";

const RecentProjects = () => {
  return (
    <div className="py-20">
      <h1 className="heading" id="projects">
        A Small Selection of{" "}
        <span className="text-purple">Recent Projects</span>
      </h1>

      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map((item) => (
          <div
            key={item.id}
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
          >
            <PinContainer
              title={item.title}
            >
              {/* Card clickable area */}
              <div
                className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10 cursor-pointer"
                onClick={() => item.link && window.open(item.link, "_blank")}
              >
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img
                    src="/bg.png"
                    alt="bgimg"
                    className="w-full h-full object-cover"
                  />
                </div>

                <img
                  src={item.img}
                  alt={item.title}
                  className="z-10 absolute bottom-0 max-w-full object-contain"
                />
              </div>

              {/* Title */}
              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h1>

              {/* Description */}
              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>

              {/* Tech stack + Repository link */}
              <div className="flex items-center justify-between mt-7 mb-3">
                {/* Tech stack icons */}
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon} alt={`icon-${index}`} className="p-2" />
                    </div>
                  ))}
                </div>

                {/* Repository link */}
                <div className="flex justify-center items-center">
                  {item.link ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 lg:text-xl md:text-xs text-sm text-purple hover:underline cursor-pointer"
                      onClick={(e) => e.stopPropagation()} // biar ga double trigger
                    >
                      <span>Repository</span>
                      <FaLocationArrow className="ms-3" color="#CBACF9" />
                    </a>
                  ) : (
                    <div className="flex items-center gap-3 lg:text-xl md:text-xs text-sm text-neutral-400">
                      <span>Repository</span>
                      <FaLocationArrow className="ms-3" color="#6B7280" />
                    </div>
                  )}
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
