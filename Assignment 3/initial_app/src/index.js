import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Main from "./Main.js"
import Create from "./Create.js"
import Read from "./Read.js"
import Update from "./Update.js"
import Delete from "./Delete.js"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: 'Main'
    };
    this.handleViewChange = this.handleViewChange.bind(this);
  }

  handleViewChange(view) {
      this.setState({ currentView: view });
  }


render() {
  let view;

  if (this.state.currentView === 'Main') {

    view = <React.StrictMode>
      <Main handleViewChange={this.handleViewChange}/>
    </React.StrictMode>;

  } else if (this.state.currentView === 'Create') {

    view = <React.StrictMode>
        <Create handleViewChange={this.handleViewChange}/>
    </React.StrictMode>;

  } else if (this.state.currentView === 'Read') {

    view = <React.StrictMode>
      <Read handleViewChange={this.handleViewChange}/>
    </React.StrictMode>;

  } else if (this.state.currentView === 'Update') {

    view = <React.StrictMode>
      <Update handleViewChange={this.handleViewChange}/>
    </React.StrictMode>;

  } else if (this.state.currentView === 'Delete') {

    view = <React.StrictMode>
      <Delete handleViewChange={this.handleViewChange}/>
    </React.StrictMode>;
    
  }

  return (<div>{view}</div>);
};
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
