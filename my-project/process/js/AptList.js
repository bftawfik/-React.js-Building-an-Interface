import React from 'react';

const AptList = (props) => (
  <li className="pet-item media">
    <div className="pet-head">
      <span className="pet-name">{props.value.petName}</span>
      <span className="apt-date pull-right">{props.value.aptDate}</span>
    </div>
    <div className="owner-name">
      <span className="label-item">{props.value.ownerName}</span>
    </div>
    <div className="apt-notes">{props.value.aptNotes}</div>
  </li>
);
export default AptList;
