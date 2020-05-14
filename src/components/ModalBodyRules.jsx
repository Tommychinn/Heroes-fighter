import React from 'react';
import { ModalBody, Col } from 'reactstrap';

import styles from './ModalBodyRules.module.css';

function ModalBodyRules() {
  return (
    <Col sm="8" className={styles.rules}>
      <ModalBody className={styles.modalbody}>
        <div className={styles.text}>
          <h5 className={styles.h5} id="Goal">
            Goal of game
          </h5>
          <p className={styles.prules}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            debitis perspiciatis sapiente incidunt qui, atque voluptate dolorum
            modi aperiam voluptatem harum unde earum, possimus eveniet animi cum
            porro iste iusto!
          </p>
          <h5 className={styles.h5} id="Elements">
            Elements of game
          </h5>
          <p className={styles.prules}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            aspernatur ab asperiores velit odio, sit repellat dicta totam
            voluptates doloribus? Pariatur eos ex numquam in magnam inventore
            distinctio sequi exercitationem. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Maiores explicabo aliquam voluptate
            alias? Recusandae enim modi fuga amet ducimus obcaecati, eum soluta
            magni labore esse non expedita! Iure, tempora fuga!
          </p>
          <h5 className={styles.h5} id="Course">
            Course of the game
          </h5>
          <p className={styles.prules}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            debitis perspiciatis sapiente incidunt qui, atque voluptate dolorum
            modi aperiam voluptatem harum unde earum, possimus eveniet animi cum
            porro iste iusto! Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Distinctio neque asperiores officia similique
            consequuntur? Voluptatem, provident aliquam! Delectus deleniti eum
            ipsa, iure omnis dolore distinctio. Laudantium eveniet quibusdam
            doloribus amet.
          </p>
          <h5 className={styles.h5} id="End">
            End of game
          </h5>
          <p className={styles.prules}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            debitis perspiciatis sapiente incidunt qui, atque voluptate dolorum
            modi aperiam voluptatem harum unde earum, possimus eveniet animi cum
            porro iste iusto! Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Distinctio neque asperiores officia similique
            consequuntur? Voluptatem, provident aliquam! Delectus deleniti eum
            ipsa, iure omnis dolore distinctio. Laudantium eveniet quibusdam
            doloribus amet.
          </p>
        </div>
      </ModalBody>
    </Col>
  );
}

export default ModalBodyRules;
