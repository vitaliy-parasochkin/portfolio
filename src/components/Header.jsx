import { Link, useLocation } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";

export default function Header() {
    const { pathname } = useLocation();

    return (
        <header>
            <Link to="/" className={pathname === "/" && "active"}>
                <PersonIcon /> About
            </Link>
            <Link to="/resume" className={pathname === "/resume" && "active"}>
                <InsertDriveFileIcon /> Resume
            </Link>
            <Link to="/works" className={pathname === "/works" && "active"}>
                <HomeRepairServiceIcon /> Works
            </Link>
        </header>
    );
}
