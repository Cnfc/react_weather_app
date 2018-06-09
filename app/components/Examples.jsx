
var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
  return(
    <div>
      <h1 className="text-center">Examples components</h1>
      <p>here are a few example locations to try out:</p>
      <ol>
        <li>
          <Link to="/?location=Moscow">Moscow, Russia</Link>
        </li>
        <li>
          <Link to="/?location=Ria">Rio, Brazil</Link>
        </li>
      </ol>
    </div>
  )
};


module.exports = Examples;
