import React, { Component } from 'react';
import './App.scss';
import Header from './components/Header';
import PhonePattern from './components/PhonePattern';
class App extends Component {
  state = {
    products: [
      {
        category: 'iPhone',
        price: '￥5999',
        name: 'iPhone11',
      },
      {
        category: 'iPhone',
        price: '￥5399',
        name: 'iPhoneXS',
      },
      {
        category: 'iPhone',
        price: '￥3599',
        name: 'iPhoneSE',
      },
      {
        category: 'HUAWEI',
        price: '￥7999',
        name: 'HUAWEI P40 Pro+',
      },
      {
        category: 'HUAWEI',
        price: '￥5000',
        name: 'HUAWEI Mate 30',
      },
      {
        category: 'HUAWEI',
        price: '￥4000',
        name: 'HUAWEI nova 7',
      },
    ],
    number: 0,
  };
  handleIncrement = () => {
    this.setState({
      products: this.state.products,
      number: this.state.number + 1,
    });
  };
  render() {
    return (
      <main className="app">
        <Header number={this.state.number} />
        {/* <button onClick={this.handleIncrement}>appadd</button> */}
        <PhonePattern
          productsname={this.state.products[0].category}
          products={this.state.products.slice(0, 3)}
          onIncrement={this.handleIncrement}
        />
        <PhonePattern
          productsname={this.state.products[3].category}
          products={this.state.products.slice(3, 6)}
          onIncrement={this.handleIncrement}
        />
      </main>
    );
  }
}

export default App;
