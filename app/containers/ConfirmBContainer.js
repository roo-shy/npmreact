var React = require('react');
var ConfirmB = require('../components/ConfirmB');

var ConfirmBContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function () {
    return {
     isLoading: true,
     playerInfo: []
   }
 },

 componentDidMount: function () {
   var query = this.props.location.query;
   console log('QUERY', query);
   //Fetch info from GitHub and update the state
 },

  render: function() {
    return (
      <ConfirmB
      isLoading={this.props.isLoading}
      playersInfo={this.state.playersInfo}/>

    );
  }
});

module.exports = ConfirmBContainer;
