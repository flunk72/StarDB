import React, { Component } from 'react';
import { Header } from '../Header';
import { RandomPlanet } from '../RandomPlanet';
import { ItemList } from '../ItemList';
import { Person } from '../Person';
import './App.css'

export default class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <RandomPlanet/>
        <div className="row mb2">
          <div className="col-md-6">
            <ItemList/>
          </div>
          <div className="col-md-6">
            <Person/>
          </div>
        </div>
      </div>
    );
  }
};
