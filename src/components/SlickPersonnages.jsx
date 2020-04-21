import React from "react";
import Slider from "react-slick";
import Capmarvel from "./images/Capmarvel.jpg";
import Drmanhatten from "./images/Drmanhatten.jpg";
import {
    Container,
    Row,
    Col,
    Progress,
    Card,
    Button,
    CardImg,
    CardTitle,
    CardText,
    CardGroup,
    CardSubtitle,
    CardBody,
} from "reactstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./Personnages.module.css";
import SlickPersoProps from "./SlickPersoProps";

const heroes = [
    {
        name: "Captain Marvel",
        image: Capmarvel,
    },
    {
        name: "Dr Manhatten",
        image: Drmanhatten,
    },
    {
        name: "Captain marvel",
        image: Capmarvel,
    },
    {
        name: "Dr manhatten",
        image: Drmanhatten,
    },
    {
        name: "Captain Marvel",
        image: Capmarvel,
    },
    {
        name: "Dr Manhatten",
        image: Drmanhatten,
    },
    {
        name: "Captain marvel",
        image: Capmarvel,
    },
    {
        name: "Dr manhatten",
        image: Drmanhatten,
    },
];

function SlickPersonnages() {
    const settings = {
        className: "center",
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 4,
        swipeToSlide: true,
    };

    return (
        <div className={styles.personnages}>
            <h2>Les personnages</h2>
            <Slider {...settings}>
                    {heroes.map((hero) => (
                        <div className={styles.persoCartes}>
                            <Col>
                                <Card className={styles.perso}>
                                    <CardImg
                                        className={styles.persoImage}
                                        top
                                        width="100%"
                                        src={hero.image}
                                        alt="Card image cap"
                                    />
                                    <CardBody>
                                        <CardTitle className={styles.cardTitle}>
                                            {hero.name}
                                        </CardTitle>
                                        <div>
                                            <p>Intelligence</p>
                                            <Progress value="3" max="5" />
                                        </div>
                                        <div>
                                            <p>Strength</p>
                                            <div>
                                                <Progress value="2" max="5" />
                                            </div>
                                        </div>
                                        <div>
                                            <p>Power</p>
                                            <div>
                                                <Progress value="4" max="5" />
                                            </div>
                                        </div>
                                        <Button className={styles.button}>
                                            Play
                                        </Button>
                                    </CardBody>
                                </Card>
                            </Col>
                        </div>
                    ))}
            </Slider>
        </div>
    );
}

export default SlickPersonnages;
