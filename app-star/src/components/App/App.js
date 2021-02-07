import React, { Component } from 'react';
import { Header } from '../Header';
import { RandomPlanet } from '../RandomPlanet';
import { PeoplePage } from '../PeoplePage';
import { ItemList } from '../ItemList';
import { Person, Record } from '../Person/Person';
import Row from '../Row'
import { Error } from '../Error'
import SwapiService from '../../services/swapi';
import './App.css'

export default class App extends Component {
  swapiService = new SwapiService()
  state = {
    hasError: false
  }
  render() {
    if(this.state.hasError) {
      return <Error/>
    }

    const person = (
      <Person 
        personId={11}
        getData={this.swapiService.getPerson}
        getImageUrl={this.swapiService.getPersonImage}
      >
        <Record field="gender" label="Gender"/>
        <Record field="eyeColor" label="Eye Color"/>
      </Person>
    )
    const starship = (
      <Person 
        personId={3}
        getData={this.swapiService.getStarship}
        getImageUrl={this.swapiService.getStarshipImage}
      >
        <Record field="model" label="Model"/>
        <Record field="costInCredits" label="Cost"/>
      </Person>
    )

    return (
      <div>
        <Header/>
        <RandomPlanet/>
        {/* <PeoplePage/> */}
        <Row 
          left={person}
          right={starship}
        >

        </Row>
        {/* <div className="row mb2 mt-5">
          <div className="col-md-6">
            <ItemList 
              onItemSelected={this.onPersonSelected}
              getData={this.swapiService.getPlanets}
              renderItem={(item) => item.name}
            />
          </div>
          <div className="col-md-6">
            <Person personId={this.state.selectedPerson}/>
          </div>
        </div>
        <div className="row mb2 mt-5">
          <div className="col-md-6">
            <ItemList 
              onItemSelected={this.onPersonSelected}
              getData={this.swapiService.getAllStarships}
              renderItem={(item) => item.name}
            />
          </div>
          <div className="col-md-6">
            <Person personId={this.state.selectedPerson}/>
          </div>
        </div> */}
      </div>
    );
  }
};
