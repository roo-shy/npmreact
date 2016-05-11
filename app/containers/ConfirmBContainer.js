var React = require('react');
var ConfirmB = require('../components/ConfirmB');

var ConfirmBContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  render: function() {
    return (
      <ConfirmB />

    );
  }
});

module.exports = ConfirmBContainer;
