var React = require('react');
var ConfirmB = require('../components/ConfirmB');

var ConfirmBContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function () {
    return (
     isLoading: true,
     playerInfo: []
   }
 },
  render: function() {
    return (
      <ConfirmB />

    );
  }
});

module.exports = ConfirmBContainer;
