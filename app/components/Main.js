var React = require('react');
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');
require('../main.css');

var Main = React.createClass({
  render: function () {
    return (
      <div className='main-container'>

        <ReactCSSTransitionGroup
        transitionName='main-container'
        transitionEnterTimeout={500}
        transitionLeaveTimeout={500}>
           {this.props.children}
        </ReactCSSTransitionGroup>

      </div>
    )
  }
});

module.exports = Main;
