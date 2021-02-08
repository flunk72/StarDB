import React, { Component } from 'react';
import { Header } from '../Header';
import { Error } from '../Error'
import SwapiService from '../../services/swapi';
import { SwapiServiceProvider } from '../SwapiServiceDetails'
import './App.css'

import  { PersonDetails,
PlanetDetails,
StarshipDetails,
PersonList,
PlanetList,
StarshipList } from '../sw-components'

export default class App extends Component {
  swapiService = new SwapiService()
  state = {
    hasError: false
  }
  render() {
    if(this.state.hasError) {
      return <Error/>
    }

    return (
      <SwapiServiceProvider value={this.swapiService}>
        <div className="stardb-app">
          <Header />
          <PersonDetails personId={11}/>
          <PlanetDetails personId={5}/>
          <StarshipDetails personId={9}/>
          <PersonList/>
          <StarshipList/>
          <PlanetList/>
        </div>
      </SwapiServiceProvider>
    );
  }
};
