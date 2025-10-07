import theapi from "../Images/projectPics/theapi.png";
import port from "../Images/projectPics/port.png";
import apiconf from "../Images/projectPics/apiconf.png";
import soon from "../../assets/soon.webp";
import mcp from "../Images/projectPics/mcp.png";
import mental from "../Images/projectPics/mental.png";
import krypt from "../Images/projectPics/krypt.png";

const fullstack = [
  {
    id: "001",
    softUsed: ["react.js", "css", "tailwind css", "framer motion"],
    title: "Portfolio 2.0",
    description: "The portfolio you are viewing right now",
    image: port,
    link: "https://github.com/adityab894/aditya-portfolio-new",
  },
  {
    id: "002",
    softUsed: [
      "express.js",
      "node.js",
      "mongodb",
      "html ",
      "next.js",
      "css",
    ],
    title: "THE API CONF",
    description: "It is the conference website that provides info for Conf",
    image: apiconf,
    link: "https://github.com/adityab894/postman-api-conf",
  },
  {
    id: "003",
    softUsed: ["tailwind css", "react.js", "css", "mongodb", "node.js"],
    title: "THE API COMMUNITY",
    description: "A website to represent the api community",
    image: theapi,
    link: "https://github.com/adityab894/Postman",
  },
  {
    id: "004",
    softUsed: [" vite", " react.js", " css"],
    title: "HappyFy - Mental Wellness App",
    description: "😊 A mental wellness app built with Vite and React.js to promote positivity and mindfulness.",
    image: mental,
    link: "https://github.com/adityab894/Happyfy",
  },
  {
    id: "005",
    softUsed: [" Nextjs","Javascript" ,"API", "OPENAI"],
    title: "MCP Chatbot - Composio + Local MCP servers",
    description: "🧠 AI-powered chat interface built with Next.js that connects to local and remote MCP servers",
    image: mcp,
    link: "https://github.com/adityab894/chat-nextjs-client-mcp",
  },
  {
    id: "006",
    softUsed: [" Reactjs","Javascript" ,"Solidity", "Nodejs"],
    title: "Krypt DApp - Decentralized Application",
    description: "🧠 A decentralized application built with React.js and Solidity for secure transactions.",
    image: krypt,
    link: "https://github.com/adityab894/krypt-dapp",
  },
  {
    id: "007",
    softUsed: [" techn is loading", " please be patient "],
    title: "Coming soon",
    description: "Yes, I am working on it",
    image: soon,
    link: "#",
  },
];

const frontend = [
  {
    id: "001",
    softUsed: [" techn is loading", " please be patient "],
    title: "Coming soon",
    description: "Yes, I am working on it",
    image: soon,
    link: "#",
  },
];

export { fullstack, frontend };
