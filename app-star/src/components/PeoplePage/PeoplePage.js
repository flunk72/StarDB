import React, { Component } from 'react';
import { ItemList } from '../ItemList/ItemList';
import { Person } from '../Person/Person';
import { Error } from '../Error/Error';
import Row from '../Row/Row'
import SwapiService from '../../services/swapi';
import './PeoplePage.css'

export class PeoplePage extends Component {
  swapiService = new SwapiService()

  state = {
    selectedPerson: 4,
    hasError: false
  }

  componentDidCatch() {
    this.setState({hasError: true})
  }

  onPersonSelected = (selectedPerson) => {
    this.setState({
      selectedPerson
    });
  }

  render() {
    if(this.state.hasError) {
      return <Error/>
    }
    const itemList = (
      <ItemList 
        onItemSelected={this.onPersonSelected}
        getData={this.swapiService.getAllPeople}>
        {(i) => (`${i.name} (${i.gender})`)}
      </ItemList>
    )
    const person = ( 
      <Person personId={this.state.selectedPerson}/>
    )
    return (
      <div>
        <Row left={itemList} right={person}/>
      </div>
    )
  }
}