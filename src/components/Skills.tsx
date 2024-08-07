import Title from "./Title.tsx";
import jsLogo from "../assets/icon-javscript.png";
import tsLogo from "../assets/icon-typescript.png";
import reactLogo from "../assets/icon-react.png";
import sassLogo from "../assets/icon-sass.png";
import twLogo from "../assets/icon-tailwindcss.png";
import gitLogo from "../assets/icon-git.png";
import muiLogo from "../assets/icon-mui.png";
import rtLogo from "../assets/icon-redux.svg";
import cypressLogo from "../assets/icon-cypress.svg";
import rxjsLogo from "../assets/icon-rxjs.png";
import reactHookFormLogo from "../assets/icon-react-hook-form.svg";
import jestLogo from "../assets/icon-jest.png";
import formikLogo from "../assets/icon-formik.png";
import bootstrapLogo from "../assets/icon-bootstrap.png";
import rtlLogo from "../assets/icon-react-testing-library.png";
import headlessUILogo from "../assets/icon-headless-ui.png";

const skills = [
  { img: jsLogo, title: "JavaScript" },
  { img: tsLogo, title: "TypeScript" },
  { img: reactLogo, title: "React" },
  { img: sassLogo, title: "SASS/SCSS" },
  { img: twLogo, title: "Tailwind" },
  { img: gitLogo, title: "Git" },
  { img: muiLogo, title: "Material UI" },
  { img: rtLogo, title: "Redux" },
  { img: cypressLogo, title: "Cypress" },
  { img: rxjsLogo, title: "RxJS" },
  { img: reactHookFormLogo, title: "React Hook Form" },
  { img: jestLogo, title: "Jest" },
  { img: formikLogo, title: "Formik" },
  { img: bootstrapLogo, title: "Bootstrap" },
  { img: rtlLogo, title: "React testing library" },
  { img: headlessUILogo, title: "Headless UI" },
];

export default function Skills() {
  return (
    <div className="bg-gray-900 px-4 md:py-10 py-6" id="skills">
      <Title>Skills</Title>
      <p className="text-center">
        The skills, tools and technologies I am really good at:
      </p>
      <div className="grid md:grid-cols-8 sm:grid-cols-4 grid-cols-3 md:mt-6 mt-4 md:gap-6 gap-4">
        {skills.map((item) => (
          <div
            className="flex flex-col items-center gap-y-2 justify-between"
            key={item.title}
          >
            <img src={item.img} alt={item.title} width={60} height={60} />
            <span className="text-center">{item.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
