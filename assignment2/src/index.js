
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
    };
    this.handleViewChange = this.handleViewChange.bind(this);
  }

  handleViewChange(view) {
    this.setState({ currentView: view });
    if (view === 'Cart') {
      this.setState({ cartItems: this.state.cart });
    }
  }

  render() {
    let view;

    if (this.state.currentView === 'Shop') {
      view = <React.StrictMode>
        <Shop addToCart={this.addToCart} />
        <button onClick={() => this.handleViewChange('Cart')}>Checkout</button>
        </React.StrictMode>;
    } else if (this.state.currentView === 'Cart') {
      view = <React.StrictMode>
        <button onClick={() => this.handleViewChange('Shop')}>Return to List</button>
        <Cart cartItems={this.state.cart} />
        <button onClick={() => this.handleViewChange('Info')}>Confirm Purchase</button>
        </React.StrictMode>;
    } else if (this.state.currentView === 'Info') {
      view = <React.StrictMode>
      <Info />
      <button onClick={() => this.handleViewChange('Shop')}>Home Page</button>
      </React.StrictMode>;
    }

    return (<div>{view}</div>);
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
