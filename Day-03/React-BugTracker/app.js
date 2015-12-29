var Greeter = React.createClass({
    getInitialState : function(){
        return {message : '[default message]'};
    },
    onGreet : function(){
          console.log("Greet button is clicked");
          var name = this.refs.txtName.value;
          var count = parseInt(this.refs.txtCount.value, 10);
          var greetMsg = 'Hi ' + name + ', Have a nice day!';
          this.setState({message : greetMsg});
          this.setState({count : count});
        },
    render : function(){
        console.log('re rendering');
        var messages = [];
        for(var i=0; i<this.state.count;i++)
            messages.push((<div> {this.state.message} </div>))

        return (
          <div>
              <input type="text" ref="txtName" />
              <input type="text" ref="txtCount" />
              <input type="button" value="Greet" onClick={this.onGreet} id="btnGreet"/>
                {messages}
          </div>
        );
    }
});

ReactDOM.render(
    <Greeter message="Welcome to react!"></Greeter>,
    document.getElementById("content")
);
