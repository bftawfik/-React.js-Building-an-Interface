import React from 'react';
import ReactDom from 'react-dom';
import AptList from './AptList';


class MainInterface extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      myAppointment: []
    };

    this.deleteMessage = this.deleteMessage.bind(this);
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

  deleteMessage(item){
    console.log(item);
    this.setState({myAppointment: this.state.myAppointment.filter(value => value !== item)});
  }

  render(){
    const filteredApts = this.state.myAppointment.map((value, index) => <AptList key={index} singleItem={value} whichItem={value} onDelete={this.deleteMessage}/>);
    return(
      <div className="interface">
        <ul className="item-list media-list">{ filteredApts }</ul>
      </div>
    )
  }

}

ReactDom.render(<MainInterface/>, document.getElementById('petAppointments'));
