var React = require('react');
var Results = require('..components/Results');

function ResultsContainer = React.createClass({
  getInitialState: function () {
    return {
      isLoading: true,
      scores: []

    }
  },
  render: function () {
    return (
     <Results />
  );
}

});

module.exports = ResultsContainer;
