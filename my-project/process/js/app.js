import React from 'react';
import ReactDom from 'react-dom';

class MainInterface extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      myAppointment: []
    };
  }

  componentDidMount(){
    this.serverRequest = $.get('./js/data.json', function(result){
      var tempApts = result;
      this.setState({myAppointment: tempApts});
    }.bind(this));
  }

  componentWillUnmount(){
    this.serverRequest.abort();
  }

  render(){
    const filteredApts = this.state.myAppointment.map((value, index) => {
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
