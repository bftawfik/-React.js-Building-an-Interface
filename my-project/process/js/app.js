import React from 'react';
import ReactDom from 'react-dom';

class MainInterface extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      title: 'Appointments',
      show: true
    };
  }

  render(){
    let showTitle;
    showTitle = this.state.show ? 'New ' : null;

    let displayList = {
      display: this.state.show ? 'block' : 'none',
      color : 'red'
    }
    
    return(
      <div className="interface">
        <h1>{showTitle}{this.state.title}</h1>
        <ul style={displayList}>
          <li>Buffy 3:30 PM</li>
          <li>Spot 8:30 PM</li>
          <li>Goldie 3:50 PM</li>
        </ul>
      </div>
    )
  }

}

ReactDom.render(<MainInterface/>, document.getElementById('petAppointments'));
