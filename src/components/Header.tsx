import CV from "../assets/CV Parasochkin Vitalli - Middle Front-end.pdf";
import logo from "../assets/logo.jpg";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
const links = [
  { title: "Skills", url: "#skills" },
  { title: "Experience", url: "#experience" },
  { title: "Projects", url: "#projects" },
  { title: "Contact", url: "#contact" },
];

export default function Header() {
  const [isOpen, setOpen] = useState(false);

  const toggleMenu = () => {
    document.body.style.overflow = isOpen ? "visible" : "hidden";

    setOpen((open) => !open);
  };

  return (
    <header className="flex items-center justify-between absolute w-full top-0 left-0 py-3 px-4 bg-black z-50">
      <div className="flex items-center justify-center z-50">
        <img
          src={logo}
          alt="logo"
          width={50}
          height={50}
          className="rounded-full"
        />
      </div>
      <div className=" items-center gap-x-5 sm:flex hidden">
        <nav>
          <ul className="flex gap-x-3">
            {links.map((link) => (
              <li key={link.title}>
                <a
                  href={link.url}
                  className="relative after:absolute after:duration-300 after:block after:transition-all after:bg-gray-50 after:h-1 after:w-0 after:left-1/2 after:-bottom-1.5 after:rounded hover:after:w-full hover:after:left-0"
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a
          href={CV}
          download
          className="py-1 px-2 rounded-md bg-gray-50 text-gray-800 transition-all hover:bg-gray-400"
        >
          Download CV
        </a>
      </div>
      <div className="sm:hidden block z-50">
        <button onClick={toggleMenu} className="text-3xl ">
          {isOpen ? <IoClose /> : <RxHamburgerMenu />}
        </button>
      </div>
      <div
        className={`absolute top-0 left-0 bg-black h-screen w-full flex flex-col gap-y-3 items-center justify-center text-center transition-all duration-300 ${isOpen ? "translate-y-0" : "-translate-y-full"}`}
      >
        <nav>
          <ul className="flex flex-col gap-y-3">
            {links.map((link) => (
              <li key={link.title} onClick={toggleMenu}>
                <a
                  href={link.url}
                  className="relative after:absolute after:duration-300 after:block after:transition-all after:bg-gray-50 after:h-1 after:w-0 after:left-1/2 after:-bottom-1.5 after:rounded hover:after:w-full hover:after:left-0"
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a
          onClick={toggleMenu}
          href={CV}
          download
          className="py-1 px-2 rounded-md bg-gray-50 text-gray-800 transition-all hover:bg-gray-400"
        >
          Download CV
        </a>
      </div>
    </header>
  );
}
