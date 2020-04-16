import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col, Progress, Card, Button, CardImg, CardTitle, CardText, CardGroup,
    CardSubtitle, CardBody } from 'reactstrap';

class ContainerPersonnages extends React.Component {
    
    items = [
        {
          src:"https://via.placeholder.com/318x180.png",
          alt:"Card image cap",
          CardTitle: "Card Title",
          CardSubtitle: "Card subtitle",
          CardText: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
          Button: "button"
        },
        {
          src:"https://via.placeholder.com/318x181.png",
          alt:"Card image cap",
          CardTitle: "Card Title",
          CardSubtitle: "Card subtitle",
          CardText: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
          Button: "button"
        },
        {
          src:"https://via.placeholder.com/318x182.png",
          alt:"Card image cap",
          CardTitle: "Card Title",
          CardSubtitle: "Card subtitle",
          CardText: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
          Button: "button"
        }, 
        {
          src:"https://via.placeholder.com/318x183.png",
          alt:"Card image cap",
          CardTitle: "Card Title",
          CardSubtitle: "Card subtitle",
          CardText: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
          Button: "button"
        }, 
      ];

    render () {
        return (
            <CardGroup className="row">
      <Card fluid className="col-lg-2">
        <CardImg top width="100%" src="https://via.placeholder.com/318x180.png" alt="Card image cap" />
        <CardBody-fluid>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>      
          <div className="row"><p className="col-lg-4">Intelligence</p><div className="col-lg-8" ><Progress value="3" max="5" /></div> </div>
          <div className="row"><p className="col-lg-4">Power</p><div className="col-lg-8" ><Progress value="2" max="5" /></div> </div>
          <div className="row"><p className="col-lg-4">Speed</p><div className="col-lg-8" ><Progress value="4" max="5" /></div> </div>
        </CardBody-fluid>
      </Card>
      <Card className="col-lg-2">
        <CardImg top width="100%" src="https://via.placeholder.com/318x180.png" alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      <Card className="col-lg-2">
        <CardImg top width="100%" src="https://via.placeholder.com/318x180.png" alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      <Card className="col-lg-2">
        <CardImg top width="100%" src="https://via.placeholder.com/318x180.png" alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      <Container className="row">
      <Container-fluid>
      <CardImg top width="100%" src="https://via.placeholder.com/318x180.png" alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Container-fluid>
     
      </Container>
    </CardGroup>
  );
};
}



export default ContainerPersonnages