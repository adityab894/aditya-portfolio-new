import React, { useEffect, useState } from "react";
import "./css/Footer.css";
const Footer = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Detect if `dark` class is present on <html>
  useEffect(() => {
    const checkDarkMode = () => {
      const isDark = document.documentElement.classList.contains("dark");
      setIsDarkMode(isDark);
    };

    checkDarkMode(); // Initial check

    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  const color1 = isDarkMode ? "101010" : "e5e7eb";
  const color2 = isDarkMode ? "e5e7eb" : "282C33";
  return (
    <>
      <div className="relative container hidden px-20 lg:mx-auto lg:grid lg:grid-cols-2 lg:content-between">
        {/* <div className="col-span-2"></div> */}
        <div className="py-2">
          <div className="button-icon lg:col-span-1">
            <div className="icon">
              <img
                className="size-8"
                src={`https://img.icons8.com/?size=100&id=12598&format=png&color=${color1}`}
                alt=""
              />
            </div>
            <a href="https://github.com/adityab894" target="blank" className="cube">
              <span className="side front">GitHub</span>
              <span className="side top">Connect with me on Github</span>
            </a>
          </div>
        </div>
        <div className="py-2">
          <div className="button-icon lg:col-span-1">
            <div className="icon">
              <img
                className="size-8"
                src={`https://img.icons8.com/?size=100&id=16166&format=png&color=${color1}`}
                alt=""
              />
            </div>
            <a
              className="cube"
              href="https://www.linkedin.com/in/aditya894/"
              target="blank"
            >
              <span className="side front">LinkedIn</span>
              <span className="side top">Lets Connect</span>
            </a>
          </div>
        </div>
      </div>
      <div className="mx-auto grid grid-cols-4 gap-5 px-15 py-5 lg:hidden">
        <div className="col-span-1"></div>
        <div className="group relative col-span-1">
          <button>
            <a className="" href="https://github.com/adityab894" target="blank">
              <img
                src={`https://img.icons8.com/?size=100&id=12598&format=png&color=${color2}`}
              />
            </a>
          </button>
          <span className="dark:bg-primary bg-2ndry-2 absolute -top-14 left-[50%] z-20 origin-left -translate-x-[50%] scale-0 rounded-lg border border-gray-300 px-3 py-2 text-sm font-bold shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
            GitHub<span></span>
          </span>
        </div>
        <div className="group relative col-span-1">
          <button>
            <a
              className=""
              href="https://www.linkedin.com/in/aditya894/"
              target="blank"
            >
              <img
                src={`https://img.icons8.com/?size=100&id=447&format=png&color=${color2}`}
              />
            </a>
          </button>
          <span className="dark:bg-primary bg-2ndry-2 absolute -top-14 left-[50%] z-20 origin-left -translate-x-[50%] scale-0 rounded-lg border border-gray-300 px-3 py-2 text-sm font-bold shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
            Linkedin<span></span>
          </span>
        </div>
      </div>
    </>
  );
};

export default Footer;
