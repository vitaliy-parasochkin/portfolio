import Title from "./Title.tsx";
import Badge from "./Badge.tsx";
import { FaRegShareFromSquare } from "react-icons/fa6";
import reactProductImg from "../assets/example react-products.png";
import videoChat from "../assets/video chat example.png";

const projectsInfo = [
  {
    projectBullets: [
      "API requests to get products",
      "Detailed product page",
      "Adding products to the list of favorites",
      "Adding a product to the cart",
      "Ability to view product category",
    ],
    projectTools: ["React", "Typescript", "Redux Toolkit", "Vite", "Tailwind"],
  },
  {
    projectBullets: [
      "🌐 Video chat development using NextJS 14 and Typescript.",
      "🤝 Implementation of real-time interaction using SocketIO.",
      "🔐 User authentication with AuthJS using Google, Github and Credentials providers.",
      "🎥 Using PeerJS to create a WebRTC connection and transfer video and audio between users.",
      "💅 Beautiful design using TailwindCSS. Dark and light themes.",
      "🧾 Using Prisma with MongoDB.",
      "🛠️ Creating a server using Express & Typescript.",
      "➕ middleware, server actions, form validation, hooks etc...",
    ],
    projectTools: [
      "React",
      "Typescript",
      "Next.js",
      "Zustand",
      "Tailwind",
      "socket.IO",
    ],
  },
];

export default function Projects() {
  return (
    <div
      className="bg-gray-900 flex flex-col items-center px-4 md:py-10 py-6"
      id="projects"
    >
      <Title>Pet-projects</Title>
      <p className="mb-4">Some of the my pet-projects I have built:</p>
      <div className="flex flex-col gap-y-4">
        <div className="grid md:grid-cols-2 grid-cols-1 rounded-md bg-gray-700 ">
          <div className="bg-gray-600 md:p-10 p-4 md:rounded-bl-md rounded-tl-md md:rounded-tr-none rounded-tr-md flex items-center">
            <img
              src={reactProductImg}
              alt="react products img"
              className="rounded"
            />
          </div>
          <div className="md:p-10 p-4 flex flex-col">
            <h4 className="font-medium text-xl">React products</h4>
            <span>A small online store with functionality:</span>

            <ul>
              {projectsInfo[0].projectBullets.map((item, i) => (
                <li key={i} className="list-disc ms-4">
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex gap-2 mt-4 flex-wrap">
              {projectsInfo[0].projectTools.map((item, i) => (
                <Badge key={i}>{item}</Badge>
              ))}
            </div>
            <div className="flex flex-col items-start gap-y-2 mt-4 ">
              <a
                href="https://github.com/vitaliy-parasochkin/react-products"
                target="_blank"
                className="flex items-center gap-x-1 hover:underline"
              >
                Repository <FaRegShareFromSquare />
              </a>
              <a
                href="https://vitaliy-parasochkin.github.io/react-products/"
                target="_blank"
                className="flex items-center gap-x-1 hover:underline"
              >
                Site <FaRegShareFromSquare />
              </a>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 rounded-md bg-gray-700">
          <div className="md:p-10 p-4 flex flex-col">
            <h4 className="font-medium text-xl">Video chat</h4>
            <span>Video chat with the functionality:</span>

            <ul>
              {projectsInfo[1].projectBullets.map((item, i) => (
                <li key={i} className="list-disc ms-4">
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex gap-2 mt-4 flex-wrap">
              {projectsInfo[1].projectTools.map((item, i) => (
                <Badge key={i}>{item}</Badge>
              ))}
            </div>
            <div className="flex flex-col items-start gap-y-2 mt-4 ">
              <a
                href="https://github.com/vitaliy-parasochkin/video-chat-client"
                target="_blank"
                className="flex items-center gap-x-1 hover:underline"
              >
                Repository <FaRegShareFromSquare />
              </a>
              <a
                href="https://video-chat-by-pv.vercel.app/"
                target="_blank"
                className="flex items-center gap-x-1 hover:underline"
              >
                Site <FaRegShareFromSquare />
              </a>
            </div>
          </div>
          <div className="bg-gray-600 md:p-10 p-4 md:rounded-br-md rounded-tr-md md:rounded-tl-none rounded-tl-md flex items-center">
            <img src={videoChat} alt="video chat img" className="rounded" />
          </div>
        </div>
      </div>
    </div>
  );
}
