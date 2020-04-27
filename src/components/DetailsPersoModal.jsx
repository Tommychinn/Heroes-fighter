import React from 'react';

import { Row, Col, Progress } from 'reactstrap';


function DetailsPersoModal ({ powerstats }) {

    const powerstat = Object.keys(powerstats).map(stat => (
         [(stat), powerstats[stat]]
    ))
    console.log(powerstat)
    
    return (
        <>
            {powerstat.map(stat => (
                <Row>
                    <Col>{stat[0]}</Col>
                    <Col>
                        <Progress value={parseInt(stat[1])} max ="100" />
                    </Col>
                </Row> 
            ))}

        </>
           )
       }
    
    
export default DetailsPersoModal;