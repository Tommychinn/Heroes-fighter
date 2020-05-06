import React from 'react';
import PropTypes from 'prop-types';

function CombatArenaCard({ url, name }) {
  return (
    <>
      <div>
        <img src={url} alt={name} />
      </div>
    </>
  );
}
CombatArenaCard.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
export default CombatArenaCard;
