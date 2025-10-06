import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ContactMini = ({ htitle, container, container2 }) => {
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

  // const color = isDarkMode ? "282C33" : "e5e7eb";

  const color = isDarkMode ? "e5e7eb" : "282C33";
  const contact = [
    {
      app: "Telegram",
      uid: "adityab894",
      logo: `https://img.icons8.com/?size=100&id=TCnKnYZFoOzM&format=png&color=${color}`,
      link: "https://t.me/adityab894",
    },
    {
      app: "Discord",
      uid: "adityabisht92092",
      logo: `https://img.icons8.com/?size=100&id=25627&format=png&color=${color}`,
      link: "https://discord.com/users/adityabisht92092",
    },
    {
      app: "mail",
      uid: "adityab894@gmail.com",
      logo: `https://img.icons8.com/?size=100&id=QqtDTGEho4jP&format=png&color=${color}`,
      link: "mailto:adityab894@gmail.com",
    },
  ];

  return (
    <>
      <div>
        <div className="mx-auto px-10">
          <motion.p
            animate={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
            className="py-5 text-lg"
          >
            I'm looking forward to being a part of your team! Let me help you
            develop your ideas into an internet reality.
          </motion.p>
          <table className="border-2ndary-2 table-auto p-3">
            <tbody className="">
              <div className="rounded-lg border-2 hover:rounded-xl">
                {contact.map((entry, index) => (
                  <tr key={index}>
                    <td className="p-3">
                      <div className="h-7 w-7 flex-shrink-0">
                        <img
                          className="fill-primary h-full w-full object-contain"
                          src={entry.logo}
                          alt={entry.app}
                        />
                      </div>
                    </td>
                    <td>&nbsp;{entry.app} </td>
                    <td className="hover:text-lhilit-1 hover:dark:text-dhilit-1 p-3 hover:animate-bounce hover:text-2xl">
                      <a href={entry.link} target="_blank" rel="">
                        {entry.uid}
                      </a>
                    </td>
                  </tr>
                ))}
              </div>
            </tbody>
          </table>
        </div>
        {htitle !== "contact" && (
          <div className="contactmebutton relative pt-10 text-right">
            <div className="border-lhilit-1 dark:border-dhilit-1 group relative inline-block border-2 text-sm font-medium">
              <Link to="/contact" className="size-4">
                <span className="line dark:bg-primary bg-2ndry-1 size-3"></span>
                <div className="dark:bg-primary px-3 py-3">Other...</div>
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ContactMini;
