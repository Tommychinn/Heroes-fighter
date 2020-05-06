import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import HomeAreneCont from './HomeAreneCont';

function PopUpAreneChoice() {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="danger" onClick={toggle}>
        Choose your arena
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>CHOISIR VOTRE ARENE</ModalHeader>
        <ModalBody>
          <HomeAreneCont slide={3} />
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Play
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default PopUpAreneChoice;
