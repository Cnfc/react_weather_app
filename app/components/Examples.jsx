
var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
  return(
    <div>
      <h1 className="text-center page-title">Examples components</h1>
      <p>here are a few example locations to try out:</p>
      <ol>
        <li>
          <Link to="/?location=Moscow">Moscow, Russia</Link>
          console.log('Moscow');
        </li>
        <li>
          <Link to="/?location=Ria">Rio, Brazil</Link>
          console.log('Rio');
        </li>
      </ol>
    </div>
  )
};


module.exports = Examples;
