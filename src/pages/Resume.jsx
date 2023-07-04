import {
    Biotech,
    Bookmark,
    Construction,
    School,
    Work,
} from "@mui/icons-material";

export default function Resume() {
    return (
        <div className="page-body">
            <div className="container">
                <h1 className="main-title">Resume</h1>
                <div className="resume-wrapper">
                    <div className="resume-block">
                        <h3 className="resume-title submain-title">
                            <School /> Education
                        </h3>
                        <ul className="resume-list">
                            <li className="resume-list-item">
                                <p className="resume-date">2018 - 2022</p>
                                <p className="resume-name">
                                    <span>
                                        VASYL STUS DONETSK NATIONAL UNIVERSITY -
                                    </span>
                                    <span> BACHELOR`S DEGREE.</span>
                                </p>
                                <p className="resume-area">
                                    Programme Subject Area Computer Science
                                </p>
                            </li>
                        </ul>
                    </div>

                    <div className="resume-block">
                        <h3 className="resume-title submain-title">
                            <Work /> Experience
                        </h3>
                        <ul className="resume-list">
                            <li className="resume-list-item">
                                <p className="resume-date">
                                    October&apos;21 - Present
                                </p>
                                <p className="resume-name">
                                    <span>Front-end Developer</span>
                                </p>
                                <p className="resume-area">VINDEVS</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="skills-wrapper">
                <div className="container">
                    <div className="skills-items">
                        <div className="skills-item">
                            <h3 className="resume-title submain-title">
                                <Bookmark /> Frameworks & Libraries
                            </h3>
                            <div className="skills-text">
                                <span>ReactJS</span>
                                <span>Redux</span>
                                <span>Redux Toolkit</span>
                                <span>React Router Dom</span>
                                <span>React API Context</span>
                                <span>Material UI</span>
                                <span>Bootstrap</span>
                                <span>Reactstrap</span>
                            </div>
                        </div>
                        <div className="skills-item">
                            <h3 className="resume-title submain-title">
                                <Biotech /> Core Technologies
                            </h3>
                            <div className="skills-text">
                                <span>JavaScript</span>
                                <span>TypeScript(familiar)</span>
                                <span>HTML</span>
                                <span>SCSS</span>
                                <span>Browser API</span>
                                <span>REST API</span>
                            </div>
                        </div>
                        <div className="skills-item">
                            <h3 className="resume-title submain-title">
                                <Construction /> Tools
                            </h3>
                            <div className="skills-text">
                                <span>VS Code</span>
                                <span>ESLint</span>
                                <span>Git</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
