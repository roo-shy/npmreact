var React = require('react');

function ConfirmB (props) {
  return props.isLoading === true
  ? <p> LOADING! </p>
  : <p> CONFIRM BATTLE! </p>
}

module.exports = ConfirmB;
