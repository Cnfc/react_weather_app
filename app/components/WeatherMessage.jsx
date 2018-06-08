
var React = require('react');

var WeatherMessage = React.createClass({
  render: function(){
    var {temp, location} = this.props;
    return(
      <div>

        <p>It is {temp} in {location} Message</p>
      </div>
    )
  }
})


module.exports = WeatherMessage;
