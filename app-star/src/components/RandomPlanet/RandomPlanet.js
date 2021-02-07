import React, { Component } from 'react';
import SwapiService from '../../services/swapi'
import { Loader } from '../Loader/Loader';
import { Error } from '../Error/Error';
import './RandomPlanet.css'


export class RandomPlanet extends Component {
  swapiService = new SwapiService()
  state = {
    planet: {},
    loading: true,
    error: false
  }

  componentDidMount() { //  вызов сервиса, который получает данные
    this.updatePlanet();
    this.interval = setInterval(this.updatePlanet, 15000)
  }

  onPlanetLoaded = (planet) => {
    this.setState({planet, loading: false})
  }

  onError = (err) => {
    this.setState({error: true, loading: false})
  }

  updatePlanet = () => {
    const id = Math.floor(Math.random()* 25) + 2;
    this.swapiService.getPlanet(id)
    .then(this.onPlanetLoaded)
    .catch(this.onError)
  }

  render() {
    const { planet, loading, error } = this.state;

    const hasData = !(loading || error);

    const errorMessage = error ? <Error/>: null
    const spinner = loading ? <Loader/> : null;
    const content = hasData ? <PlanetView planet={planet}/> : null;
    return (
      <div className="random-planet jumbotron rounded">
        {errorMessage}
        {spinner}
        {content}
      </div>

    );
  }
}

const PlanetView = ({planet}) => {
  const { id, name, population, rotation, diameter } = planet;
  return (
    <React.Fragment>
      <img className="planet-image"
              src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}/>
          <div>
            <h4>{name}</h4>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <span className="term">Population</span>
                <span>{population}</span>
              </li>
              <li className="list-group-item">
                <span className="term">Rotation Period</span>
                <span>{rotation}</span>
              </li>
              <li className="list-group-item">
                <span className="term">Diameter</span>
                <span>{diameter}</span>
              </li>
            </ul>
          </div>
    </React.Fragment>
  )
}