import React, { Component } from 'react';
import './Error.css'


export class Error extends Component {
  render() {
    return(
      <div className="error-indicator">
        <span className="error-text">
          Что то пошло не так, дроиды решают проблему!!!
        </span>
      </div>
    )
  }
}