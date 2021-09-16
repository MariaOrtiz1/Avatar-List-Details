import React from 'react';
import PropTypes from 'prop-types';

const Character = ({ name, image, affiliation, id }) => (
  <>
    <p>{id}</p>
    <p>{name}</p>
    <p>{image}</p>
    <p>{affiliation}</p>
  </>
);

Character.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  affiliation: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Character;
