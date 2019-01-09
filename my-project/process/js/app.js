import React from 'react';
import ReactDom from 'react-dom';

var MainInterface = () => (
  <div className="interface">
    <h1>Pet Appointments</h1>
    <ul>
      <li>Buffy 3:30 PM</li>
      <li>Spot 8:30 PM</li>
      <li>Goldie 3:50 PM</li>
    </ul>
  </div>
);
ReactDom.render(<MainInterface/>, document.getElementById('petAppointments'));
