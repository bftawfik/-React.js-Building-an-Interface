import React from 'react';
import ReactDom from 'react-dom';
import AptList from './AptList';
import AddAppointment from './AddAppointment';
import SearchAppointments from './SearchAppointments';



class MainInterface extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      myAppointment: [],
      aptBodyVisible: false,
      orderBy: 'aptDate',
      orderDir: 'desc'
    };

    this.deleteMessage = this.deleteMessage.bind(this);
    this.toggleAddDisplay = this.toggleAddDisplay.bind(this);
    this.AddItem = this.AddItem.bind(this);
    this.sortByHandelar = this.sortByHandelar.bind(this);
    this.sortDirHandelar = this.sortDirHandelar.bind(this);
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

  toggleAddDisplay(){
    this.setState({aptBodyVisible: !this.state.aptBodyVisible});
  }

  AddItem(item){
    this.setState({myAppointment: [...this.state.myAppointment, item]})
  }

  sortByHandelar(value){
    this.setState({orderBy: value});
  }

  sortDirHandelar(value){
    this.setState({orderDir: value});
  }

  render(){
    const sortValues = this.state.orderDir === 'asc' ? [-1, 1] : this.state.orderDir === 'desc' ? [1, -1] : null
    const filteredApts = this.state.myAppointment.sort((itemA, itemB) => itemA[this.state.orderBy].toLowerCase() < itemB[this.state.orderBy].toLowerCase() ? sortValues[0] : sortValues[1])
    .map((value, index) => <AptList key={index} singleItem={value} whichItem={value} onDelete={this.deleteMessage}/>);
    return(
      <div className="interface">
        <SearchAppointments orderBy={this.state.orderBy} orderDir={this.state.orderDir} sortByHandelar={this.sortByHandelar} sortDirHandelar={this.sortDirHandelar}/>
        <AddAppointment bodyVisible={this.state.aptBodyVisible} handleToggle={this.toggleAddDisplay} addApt={this.AddItem}/>
        <ul className="item-list media-list">{ filteredApts }</ul>
      </div>
    )
  }

}

ReactDom.render(<MainInterface/>, document.getElementById('petAppointments'));
