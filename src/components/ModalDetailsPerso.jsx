import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Container,
  Row,
  Col,
} from 'reactstrap';
import DetailsPersoModal from './DetailsPersoModal';
import styles from './resize.module.css';
import PopUpAreneChoice from './PopUpAreneChoice';

function ModalDetailsPerso({ name, image, powerstats, biography }) {
  // const { className } = { name, image, powerstats, biography };

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  // const closeBtn = (
  //   <button className="close" onClick={toggle}>
  //     &times;
  //   </button>
  // );

  const handleKeyDown = () => {
    return 'toto';
  };

  return (
    <div>
      <div
        color="danger"
        onClick={toggle}
        role="button"
        tabIndex={0}
        onKeyDown={handleKeyDown}
      >
        <Button>Jouer</Button>
      </div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader>{biography && biography.publisher}</ModalHeader>
        <ModalBody>
          <Container>
            <Row>
              <Col lg="4">
                <Row>
                  <img
                    className={styles.img_resize}
                    src={image && image.url}
                    alt={name}
                  />
                </Row>
                <Row>
                  <Col lg="6">
                    <h3>Pouvoirs</h3>
                    <DetailsPersoModal powerstats={powerstats} />
                  </Col>
                </Row>
              </Col>
              <Col lg="8">
                <Row>
                  <h3>{name}</h3>
                </Row>
                <Col>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Col>

                {/* /*Ligne Texte Equipements */}
                <Row>
                  <h3>Equipements</h3>
                </Row>
                <Col>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Col>
              </Col>
            </Row>
          </Container>
        </ModalBody>
        <ModalFooter>
          <PopUpAreneChoice
            name={name}
            biography={biography}
            image={image}
            powerstats={powerstats}
          />
          <Button color="secondary" onClick={toggle}>
            Annuler
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
ModalDetailsPerso.propTypes = {
  name: PropTypes.string.isRequired,
  powerstats: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  biography: PropTypes.string.isRequired,
};

export default ModalDetailsPerso;
