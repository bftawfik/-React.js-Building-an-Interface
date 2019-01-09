import React from 'react';
import ReactDom from 'react-dom';
import AptList from './AptList';


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
    const filteredApts = this.state.myAppointment.map((value, index) => <AptList value={value}  key={index}/>);
    return(
      <div className="interface">
        <ul className="item-list media-list">{ filteredApts }</ul>
      </div>
    )
  }

}

ReactDom.render(<MainInterface/>, document.getElementById('petAppointments'));
