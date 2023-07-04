import { Web } from "@mui/icons-material";

export default function About() {
    return (
        <div className="page-body">
            <div className="container">
                <h1 className="main-title">About me</h1>
                <div className="about-text">
                    <p>
                        As a developer with 2 years of work experience, I had
                        the opportunity to work in a team on various projects:
                        from the development of ordinary online stores to the
                        CRM system. I&apos;m always happy to take on new
                        challenges and continue to learn and grow as a developer
                    </p>
                    <p>
                        So if you&apos;re looking for a qualified developer to
                        help bring your project to life, I&apos;m here to help!
                    </p>
                </div>
                <div className="what-do-wrapper">
                    <h3 className="submain-title">What I do!</h3>
                    <ul className="what-do-list">
                        <li className="what-do-list-item">
                            <div className="image-wrapper">
                                <Web />
                            </div>
                            <div className="what-do-body">
                                <div className="what-do-title">
                                    Web aplication design and development
                                </div>
                                <div className="what-do-text">
                                    Web application design and development
                                    involves creating visually appealing and
                                    user-friendly online applications to meet
                                    the specific needs of clients
                                </div>
                            </div>
                        </li>
                        <li className="what-do-list-item">
                            <div className="image-wrapper">
                                <Web />
                            </div>
                            <div className="what-do-body">
                                <div className="what-do-title">
                                    UI components development
                                </div>
                                <div className="what-do-text">
                                    UI components development involves creating
                                    reusable and customizable elements that
                                    enhance the visual appeal and interactivity
                                    of a web or mobile application
                                </div>
                            </div>
                        </li>
                        <li className="what-do-list-item">
                            <div className="image-wrapper">
                                <Web />
                            </div>
                            <div className="what-do-body">
                                <div className="what-do-title">
                                    Complex data processing services development
                                </div>
                                <div className="what-do-text">
                                    Complex data processing services development
                                    involves creating robust and scalable
                                    solutions to handle large volumes of data
                                    and perform intricate data analysis tasks.
                                </div>
                            </div>
                        </li>
                        <li className="what-do-list-item">
                            <div className="image-wrapper">
                                <Web />
                            </div>

                            <div className="what-do-body">
                                <div className="what-do-title">
                                    Front-end development cycle experience
                                </div>
                                <div className="what-do-text">
                                    Front-end development cycle experience
                                    encompasses the end-to-end process of
                                    designing and implementing the user
                                    interface of a website or web application.
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
