export default class SwapiService {
  apiBase = 'https://swapi.dev/api';
  imageBase = 'https://starwars-visualguide.com/assets/img';

  getRes = async (url) => {
    const res = await fetch(`${this.apiBase}${url}`);
    if(!res.ok) {
      throw new Error (`error ${url}`)
    }
    return await res.json()
  }
   getAllPeople = async () => {
    const res = await this.getRes('/people/')
    return res.results.map(this.transformPerson)
  }
   getPerson = async (id) => {
    const person = await this.getRes(`/people/${id}`)
    return this.transformPerson(person)
  }
   getPlanets = async () => {
    const res = await this.getRes(`/planets/`)
    return res.results.map(this.transformPlanet)
  }
   getPlanet = async (id) => {
    const planet = await this.getRes(`/planets/${id}`)
    return this.transformPlanet(planet)
  }
   getAllStarships = async () => {
    const res = await this.getRes(`/starships/`)
    return res.results.map(this.transformStarship)
  }
   getStarship = async (id) => {
    const starship = await this.getRes(`/starships/${id}`)
    return this.transformStarship(starship)
  }

  getPersonImage = ({id}) => {
    return `${this.imageBase}/characters/${id}.jpg`
  };

  getStarshipImage = ({id}) => {
    return `${this.imageBase}/starships/${id}.jpg`
  };

  getPlanetImage = ({id}) => {
    return `${this.imageBase}/planets/${id}.jpg`
  };

  extactId = (item) => {
    const idRegex = /\/([0-9]*\/$)/;
    return item.url.match(idRegex)[1];
  }
  transformPlanet = (planet) => {
    return {
      id: this.extactId(planet),
      name: planet.name,
      population: planet.population,
      rotation: planet.rotation_period,
      diameter: planet.diameter
    }
  }
  transformStarship = (starship) => {
    return {
      id: this.extactId(starship),
      name: starship.name,
      model: starship.model,
      manufacturer: starship.manufacturer,
      costInCredits: starship.cost_in_credits,
      lenght: starship.lenght,
      crew: starship.crew,
      passengers: starship.passengers,
      cargoCapacity: starship.cargo_capacity
    }
  }
  transformPerson = (person) => {
    return {
      id: this.extactId(person),
      name: person.name,
      gender: person.gender,
      birthYear: person.birth_year,
      eyeColor: person.eye_color
    }
  }
}