
import React from 'react';
import ReactDOM from 'react-dom/client';
import Shop from "./Shop.js";
import Cart from "./Cart.js";
import Info from "./Info.js";
import Featured from './Featured.js';
import Student from './Student.js';
import Delete from './crudMethods/Delete.js';
import Create from './crudMethods/Create.js';


//This Javascript file controls the different views and holds the users cart
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //Current View state holds the value for what screen the user is on
      currentView: 'Featured',
      cartTotal: 0,
      cartItems:[],
      FormData: {},
    };
    this.handleViewChange = this.handleViewChange.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);
  }

  //clears the user's cart
  clearCart(){
    this.setState({cartItems: []});
  }

  //method that each screen gets through props to change the state
  handleViewChange(view) {
    if (this.state.currentView === 'Cart' && this.state.cartItems.length === 0 && view === 'Info'){
      console.log("no items in cart");
    } else {
      this.setState({ currentView: view });
    }
  }

  //adds item to cart
  addToCart(el) {
    this.setState(prevState => ({
      cartItems: [...prevState.cartItems, el]
    }));
  }

  //removes item to cart
  removeFromCart(el) {
    this.setState(prevState => ({
      cartItems: prevState.cartItems.filter((cartItem) => cartItem.id !== el.id)
    }));
  }

  //handles the submit for the user when they enter their credit card info
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

  //the method will choose what screen to render based on the currentView's state
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
          <button class="btn btn-outline-primary" onClick={() => this.handleViewChange('Featured')}>Return to List</button> 
        </div>
        <div class="col-2">
          <button class="btn btn-outline-primary" onClick={() => this.handleViewChange('Featured')} onClickCapture={() => this.clearCart()}>Cancel Purchase</button>
        </div>
        
      </div>
        <Cart cartItems={this.state.cartItems} cartTotal={this.state.cartTotal} onSubmit={this.handleSubmit}/>
        </React.StrictMode>;
    } else if (this.state.currentView === 'Info') {

      view = <React.StrictMode>
      <Info cartItems={this.state.cartItems} formData={this.state.formData}/>
      <div class="p-3">
        <button class="btn btn-outline-primary" onClick={() => this.handleViewChange('Featured')} onClickCapture={() => this.clearCart()}>Home Page</button>
      </div>
      </React.StrictMode>;
    }
    else if(this.state.currentView === 'Featured') {

      view = <React.StrictMode>
        <Featured  handleViewChange={this.handleViewChange} addToCart={this.addToCart} removeFromCart={this.removeFromCart} cartItems={this.state.cartItems}/>
      </React.StrictMode>
    }
    else if(this.state.currentView === 'Student') {

      view = <React.StrictMode>
        <Student  handleViewChange={this.handleViewChange}/>
      </React.StrictMode>
    }
    else if(this.state.currentView === 'Create') {

      view = <React.StrictMode>
        <Create  handleViewChange={this.handleViewChange}/>
      </React.StrictMode>
    }
    else if(this.state.currentView === 'Delete') {

      view = <React.StrictMode>
        <Delete  handleViewChange={this.handleViewChange}/>
      </React.StrictMode>
    }



    return (<div>{view}</div>);
  }
}

//displays the current page through reactDom
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);
