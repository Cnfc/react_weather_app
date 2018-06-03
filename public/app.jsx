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

  onButtonClick: function(e){
    e.preventDefault();

    var nameRef = this.refs.name;
    var name = this.refs.name.value;
    nameRef.value="";

    if(typeof name === 'string' && name.length>0 ) {
      this.setState({
        name: name
      });
    }
  },


  render: function() {
    var name = this.state.name;
    var message = this.props.message;
    return (
      <div>
        <h1>Hello {name}!</h1>
        <h2>{message} !!  </h2>
        <form onSubmit={this.onButtonClick}>
          <input type="text" ref="name"/>
          <button>Set Name</button>
        </form>
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
