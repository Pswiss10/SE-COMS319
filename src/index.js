
import React from 'react';
import ReactDOM from 'react-dom/client';
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
    console.log(data.get("ccn"));
    console.log(data.get("zip")); 
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
        <Shop handleViewChange={this.handleViewChange} addToCart={this.addToCart} removeFromCart={this.removeFromCart} cartItems={this.state.cartItems} />
        </React.StrictMode>;
    } else if (this.state.currentView === 'Cart') {

      view = <React.StrictMode>
      <div class="row p-3 justify-contents-start">
        <div class="col-2">
          <button class="btn btn-outline-primary" onClick={() => this.handleViewChange('Shop')}>Return to List</button> 
        </div>
        <div class="col-2">
          <button class="btn btn-outline-primary" onClick={() => this.handleViewChange('Shop')} onClickCapture={() => this.clearCart()}>Cancel Purchase</button>
        </div>
        
      </div>
        <Cart cartItems={this.state.cartItems} cartTotal={this.state.cartTotal} onSubmit={this.handleSubmit}/>
        </React.StrictMode>;
    } else if (this.state.currentView === 'Info') {

      view = <React.StrictMode>
      <Info cartItems={this.state.cartItems} formData={this.state.formData}/>
      <div class="p-3">
        <button class="btn btn-outline-primary" onClick={() => this.handleViewChange('Shop')} onClickCapture={() => this.clearCart()}>Home Page</button>
      </div>
      </React.StrictMode>;
    }

    return (<div>{view}</div>);
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);
