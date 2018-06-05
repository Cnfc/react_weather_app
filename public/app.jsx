
const oneSecond = () => 1000;
const getCurrentTime = () => newDate();
const clear = () => console.clear();
const log = message => console.log(message);


const serializeClockTime = date =>
  ({
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds()
  });

const civilianHours = clockTime =>
  ({
    ...clockTime,
    hours: (clockTime.hours>12) ?
      clockTime.hours -12:
      clockTime.hours

  })
const appendAMPM = clockTime =>
  ({
    ...clockTime,
    ampm: (clockTime.hours >= 12) ? "PM": "AM"
  })

const display = target => time => target(time)
const formatClock = format =>
  time =>
    format.replace("hh", time.hours)
    .replace("mm", time.minutes)
    .replace("ss", time.seconds)
    .replace("tt", time.ampm)

const pretendZero = key => clockTime =>
  ({
    ...clockTime,
    [key]: (clockTime[key] <10 ) ?
      "0" + clockTime[key] :
      clockTime[key]
  })


  const convertToCivilianTime = clockTime =>
    compose(
      appendAMPM,
      civilianHours
    )(clockTime)

const doubleDigits = civilianTime =>
  compose(
    prependZero("hours"),
    prependZero("minutes"),
    prependZero("seconds")
  )(civilianTime)

const startTicking = () =>
  setInterval(
    compose (
      clear,
      getCurrentTime,
      serializeClockTime,
      convertToCivilianTime,
      doubleDigits,
      formatClock("hh:mm:ss tt"),
      display(log)
    ),
    oneSecond()
)
  startTicking()


































































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
