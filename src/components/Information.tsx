import Title from "./Title.tsx";
import { IoMailOutline } from "react-icons/io5";
import { AiFillLinkedin } from "react-icons/ai";
import { BsTelegram } from "react-icons/bs";

export default function Information() {
  return (
    <div
      className="md:py-10 py-6 px-4 flex flex-col items-center md:text-left text-center"
      id="contact"
    >
      <Title>Get in touch</Title>
      <p>
        What’s next? Feel free to reach out to me if you're looking for a
        developer, have a query, or simply want to connect.
      </p>
      <a
        href="mailto:parasochkinvitaliy@gmail.com"
        className="sm:text-2xl text-xl gap-x-2 mt-3 font-medium flex items-center hover:underline"
      >
        <IoMailOutline className="text-4xl pt-1" />
        parasochkinvitaliy@gmail.com
      </a>
      <div className="flex flex-col items-center gap-y-2 mt-3">
        You may also find me on these platforms!
        <div className="flex gap-x-4 text-2xl">
          <a
            href="https://www.linkedin.com/in/parasochkin-vitalii/"
            target="_blank"
          >
            <AiFillLinkedin />
          </a>
          <a href="https://t.me/parasochkin" target="_blank">
            <BsTelegram />
          </a>
        </div>
      </div>
    </div>
  );
}
