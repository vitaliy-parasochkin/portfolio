import Title from "./Title.tsx";
import personPicture from "../assets/greetingImage.png";

export default function About() {
  return (
    <div className="bg-gray-900 px-4 py-6 md:py-10" id="about">
      <Title>About me</Title>
      <div className="grid md:grid-cols-2 grid-cols-1 md:gap-x-6 gap-x-0 md:gap-y-0 gap-y-6">
        <div className="flex items-center justify-center pb-12 md:order-1 order-2">
          <div className="relative z-10">
            <img src={personPicture} alt="person picture" className="rounded" />
          </div>
        </div>
        <div className="flex flex-col gap-y-2 md:order-2 order-1 md:text-left text-center">
          <h2>Curious about me? Here you have it:</h2>
          <p>
            I'm a passionate, self-proclaimed designer who specializes in full
            stack development (React.js & Node.js). I am very enthusiastic about
            bringing the technical and visual aspects of digital products to
            life. User experience, pixel perfect design, and writing clear,
            readable, highly performant code matters to me.
          </p>
          <p>
            I'm a passionate, self-proclaimed designer who specializes in full
            stack development (React.js & Node.js). I am very enthusiastic about
            bringing the technical and visual aspects of digital products to
            life. User experience, pixel perfect design, and writing clear,
            readable, highly performant code matters to me.
          </p>
          <p>
            I'm a passionate, self-proclaimed designer who specializes in full
            stack development (React.js & Node.js). I am very enthusiastic about
            bringing the technical and visual aspects of digital products to
            life. User experience, pixel perfect design, and writing clear,
            readable, highly performant code matters to me.
          </p>
          <p>
            I'm a passionate, self-proclaimed designer who specializes in full
            stack development (React.js & Node.js). I am very enthusiastic about
            bringing the technical and visual aspects of digital products to
            life. User experience, pixel perfect design, and writing clear,
            readable, highly performant code matters to me.
          </p>
        </div>
      </div>
    </div>
  );
}
