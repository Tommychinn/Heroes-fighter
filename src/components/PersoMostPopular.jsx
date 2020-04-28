import React from 'react'
import {
    Row,
    Col,
  } from "reactstrap";
import SlickPersonnages from "./SlickPersonnages";

const popularHeroes = [
    149,
    70,
    213,
    418,
    309,
    157,
    303,
    13,
    540,
    620,
    659,
    352,
    349,
    345,
    346,
]

function PersoMostPopular (props) {
  return (
    <div>
        {popularHeroes.filter(id => {
            return id === hero.id
        
        (<SlickPersonnages title="Les + populaires" subtitle="Tous les personnages"/>)
        }
        )
    }
    </div>
    )
}





export default PersoMostPopular;