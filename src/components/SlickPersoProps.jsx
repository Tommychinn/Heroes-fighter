import React from "react";
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
import styles from "./Personnages.module.css";

function SlickPersoProps(props) {
    return (
            <div className={styles.persoCartes}>
                <Card className={styles.perso}>
                    <CardImg
                        className={styles.persoImage}
                        top
                        width="100%"
                        src={props.image}
                        alt="Card image cap"
                    />
                    <CardBody>
                        <CardTitle className={styles.cardTitle}>
                            {props.name}
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
                        <Button className={styles.button}>Play</Button>
                    </CardBody>
                </Card>
            </div>

    );
}

export default SlickPersoProps;
