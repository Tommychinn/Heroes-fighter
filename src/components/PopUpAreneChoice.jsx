import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import HomeAreneCont from "./HomeAreneCont";

function PopUpAreneChoice({ className }) {

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const closeBtn = <a className="close" onClick={toggle}>&times;</a>

  return (
    <div>
      <Button color="danger" onClick={toggle}>
        Choose your arena
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle} close={closeBtn}>CHOISIR VOTRE ARENE</ModalHeader>
        <ModalBody>
        <HomeAreneCont slide={3}/>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Play
          </Button>{" "}
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default PopUpAreneChoice;
