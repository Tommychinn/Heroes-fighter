import React, { useState } from "react";
import PropTypes from "prop-types";
import CardPersonnage from "./PersonnageCard";
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption,
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

const items = [
    {
        id: 1,
        group: [
            {
                src: "https://via.placeholder.com/318x180.png",
                alt: "Card image cap",
                CardTitle: "Card Title",
                CardSubtitle: "Card subtitle",
                CardText:
                    "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                Button: "button",
            },
            {
                src: "https://via.placeholder.com/318x180.png",
                alt: "Card image cap",
                CardTitle: "Card Title",
                CardSubtitle: "Card subtitle",
                CardText:
                    "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                Button: "button",
            },
            {
                src: "https://via.placeholder.com/318x180.png",
                alt: "Card image cap",
                CardTitle: "Card Title",
                CardSubtitle: "Card subtitle",
                CardText:
                    "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                Button: "button",
            },
            {
                src: "https://via.placeholder.com/318x180.png",
                alt: "Card image cap",
                CardTitle: "Card Title",
                CardSubtitle: "Card subtitle",
                CardText:
                    "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                Button: "button",
            },
            {
                src: "https://via.placeholder.com/318x180.png",
                alt: "Card image cap",
                CardTitle: "Card Title",
                CardSubtitle: "Card subtitle",
                CardText:
                    "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                Button: "button",
            },
        ],
    },
    {
        id: 2,
        group: [
            {
                src: "https://via.placeholder.com/318x180.png",
                alt: "Card image cap",
                CardTitle: "Card Title",
                CardSubtitle: "Card subtitle",
                CardText:
                    "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                Button: "button",
            },
            {
                src: "https://via.placeholder.com/318x180.png",
                alt: "Card image cap",
                CardTitle: "Card Title",
                CardSubtitle: "Card subtitle",
                CardText:
                    "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                Button: "button",
            },
            {
                src: "https://via.placeholder.com/318x180.png",
                alt: "Card image cap",
                CardTitle: "Card Title",
                CardSubtitle: "Card subtitle",
                CardText:
                    "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                Button: "button",
            },
            {
                src: "https://via.placeholder.com/318x180.png",
                alt: "Card image cap",
                CardTitle: "Card Title",
                CardSubtitle: "Card subtitle",
                CardText:
                    "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                Button: "button",
            },
            {
                src: "https://via.placeholder.com/318x180.png",
                alt: "Card image cap",
                CardTitle: "Card Title",
                CardSubtitle: "Card subtitle",
                CardText:
                    "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                Button: "button",
            },
        ],
    },
];

const Personnages = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
    const [interval, setInterval] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex =
            activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
        setInterval(false);
    };

    const previous = () => {
        if (animating) return;
        const nextIndex =
            activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
        setInterval(false);
    };

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
        setInterval(false);
    };

    const slides = items.map((item) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.src}
                data-interval={false}
            >
                <CardGroup data-interval="false">
                    <Card className="col-lg-2">
                        <CardImg
                            top
                            width="100%"
                            src="https://via.placeholder.com/318x180.png"
                            alt="Card image cap"
                        />
                        <CardBody>
                            <CardTitle>Card title</CardTitle>
                            <CardSubtitle>Card subtitle</CardSubtitle>
                            <CardText>
                                This is a wider card with supporting text below
                                as a natural lead-in to additional content. This
                                content is a little bit longer.
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
                            <CardTitle>Card title</CardTitle>
                            <CardSubtitle>Card subtitle</CardSubtitle>
                            <CardText>
                                This card has supporting text below as a natural
                                lead-in to additional content.
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
                            <CardTitle>Card title</CardTitle>
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
                            <CardTitle>Card title</CardTitle>
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
                            <CardTitle>Card title</CardTitle>
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
                </CardGroup>
            </CarouselItem>
        );
    });

    return (
        <Carousel activeIndex={activeIndex} next={next} previous={previous}>
            <CarouselIndicators
                items={items}
                activeIndex={activeIndex}
                onClickHandler={goToIndex}
            />
            {slides}
            <CarouselControl
                direction="prev"
                directionText="Previous"
                onClickHandler={previous}
            />
            <CarouselControl
                direction="next"
                directionText="Next"
                onClickHandler={next}
            />
        </Carousel>
    );
};

export default Personnages;

Carousel.propTypes = {
    // the current active slide of the carousel
    activeIndex: PropTypes.number,
    // a function which should advance the carousel to the next slide (via activeIndex)
    next: PropTypes.func.isRequired,
    // a function which should advance the carousel to the previous slide (via activeIndex)
    previous: PropTypes.func.isRequired,
    // controls if the left and right arrow keys should control the carousel
    keyboard: PropTypes.bool,
    /* If set to "hover", pauses the cycling of the carousel on mouseenter and resumes the cycling of the carousel on
     * mouseleave. If set to false, hovering over the carousel won't pause it. (default: "hover")
     */
    pause: PropTypes.oneOf(["hover", false]),
    // Autoplays the carousel after the user manually cycles the first item. If "carousel", autoplays the carousel on load.
    // This is how bootstrap defines it... I would prefer a bool named autoplay or something...
    ride: PropTypes.oneOf(["carousel", false]),
    // the interval at which the carousel automatically cycles (default: 5000)
    // If set to false, carousel will not Autoplay (i.e. will not automatically cycle).

    interval: false,
    pause: "hover",
    keyboard: true,
    slide: false,

    children: PropTypes.array,
    // called when the mouse enters the Carousel
    mouseEnter: PropTypes.func,
    // called when the mouse exits the Carousel
    mouseLeave: PropTypes.func,
    // controls whether the slide animation on the Carousel works or not
    slide: PropTypes.bool,
    cssModule: PropTypes.object,
    // controls whether the touch gestures on the Carousel works or not (default: true)
    enableTouch: PropTypes.bool,
};
