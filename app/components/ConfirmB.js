var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../styles');
var Link = require('react-router').Link;
var UserDetails = require('./UserDetails');
var UserDetailsWrapper = require('./UserDetailsWrapper');

function puke (object) {
  return <pre>{JSON.stringify(object, null, ' ')}</pre>
}
function ConfirmB (props) {
  return props.isLoading === true
  ? <p> LOADING! </p>
  : <div className ="jumbotron col-sm-12 text-center" style={styles.transparentBg}>
    <h1>Confirm Players</h1>
   <div className ='col-sm-8 col-sm-offset-2'>
     <UserDetailsWrapper header='Player One'>
      <UserDetails info={props.playersInfo[0]}/>
     </UserDetailsWrapper>
      <UserDetailsWrapper header='Player Two'>
       <UserDetails info={props.playersInfo[1]}/>
      </UserDetailsWrapper>
    </div>
    <div className ='col-sm-8 col-sm-offset-2'>
     <div className='col-sm-12' style={styles.space}>
       <button className='button' className='btn btn-lg btn-success' onClick={props.onInitiateBattle}>
       Start
       </button>
     </div>
     <div className='col-sm-12' style={styles.space}>
       <Link to='/playerOne'>
       <button type='button' className='btn btn-lg btn-danger'>
       Reselect Players
       </button>
       </Link>
     </div>
    </div>
  </div>
}

ConfirmB.PropTypes = {
  isLoading: PropTypes.bool.isRequired,
  onInitiateBattle: PropTypes.func.isRequired,
  playerInfo: PropTypes.array.isRequired,
}

module.exports = ConfirmB;
