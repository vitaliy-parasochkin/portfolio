import personPicture from "../assets/person.jpg";
import { MdExpandMore } from "react-icons/md";

export default function Greeting() {
  return (
    <div className="grid md:grid-cols-[60%_40%] grid-cols-[100%] items-center md:gap-x-6 gap-x-2 ps-4 md:pe-20 pe-4 md:h-screen h-full md:py-0 py-20 relative">
      <div className="flex flex-col md:gap-y-10 gap-y-2 md:text-left text-center">
        <h2 className="lg:text-6xl md:text-5xl sm:text-4xl text-3xl font-bold">
          Hi, I'm Vitalii👋
        </h2>
        <p className="text-gray-300 md:text-xl text-base">
          I'm a front-end-developer. With 3 years of experience in web
          development my career covers a variety of projects in developing and
          implementing new functionality for e-commerce and business management
          systems. I am constantly looking for new challenges in my professional
          development and this is what makes me grow professionally and
          personally.
        </p>
      </div>
      <div className="flex items-center justify-center md:mt-0 mt-4">
        <div className="relative z-10 md:w-auto w-2/3">
          <div className="absolute bg-gray-600 w-full h-full left-10 top-10 -z-10 rounded"></div>
          <div className="absolute bg-black w-full h-full left-2 top-2 -z-10 rounded"></div>
          <img src={personPicture} alt="person picture" className="rounded" />
        </div>
      </div>
      <a
        href="#skills"
        className="absolute bottom-2 left-1/2 text-6xl animate-bounce-down md:block hidden"
      >
        <MdExpandMore />
      </a>
    </div>
  );
}
