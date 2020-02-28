import React from "react";
import PropTypes from "prop-types";

/**
 * Functional react component for congratulary message
 * @function
 * @param {object} props - React props
 * @returns {JSX.Element}
 */
const Congrats = props => {
  if (props.success) {
    return (
      <div data-test="component-congrats">
        <span data-test="congrats-message">Congratulations!</span>
      </div>
    );
  } else {
    return (
      <div data-test="component-congrats">
        <span data-test="congrats-message"></span>
      </div>
    );
  }
};

Congrats.propTypes = {
  success: PropTypes.bool.isRequired
};

export default Congrats;
