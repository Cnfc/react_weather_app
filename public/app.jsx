
// Every seconds
setInterval(logClockTime, 1000);

function logClockTime () {
  let time = getClockTime();

  console.clear();
  console.log(time);
}

function getClockTime(){
  //Current time
  var date = new Date();
  var time = '';

  var time = {
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds(),
    ampm: "AM"
  }

  if(time.hours == 12) {
    time.ampm = "PM";
  } else if(time.hours > 12) {
    time.ampm = "PM";
    time.hours -= 12;
  }
  if(time.hours < 10) {
    time.hours = "0" + time.hours;
  }

  if(time.minutes< 10) {
    time.minutes = '0' + time.minutes;
  }

  if(time.seconds<10) {
    time.seconds = '0' + time.seconds;
  }
  return time.hours+":"
  + time.minutes + ':'
  + time.seconds + ':'
  + time.ampm;

}











































































//
// var GreeterMessage = React.createClass({
//   render: function(){
//     var name = this.props.name;
//     var message = this.props.message;
//
//     return(
//       <div>
//         <h1>Hello {name}!</h1>
//         <p>{message}</p>
//       </div>
//     );
//   }
// });
//
// var GreeterForm = React.createClass({
//   onFormSubmit: function(e) {
//     e.preventDefault();
//
//     var name = this.refs.name.value;
//
//     if(name.length>0){
//       this.refs.name.value = '';
//       this.props.onNewName(name);
//
//     }
//   },
//   render: function () {
//     return(
//       <form onSubmit={this.onFormSubmit}>
//         <input type="text" ref="name"/>
//         <button>Set Name</button>
//       </form>
//     );
//   }
// });
//
// var Greeter = React.createClass({
//   getDefaultProps: function(){
//     return {
//       name: 'React',
//       message: 'This is the default message!'
//     };
//   },
//
//   getInitialState: function() {
//     return{
//       name: this.props.name
//     };
//   },
//
//   handleNewName: function(name){
//     this.setState({
//       name: name
//     });
//   },
//
//   render: function() {
//     var name = this.state.name;
//     var message = this.props.message;
//
//     return (
//       <div>
//         <GreeterMessage name = {name} message={message}/>
//         <GreeterForm onNewName={this.handleNewName}/>
//       </div>
//     );
//   }
// });
//
// var firstName = 'Stats'
// ReactDOM.render(
//   <Greeter name = {firstName}/>,
//   document.getElementById('app')
// );
