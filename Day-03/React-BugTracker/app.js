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
              <h3>Greeter</h3>
              <input type="text" ref="txtName" />
              <input type="text" ref="txtCount" />
              <input type="button" value="Greet" onClick={this.onGreet} id="btnGreet"/>
                {messages}
          </div>
        );
    }
});

var App = React.createClass({
    render : function(){
        return (
            <div>
                <Greeter />
                <hr/>
                <ProductList />
            </div>
        )
    }
});

var ProductList = React.createClass({
    getInitialState : function(){
        return {
            list : ["Pen", "Pencil"],
            message : "[default message]"
        };
    },
    onAddProduct : function(){
        var newProductName = this.refs.txtProductName.value;
        this.state.list.push(newProductName);
        this.setState({
            message : 'A new product is added - [' + newProductName + ']'
        });
    },
    render : function(){
        var productItems = this.state.list.map(function(product){
            return (<li>{product}</li>)
        });
        return (
            <div>
                <h3>Product List</h3>
                <label>Product Name :</label>
                <input type="text" ref="txtProductName" />
                <input type="button" value="Add Product" onClick={this.onAddProduct} />
                <ol>
                    {productItems}
                </ol>
                <div>{this.state.message}</div>
            </div>
        );
    }
})

ReactDOM.render(
    <App></App>,
    document.getElementById("content")
);
