import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TelegramIcon from "@mui/icons-material/Telegram";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import MailIcon from "@mui/icons-material/Mail";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import DownloadIcon from "@mui/icons-material/Download";
import place from "../images/portfolio.jpg";
import portfolioPdf from "../images/Vitaliy_Parasochkin_resume.pdf";
import { Avatar } from "@mui/material";

export default function Navbar() {
    return (
        <aside>
            <div className="navbar-wrapper">
                <div className="navbar-image">
                    <Avatar
                        alt="profile image"
                        src={place}
                        sx={{ width: 150, height: 150 }}
                    />
                </div>
                <h3 className="navbar-name">Vitaliy Parasochkin</h3>
                <p className="navbar-position">Front-End Developer</p>
                <div className="navbar-social">
                    <a
                        href="https://www.facebook.com/profile.php?id=100009510027488"
                        target="_blank"
                        rel="noreferrer"
                        className="navbar-social-item"
                    >
                        <FacebookIcon />
                    </a>
                    <a
                        href="https://www.instagram.com/vitalii_parasochkin/"
                        target="_blank"
                        rel="noreferrer"
                        className="navbar-social-item"
                    >
                        <InstagramIcon />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/vitaliy-parasochkin-345163217/"
                        target="_blank"
                        rel="noreferrer"
                        className="navbar-social-item"
                    >
                        <LinkedInIcon />
                    </a>
                    <a
                        href="https://t.me/parasochkin"
                        target="_blank"
                        rel="noreferrer"
                        className="navbar-social-item"
                    >
                        <TelegramIcon />
                    </a>
                </div>
                <div className="navbar-info">
                    <div className="navbar-info-item">
                        <div className="navbar-icon-wrapper">
                            <PhoneAndroidIcon />
                        </div>
                        <div className="navbar-info-text">
                            <span>Phone</span>
                            <p>+380630256459</p>
                        </div>
                    </div>
                    <div className="navbar-info-item">
                        <div className="navbar-icon-wrapper">
                            <MailIcon />
                        </div>
                        <div className="navbar-info-text">
                            <span>Email</span>
                            <p>parasochkinvitaliy@gmail.com</p>
                        </div>
                    </div>
                    <div className="navbar-info-item">
                        <div className="navbar-icon-wrapper">
                            <LocationOnIcon />
                        </div>
                        <div className="navbar-info-text">
                            <span>Location</span>
                            <p>Vinnytsia, Ukraine</p>
                        </div>
                    </div>
                    <div className="navbar-info-item">
                        <div className="navbar-icon-wrapper">
                            <CalendarMonthIcon />
                        </div>
                        <div className="navbar-info-text">
                            <span>Birthday</span>
                            <p>May 16, 2001</p>
                        </div>
                    </div>
                </div>
                <div className="navbar-download">
                    <a href={portfolioPdf} download>
                        <DownloadIcon /> Download CV
                    </a>
                </div>
            </div>
        </aside>
    );
}
