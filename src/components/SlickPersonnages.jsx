import React, { Component } from "react";
import Slider from "react-slick";
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

class SlickPersonnages extends Component {
    render() {
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
                    <div className={styles.persoCartes}>
                        <Card className={styles.perso}>
                            <CardImg className={styles.persoImage}
                                top
                                width="100%"
                                src={require("./images/Capmarvel.jpg")}
                                alt="Card image cap"
                            />
                            <CardBody>
                                <CardTitle className={styles.cardTitle}>Captain Marvel</CardTitle>
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
                                <Button className={styles.button}>Play</Button>
                            </CardBody>
                        </Card>
                    </div>
                    <div className={styles.persoCartes}>
                        <Card className={styles.perso}>
                            <CardImg className={styles.persoImage}
                                top
                                width="100%"
                                src={require("./images/Drmanhatten.jpg")}
                                alt="Card image cap"
                            />
                            <CardBody>
                                <CardTitle className={styles.cardTitle}>Captain Marvel</CardTitle>
                                <div>
                                    <p>Intelligence</p>
                                    <div>
                                        <Progress value="3" max="5" />
                                    </div>
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
                                <Button className={styles.button}>Play</Button>
                            </CardBody>
                        </Card>
                    </div>
                    <div className={styles.persoCartes}>
                        <Card className={styles.perso}>
                            <CardImg className={styles.persoImage}
                                top
                                width="100%"
                                src={require("./images/Capmarvel.jpg")}
                                alt="Card image cap"
                            />
                            <CardBody>
                                <CardTitle className={styles.cardTitle}>Captain Marvel</CardTitle>
                                <div>
                                    <p>Intelligence</p>
                                    <div>
                                        <Progress value="3" max="5" />
                                    </div>
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
                                <Button className={styles.button}>Play</Button>
                            </CardBody>
                        </Card>
                    </div>
                    <div className={styles.persoCartes}>
                        <Card className={styles.perso}>
                            <CardImg className={styles.persoImage}
                                top
                                width="100%"
                                src={require("./images/Drmanhatten.jpg")}
                                alt="Card image cap"
                            />
                            <CardBody>
                                <CardTitle className={styles.cardTitle}>Captain Marvel</CardTitle>
                                <div>
                                    <p>Intelligence</p>
                                    <div>
                                        <Progress value="3" max="5" />
                                    </div>
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
                                <Button className={styles.button}>Play</Button>
                            </CardBody>
                        </Card>
                    </div><div className={styles.persoCartes}>
                        <Card className={styles.perso}>
                            <CardImg className={styles.persoImage}
                                top
                                width="100%"
                                src={require("./images/Capmarvel.jpg")}
                                alt="Card image cap"
                            />
                            <CardBody>
                                <CardTitle className={styles.cardTitle}>Captain Marvel</CardTitle>
                                <div>
                                    <p>Intelligence</p>
                                    <div>
                                        <Progress value="3" max="5" />
                                    </div>
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
                                <Button className={styles.button}>Play</Button>
                            </CardBody>
                        </Card>
                    </div>
                    <div className={styles.persoCartes}>
                        <Card className={styles.perso}>
                            <CardImg className={styles.persoImage}
                                top
                                width="100%"
                                src={require("./images/Drmanhatten.jpg")}
                                alt="Card image cap"
                            />
                            <CardBody>
                                <CardTitle className={styles.cardTitle}>Captain Marvel</CardTitle>
                                <div>
                                    <p>Intelligence</p>
                                    <div>
                                        <Progress value="3" max="5" />
                                    </div>
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
                                <Button className={styles.button}>Play</Button>
                            </CardBody>
                        </Card>
                    </div><div className={styles.persoCartes}>
                        <Card className={styles.perso}>
                            <CardImg className={styles.persoImage}
                                top
                                width="100%"
                                src={require("./images/Capmarvel.jpg")}
                                alt="Card image cap"
                            />
                            <CardBody>
                                <CardTitle className={styles.cardTitle}>Captain Marvel</CardTitle>
                                <div>
                                    <p>Intelligence</p>
                                    <div>
                                        <Progress value="3" max="5" />
                                    </div>
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
                                <Button className={styles.button}>Play</Button>
                            </CardBody>
                        </Card>
                    </div>
                    <div className={styles.persoCartes}>
                        <Card className={styles.perso}>
                            <CardImg className={styles.persoImage}
                                top
                                width="100%"
                                src={require("./images/Drmanhatten.jpg")}
                                alt="Card image cap"
                            />
                            <CardBody>
                                <CardTitle className={styles.cardTitle}>Captain Marvel</CardTitle>
                                <div>
                                    <p>Intelligence</p>
                                    <div>
                                        <Progress value="3" max="5" />
                                    </div>
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
                                <Button className={styles.button}>Play</Button>
                            </CardBody>
                        </Card>
                    </div><div className={styles.persoCartes}>
                        <Card className={styles.perso}>
                            <CardImg className={styles.persoImage}
                                top
                                width="100%"
                                src={require("./images/Capmarvel.jpg")}
                                alt="Card image cap"
                            />
                            <CardBody>
                                <CardTitle className={styles.cardTitle}>Captain Marvel</CardTitle>
                                <div>
                                    <p>Intelligence</p>
                                    <div>
                                        <Progress value="3" max="5" />
                                    </div>
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
                                <Button className={styles.button}>Play</Button>
                            </CardBody>
                        </Card>
                    </div>
                    <div className={styles.persoCartes}>
                        <Card className={styles.perso}>
                            <CardImg className={styles.persoImage}
                                top
                                width="100%"
                                src={require("./images/Drmanhatten.jpg")}
                                alt="Card image cap"
                            />
                            <CardBody>
                                <CardTitle className={styles.cardTitle}>Captain Marvel</CardTitle>
                                <div>
                                    <p>Intelligence</p>
                                    <div>
                                        <Progress value="3" max="5" />
                                    </div>
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
                                <Button classsName={styles.button}>Play</Button>
                            </CardBody>
                        </Card>
                    </div>
                </Slider>
            </div>
        );
    }
}

export default SlickPersonnages;
