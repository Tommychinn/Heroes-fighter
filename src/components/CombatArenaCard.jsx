import React from "react";

function CombatArenaCard(props) {
    return (
        <>
            <div>
                <img src={props.url} alt={props.name} />
            </div>
        </>
    )
}

export default CombatArenaCard;