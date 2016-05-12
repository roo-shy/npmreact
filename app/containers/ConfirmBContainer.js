var React = require('react');
var ConfirmB = require('../components/ConfirmB');
var githubHelpers = require('../utils/githubHelpers');

var ConfirmBContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function () {
    console.log('getInitialState')
    return {
     isLoading: true,
     playerInfo: []
   }
 },

componentWillMount: function () {
  console.log('componentWillMount')
},

 componentDidMount: function () {
   var query = this.props.location.query;
   //https://egghead.io/playlists/the-this-key-word-250c37d9
   githubHelpers.getPlayersInfo([query.playerOne, query.playerTwo])
    .then(function (players) {
      this.setState({
        isLoading: false,
         playersInfo: [players[0], players[1]]
      })
    }.bind(this))
 },
 componentWillReceiveProps: function () {
   console.log('componentWillReceiveProps')
 },

 componentWillUnmount: function () {
   console.log('componentWillUnmount')
 },

  render: function() {
    return (
      <ConfirmB
      isLoading={this.state.isLoading}
      playersInfo={this.state.playersInfo}/>

    );
  }
});

module.exports = ConfirmBContainer;
