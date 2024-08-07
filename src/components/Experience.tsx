import Title from "./Title.tsx";
import vindevsLogo from "../assets/vindevsLogo.png";

const experienceBullets = [
  "mastered the knowledge and understanding of SDLC,",
  "initiated and led technology discussions with the stakeholders,",
  "conducted deep and frequent discussions with designers to improve the project,",
  "maintained close communication on new features with back-end developers,",
  "worked on website performance optimization,",
  "mentored less experienced teammates.",
];
export default function Experience() {
  return (
    <div
      className="px-4 flex flex-col items-center md:py-10 py-6"
      id="experience"
    >
      <Title>Experience</Title>
      <p>Here is a quick summary of my experiences:</p>
      <div className="grid sm:grid-cols-[20%_60%_20%] sm:gap-x-4 sm:gap-y-0 gap-y-4 md:p-8 p-4 rounded-md bg-gray-700 mt-2 md:w-5/6 w-full">
        <div className="flex justify-between sm:items-start items-center">
          <img src={vindevsLogo} alt="vindevs logo" />
          <p className="sm:hidden block">'21 - till present</p>
        </div>
        <div className="flex flex-col ">
          <h4 className="font-medium text-xl mb-2">Front-End Developer</h4>
          <ul>
            {experienceBullets.map((item, i) => (
              <li key={i} className="list-disc ms-4">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="sm:flex hidden">
          <p>'21 - till present</p>
        </div>
      </div>
    </div>
  );
}
