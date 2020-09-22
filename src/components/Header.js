/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import '../styles/header.scss';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="store">
          <h1>Store</h1>
        </div>
        <div className="buyNum">
          <p>{this.props.number}</p>
        </div>
      </div>
    );
  }
}

export default Header;
