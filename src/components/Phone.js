/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import React, { Component } from 'react';
import '../styles/phone.scss';

class Phone extends Component {
  render() {
    return (
      <div className="phone">
        <div className="phoneName">
          <p>{this.props.name}</p>
        </div>
        <div className="phonePicture">
          <img
            src={require('../assets/product_image_placeholder.png')}
            alt="myPicture"
          />
        </div>
        <div className="nameAndButt">
          <div className="phonePrice">
            <p>{this.props.price}</p>
          </div>
          <div className="addPhone">
            <button className="addbutton" onClick={this.props.handleIncrement}>
              add to cart
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Phone;
