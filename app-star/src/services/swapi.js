export default class SwapiServise {
  async getRes(url) {
    const res = await fetch(url);
    if(!res.ok) {
      throw new Error (`error ${url}`)
    }
    return await res.json()
  }
  async getAllPeopple() {
    const res = this.getRes('https://swapi.dev/api/people/')
    return res.results.map(this.transformPerson)
  }
  async getPerson(id) {
    const person = this.getRes(`https://swapi.dev/api/people/${id}/`)
    return this.transformPerson(person)
  }
  async getPlanets() {
    const res = await this.getRes(`https://swapi.dev/api/planets/`)
    return res.results.map(this.transformPlanet)
  }
  async getPlanet(id) {
    const planet = await this.getRes(`https://swapi.dev/api/planets/${id}/`)
    return this.transformPlanet(planet)
  }
  async getAllStarships() {
    const res = this.getRes(`https://swapi.dev/api/starships/`)
    return res.results.map(this.transformStarship)
  }
  async getStarship(id) {
    const starship = this.getRes(`https://swapi.dev/api/starships/${id}/`)
    return this.transformStarship(starship)
  }
  extactId(i) {
    const idRegex = /\/([0-9]*\/$)/;
    return i.url.match(idRegex)[1];
  }
  transformPlanet(planet) {
    return {
      id: this.extactId(planet),
      name: planet.name,
      population: planet.population,
      rotation: planet.rotation_period,
      diameter: planet.diameter
    }
  }
  transformStarship(starship) {
    return {
      id: this.extactId(starship),
      name: starship.name,
      model: starship.model,
      manufacturer: starship.manufacturer,
      costInCredits: starship.costInCredits,
      lenght: starship.lenght,
      crew: starship.crew,
      passengers: starship.passengers,
      cargoCapacity: starship.cargoCapacity
    }
  }
  transformPerson(person) {
    return {
      id: this.extactId(person),
      name: person.name,
      gender: person.gender,
      birthYear: person.birthYear,
      eyeColor: person.eyeColor
    }
  }
}