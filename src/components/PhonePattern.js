/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import React, { Component } from 'react';
import '../styles/phonepattern.scss';
import Phone from './Phone';
class PhonePattern extends Component {
  render() {
    return (
      <div className="phonepattern">
        <div className="phonefather">
          <h2>{this.props.productsname}</h2>
        </div>
        {/* <button onClick={this.props.onIncrement}> patternadd</button> */}
        <div className="phonechild">
          {this.props.products.map((product) => (
            <div className="phonesss">
              <Phone
                name={product.name}
                price={product.price}
                handleIncrement={this.props.onIncrement}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default PhonePattern;
