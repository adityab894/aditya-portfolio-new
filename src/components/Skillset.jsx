import { motion } from "framer-motion";

const Skillset = () => {
  const skillsets = [
    {
      id: "languages",
      softUsed: ["JavaScript", "Node.js"],
      title: "Languages",
    },
    {
      id: "database",
      softUsed: ["MongoDB, SQL"],
      title: "Database",
    },
    {
      id: "tools",
      softUsed: ["VS Code", "Cursor", "Git", "GitHub", "Postman"],
      title: "Tools",
    },
    {
      id: "frameworks",
      softUsed: ["React.js", "Express.js", "TailwindCSS 4", "Bootstrap"],
      title: "Frameworks",
    },
    {
      id: "others",
      softUsed: ["HTML", "CSS", "EJS", "REST API"],
      title: "Others",
    },
  ];
  return (
    <div id="skillset">
      <div className="grid grid-cols-3 grid-rows-2 gap-2">
        {skillsets.map((skillset, index) => (
          <table>
            <motion.div
              key={skillset.id}
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.7 + index * 0.5, ease: "easeIn" }}
              className="dark:border-2ndry-2 border-primary-2 rounded border-2 p-2 text-center"
            >
              <div className="mb-2 border-b-1 font-bold">{skillset.title}</div>
              <div>{skillset.softUsed.join(", ")}</div>
            </motion.div>
          </table>
        ))}
      </div>
    </div>
  );
};

export default Skillset;
