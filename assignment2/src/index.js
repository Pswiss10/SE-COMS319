
import React from 'react';
import ReactDOM from 'react-dom';
import Shop from "./Shop.js";
import Cart from "./Cart.js";
import Info from "./Info.js";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: 'Shop',
      cartTotal: 0,
      cartItems:[],
      FormData: {},
      cartItemsWQuant: [],
    };
    this.handleViewChange = this.handleViewChange.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);
  }

  clearCart(){
    this.setState({cartItems: []});
  }

  handleViewChange(view) {
    if (this.state.currentView === 'Cart' && this.state.cartItems.length === 0 && view === 'Info'){
      console.log("no items in cart");
    } else {
      this.setState({ currentView: view });
    }
  }

  addToCart(el) {
    this.setState(prevState => ({
      cartItems: [...prevState.cartItems, el]
    }));
  }

  removeFromCart(el) {
    this.setState(prevState => ({
      cartItems: prevState.cartItems.filter((cartItem) => cartItem.id !== el.id)
    }));
  }

  handleSubmit = (formData) => {
    formData.preventDefault(); 
    const data = new FormData(formData.target);
    console.log(data.get("name"));
    console.log(data.get("email")); 
    if (data.get("ccn").length !== 16){
      alert("Please enter a 16 digit CCN");
      return;
    } else if (data.get("zip").length !== 5){
      alert("Please enter a 5 digit Zip Code");
      return;
    }
    this.setState({formData});
    this.handleViewChange('Info');
    
  };

  render() {
    let view;

    if (this.state.currentView === 'Shop') {

      view = <React.StrictMode>
        <Shop addToCart={this.addToCart} removeFromCart={this.removeFromCart} cartItems={this.state.cartItems} />
        <button onClick={() => this.handleViewChange('Cart')}>Checkout</button>
        </React.StrictMode>;
    } else if (this.state.currentView === 'Cart') {

      view = <React.StrictMode>
        <button onClick={() => this.handleViewChange('Shop')}>Return to List</button>
        <Cart cartItems={this.state.cartItems} cartTotal={this.state.cartTotal} onSubmit={this.handleSubmit}/>
        </React.StrictMode>;
    } else if (this.state.currentView === 'Info') {

      view = <React.StrictMode>
      <Info formData={this.state.formData}/>
      <button onClick={() => this.handleViewChange('Shop')} onClickCapture={() => this.clearCart()}>Home Page</button>
      </React.StrictMode>;
    }

    return (<div>{view}</div>);
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
