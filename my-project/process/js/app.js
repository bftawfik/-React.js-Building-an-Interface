import React from 'react';
import ReactDom from 'react-dom';

class MainInterface extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      data: [
        {
          "petName": "Buffy",
          "ownerName": "Hassum Harrod",
          "aptDate": "2016-06-20 15:30",
          "aptNotes": "This Chihuahua has not eaten for three days and is lethargic"
        },
        {
          "petName": "Spot",
          "ownerName": "Constance Smith",
          "aptDate": "2016-06-24 08:30",
          "aptNotes": "This German Shepherd is having some back pain"
        },
        {
          "petName": "Goldie",
          "ownerName": "Barot Bellingham",
          "aptDate": "2016-06-22 15:50",
          "aptNotes": "This Goldfish has some weird spots in the belly"
        },
        {
          "petName": "Mitten",
          "ownerName": "Hillary Goldwyn",
          "aptDate": "2016-06-21 9:15",
          "aptNotes": "Cat has excessive hairballs"
        }
      ]
    };
  }

  render(){
    const filteredApts = this.state.data.map((value, index) => {
      return(<li key={index} className="pet-item media">
        <div className="pet-head">
          <span className="pet-name">{value.petName}</span>
          <span className="apt-date pull-right">{value.aptDate}</span>
        </div>
        <div className="owner-name">
          <span className="label-item">{value.ownerName}</span>
        </div>
        <div className="apt-notes">{value.aptNotes}</div>
      </li>)
    });
    return(
      <div className="interface">
        <ul className="item-list media-list">{ filteredApts }</ul>
      </div>
    )
  }

}

ReactDom.render(<MainInterface/>, document.getElementById('petAppointments'));
