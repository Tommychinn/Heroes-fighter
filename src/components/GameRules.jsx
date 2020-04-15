import React, { useState } from "react";
import "./GameRules.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const GameRules = (props) => {
  const { buttonLabel, className } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const externalCloseBtn = (
    <button
      className="close"
      style={{ position: "absolute", top: "15px", right: "15px" }}
      onClick={toggle}
    >
      &times;
    </button>
  );
  return (
    <div>
      <Button color="danger" onClick={toggle}>
        Game Rules
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader color="danger" toggle={toggle} charCode="X">
          <nav class="nav flex-column">
            <a class="nav-link active" href="#">
              Active
            </a>
            <a class="nav-link" href="#">
              Link
            </a>
            <a class="nav-link" href="#">
              Link
            </a>
            <a class="nav-link disabled" href="#">
              Disabled
            </a>
          </nav>
        </ModalHeader>
        <ModalBody>
          <div className="text-white text">
            <b className="text-danger">Objectifs</b>
            <br />
            The goal of the game is simple : by playing your cards against those
            of your opponent, you must successfully fight in order to gain
            victory.
            <br />
            <b className="text-danger">Start the game</b>
            <br />
            At the start of the game you choose 5 characters cards and an arena
            in which you want to fight. Once in the arena, you must have your
            cards fight against that of your opponent.
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={toggle}>
            Let's go!
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default GameRules;
