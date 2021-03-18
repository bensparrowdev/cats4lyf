import './App.css';
import React from 'react';
import Product from './Components/Product.js';


class App extends React.Component {
  // state = { products/photos }
  render() {
    return (
      <div>
        <Product />
        {/* <Product data={this.state.products/photos} /> */}
        {/* <Modal data={this.state.products/photos} /> */}
      </div>
    )
  }
};

export default App;