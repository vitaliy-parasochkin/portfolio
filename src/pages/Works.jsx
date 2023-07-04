import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReactShop from "../images/ReactShop.jpg";
import ReactPizza from "../images/ReactPizza.jpg";
import Freedom from "../images/Freedom.jpg";
import Furniture from "../images/Furniture.jpg";
import Relvise from "../images/Relvise.jpg";
import Boost from "../images/Boost.jpg";
import Binary from "../images/Binary.jpg";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

export default function Works() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <ArrowForwardIos />,
        prevArrow: <ArrowBackIos />,
    };

    return (
        <div className="page-body">
            <div className="container">
                <div className="slider-wrapper">
                    <Slider {...settings}>
                        {[
                            {
                                img: ReactShop,
                                name: "ReactShop",
                                codeLink:
                                    "https://github.com/vitaliy-parasochkin/react-shop",
                                projectLink:
                                    "https://vitaliy-parasochkin.github.io/react-shop/products",
                                desc: "Small e-shop with authorization and logout, filtering, adding items to the cart and work with requests to the API",
                            },
                            {
                                img: ReactPizza,
                                name: "React pizza",
                                codeLink:
                                    "https://github.com/vitaliy-parasochkin/react-pizza",
                                projectLink:
                                    "https://vitaliy-parasochkin.github.io/react-pizza/",
                                desc: "Also small e-shop , with functionallity of filtering, sorting, paginate, search items, adding items to the cart and work with requests to the API",
                            },
                            {
                                img: Freedom,
                                name: "Freedom",
                                codeLink:
                                    "https://github.com/vitaliy-parasochkin/freedom",
                                projectLink:
                                    "https://vitaliy-parasochkin.github.io/freedom/",
                                desc: "Simple layout was created with html, scss and js. There are adaptability, burger menu and changing theme",
                            },
                            {
                                img: Furniture,
                                name: "Furniture",
                                codeLink:
                                    "https://github.com/vitaliy-parasochkin/furniture",
                                projectLink:
                                    "https://vitaliy-parasochkin.github.io/furniture/",
                                desc: "Simple layout was created with html, scss and js. There are adaptability, burger menu and two sliders",
                            },
                            {
                                img: Relvise,
                                name: "Relvise",
                                codeLink:
                                    "https://github.com/vitaliy-parasochkin/relvise",
                                projectLink:
                                    "https://vitaliy-parasochkin.github.io/relvise/",
                                desc: "Simple layout was created with html and scss. There is adaptability in the site",
                            },
                            {
                                img: Boost,
                                name: "Boost",
                                codeLink:
                                    "https://github.com/vitaliy-parasochkin/maket",
                                projectLink:
                                    "https://vitaliy-parasochkin.github.io/maket/",
                                desc: "Simple layout was created with html and scss. There is adaptability in the site",
                            },
                            {
                                img: Binary,
                                name: "Binary",
                                codeLink:
                                    "https://github.com/vitaliy-parasochkin/maket2",
                                projectLink:
                                    "https://vitaliy-parasochkin.github.io/maket2/",
                                desc: "Simple layout was created with html, scss and some js. There is adaptability in the site and burger menu",
                            },
                        ].map((item, i) => (
                            <div key={i} className="work-item">
                                <div className="work-item-image">
                                    <img src={item.img} alt="react shop" />
                                </div>
                                <div className="work-item-body">
                                    <div className="work-item-name">
                                        {item.name}
                                    </div>
                                    <div className="work-item-links">
                                        <a
                                            href={item.codeLink}
                                            target="_blank"
                                            className="work-item-code button"
                                            rel="noreferrer"
                                        >
                                            View code
                                        </a>
                                        <a
                                            href={item.projectLink}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="work-item-project button"
                                        >
                                            View project
                                        </a>
                                    </div>

                                    <div className="work-item-desc">
                                        {item.desc}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
}
