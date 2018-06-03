// Second paragraph
var GreeterMessage = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Some H1</h1>
        <p> Some paragraph</p>
      </div>
    );
  }
});

// Second paragraph
var GreeterForm = React.createClass({
  onFormSubmit: function(e) {
    e.preventDefault();
    var name = this.refs.name.value;
    if(name.lenght>0){
      this.refs.name.value = '';
      this.props.onNewName(name);
    }
  },
  render: function() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <input type="text" ref="name"/>
        <button>Set Name</button>
      </form>
    );
  }
});

// First paragraph
var Greeter = React.createClass({
  getDefaultProps: function(){
    return {
      name: 'React',
      message: 'This is default message'
    };
  },

  getInitialState: function(){
    return {
      name: this.props.name
    };
  },

  handleNewName: function(name){
    this.setState({
      name: name
    });
  },


  render: function() {
    var name = this.state.name;
    var message = this.props.message;
    return (
      <div>
        <h1>Hello {name}!</h1>
        <h2>{message} !!  </h2>

        <GreeterMessage/>
        <GreeterForm onNewName={this.handleNewName}/>

      </div>
    );
  }
});

var firstName = 'Andrew';

ReactDOM.render(
  <Greeter name = {firstName}/>,
  document.getElementById('app')
);






























































//
