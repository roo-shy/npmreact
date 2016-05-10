var React = require('react');
var transparentBg = require('../').transparentBg;
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var Home = React.createClass({
  render: function () {
    return (
      <div className='jumbotron col-sm-12 text-center' style= {transparentBg}>
       <h1>GitHub Battle</h1>
         <p className='lead'>Motto</p>
         <Link to='/playerOne'>
          <button type='button' className='btn btn-lg btn-success'>Get Started</button>
         </Link>
      </div>

    )
  }
})

module.exports = Home;
