import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
    Container,
    Row,
    Col,
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

import Slider from "react-slick";

class SlickPersonnages extends React.Component {
    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
        };
        return (
            <Slider {...settings}>
                <div className="container">
                    <Card className="col-lg-2">
                        <CardImg
                            top
                            width="100%"
                            src="https://via.placeholder.com/318x180.png"
                            alt="Card image cap"
                        />
                        <CardBody>
                            <CardTitle>1</CardTitle>
                            <CardSubtitle>Card subtitle</CardSubtitle>
                            <CardText>
                                This is a wider card with supporting text below
                                as a natural lead-in to additional content. This
                                card has even longer content than the first to
                                show that equal height action.
                            </CardText>
                            <Button>Button</Button>
                        </CardBody>
                    </Card>
                    <Card className="col-lg-2">
                        <CardImg
                            top
                            width="100%"
                            src="https://via.placeholder.com/318x180.png"
                            alt="Card image cap"
                        />
                        <CardBody>
                            <CardTitle>2</CardTitle>
                            <CardSubtitle>Card subtitle</CardSubtitle>
                            <CardText>
                                This is a wider card with supporting text below
                                as a natural lead-in to additional content. This
                                card has even longer content than the first to
                                show that equal height action.
                            </CardText>
                            <Button>Button</Button>
                        </CardBody>
                    </Card>
                    <Card className="col-lg-2">
                        <CardImg
                            top
                            width="100%"
                            src="https://via.placeholder.com/318x180.png"
                            alt="Card image cap"
                        />
                        <CardBody>
                            <CardTitle>3</CardTitle>
                            <CardSubtitle>Card subtitle</CardSubtitle>
                            <CardText>
                                This is a wider card with supporting text below
                                as a natural lead-in to additional content. This
                                card has even longer content than the first to
                                show that equal height action.
                            </CardText>
                            <Button>Button</Button>
                        </CardBody>
                    </Card>
                    <Card className="col-lg-2">
                        <CardImg
                            top
                            width="100%"
                            src="https://via.placeholder.com/318x180.png"
                            alt="Card image cap"
                        />
                        <CardBody>
                            <CardTitle>4</CardTitle>
                            <CardSubtitle>Card subtitle</CardSubtitle>
                            <CardText>
                                This is a wider card with supporting text below
                                as a natural lead-in to additional content. This
                                card has even longer content than the first to
                                show that equal height action.
                            </CardText>
                            <Button>Button</Button>
                        </CardBody>
                    </Card>
                </div>
                <div>
                    <Card className="col-lg-2">
                        <CardImg
                            top
                            width="100%"
                            src="https://via.placeholder.com/318x180.png"
                            alt="Card image cap"
                        />
                        <CardBody>
                            <CardTitle>1</CardTitle>
                            <CardSubtitle>Card subtitle</CardSubtitle>
                            <CardText>
                                This is a wider card with supporting text below
                                as a natural lead-in to additional content. This
                                card has even longer content than the first to
                                show that equal height action.
                            </CardText>
                            <Button>Button</Button>
                        </CardBody>
                    </Card>
                    <Card className="col-lg-2">
                        <CardImg
                            top
                            width="100%"
                            src="https://via.placeholder.com/318x180.png"
                            alt="Card image cap"
                        />
                        <CardBody>
                            <CardTitle>2</CardTitle>
                            <CardSubtitle>Card subtitle</CardSubtitle>
                            <CardText>
                                This is a wider card with supporting text below
                                as a natural lead-in to additional content. This
                                card has even longer content than the first to
                                show that equal height action.
                            </CardText>
                            <Button>Button</Button>
                        </CardBody>
                    </Card>
                    <Card className="col-lg-2">
                        <CardImg
                            top
                            width="100%"
                            src="https://via.placeholder.com/318x180.png"
                            alt="Card image cap"
                        />
                        <CardBody>
                            <CardTitle>3</CardTitle>
                            <CardSubtitle>Card subtitle</CardSubtitle>
                            <CardText>
                                This is a wider card with supporting text below
                                as a natural lead-in to additional content. This
                                card has even longer content than the first to
                                show that equal height action.
                            </CardText>
                            <Button>Button</Button>
                        </CardBody>
                    </Card>
                    <Card className="col-lg-2">
                        <CardImg
                            top
                            width="100%"
                            src="https://via.placeholder.com/318x180.png"
                            alt="Card image cap"
                        />
                        <CardBody>
                            <CardTitle>4</CardTitle>
                            <CardSubtitle>Card subtitle</CardSubtitle>
                            <CardText>
                                This is a wider card with supporting text below
                                as a natural lead-in to additional content. This
                                card has even longer content than the first to
                                show that equal height action.
                            </CardText>
                            <Button>Button</Button>
                        </CardBody>
                    </Card>
                </div>
                <div>
                    <Card className="col-lg-2">
                        <CardImg
                            top
                            width="100%"
                            src="https://via.placeholder.com/318x180.png"
                            alt="Card image cap"
                        />
                        <CardBody>
                            <CardTitle>1</CardTitle>
                            <CardSubtitle>Card subtitle</CardSubtitle>
                            <CardText>
                                This is a wider card with supporting text below
                                as a natural lead-in to additional content. This
                                card has even longer content than the first to
                                show that equal height action.
                            </CardText>
                            <Button>Button</Button>
                        </CardBody>
                    </Card>
                    <Card className="col-lg-2">
                        <CardImg
                            top
                            width="100%"
                            src="https://via.placeholder.com/318x180.png"
                            alt="Card image cap"
                        />
                        <CardBody>
                            <CardTitle>2</CardTitle>
                            <CardSubtitle>Card subtitle</CardSubtitle>
                            <CardText>
                                This is a wider card with supporting text below
                                as a natural lead-in to additional content. This
                                card has even longer content than the first to
                                show that equal height action.
                            </CardText>
                            <Button>Button</Button>
                        </CardBody>
                    </Card>
                    <Card className="col-lg-2">
                        <CardImg
                            top
                            width="100%"
                            src="https://via.placeholder.com/318x180.png"
                            alt="Card image cap"
                        />
                        <CardBody>
                            <CardTitle>3</CardTitle>
                            <CardSubtitle>Card subtitle</CardSubtitle>
                            <CardText>
                                This is a wider card with supporting text below
                                as a natural lead-in to additional content. This
                                card has even longer content than the first to
                                show that equal height action.
                            </CardText>
                            <Button>Button</Button>
                        </CardBody>
                    </Card>
                    <Card className="col-lg-2">
                        <CardImg
                            top
                            width="100%"
                            src="https://via.placeholder.com/318x180.png"
                            alt="Card image cap"
                        />
                        <CardBody>
                            <CardTitle>4</CardTitle>
                            <CardSubtitle>Card subtitle</CardSubtitle>
                            <CardText>
                                This is a wider card with supporting text below
                                as a natural lead-in to additional content. This
                                card has even longer content than the first to
                                show that equal height action.
                            </CardText>
                            <Button>Button</Button>
                        </CardBody>
                    </Card>
                </div>
            </Slider>
        );
    }
}

export default SlickPersonnages;
