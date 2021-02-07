import React, { Component } from 'react';
import SwapiService from '../../services/swapi'
import './Person.css'

const Record = ({person, field, label}) => {
  return(
    <li 
      className="list-group-item">
      <span className="term">{label}</span>
      <span>{ person[field] }</span>
    </li>
  )
}

export {
  Record
};
export class Person extends Component {
  swapiService = new SwapiService()

  state = {
    person: null,
    image: null
  };

  componentDidMount() {
    this.updatePerson();
  }

  componentDidUpdate(prevProps) {
    if(this.props.personId !== prevProps.personId) {
      this.updatePerson();
    }
  }

  updatePerson () {
    const {personId, getData, getImageUrl} = this.props;
    if(!personId) {
      return;
    }
    getData(personId)
      .then((person) => {
        this.setState({person, image: getImageUrl(person)
        })
    })
  }

  render() {
    const { person, image } = this.state
    
    if(!person) {
      return <span>Выберите персонажа из списка</span>;
    }
    const { id, name, gender, birthYear, eyeColor } = person
    
    return (
      <div className="person-details card">
        <img className="person-image"
          src={image} />
        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            { 
              React.Children.map(this.props.children, (child) => {
                return React.cloneElement(child, {person});
              }) 
            }
          </ul>
        </div>
      </div>
    )
  }
}