import React from 'react';

class SearchAppointments extends React.Component{

  constructor(props){
    super(props);
    this.sortByHandelar = this.sortByHandelar.bind(this);
    this.sortDirHandelar = this.sortDirHandelar.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  sortByHandelar(e){
    // console.log(e.target.id)
    this.props.sortByHandelar(e.target.id);
  }

  sortDirHandelar(e){
    // console.log(e.target.id)
    this.props.sortDirHandelar(e.target.id);
  }

  handleSearch(e){
    // console.log(e.target.value);
    this.props.handleSearch(e.target.value);
  }

  render(){
    return(
      <div className="row search-appointments">
        <div className="col-sm-offset-3 col-sm-6">
          <div className="input-group">
            <input id="SearchApts" placeholder="Search" type="text" className="form-control" aria-label="Search Appointments" onChange={this.handleSearch}/>
            <div className="input-group-btn">
              <button type="button" className="btn btn-primary dropdown-toggle"
                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Sort by: <span className="caret"></span></button>
                <ul className="dropdown-menu dropdown-menu-right">
                  <li><a href="#" id="petName" onClick={this.sortByHandelar}>Pet Name { this.props.orderBy === 'petName' ? <span className="glyphicon glyphicon-ok"></span> : null}</a></li>
                  <li><a href="#" id="aptDate" onClick={this.sortByHandelar}>Date { this.props.orderBy === 'aptDate' ? <span className="glyphicon glyphicon-ok"></span> : null}</a></li>
                  <li><a href="#" id="ownerName" onClick={this.sortByHandelar}>Owner { this.props.orderBy === 'ownerName' ? <span className="glyphicon glyphicon-ok"></span> : null}</a></li>
                  <li role="separator" className="divider"></li>
                  <li><a href="#" id="asc" onClick={this.sortDirHandelar}>Asc { this.props.orderDir === 'asc' ? <span className="glyphicon glyphicon-ok"></span> : null}</a></li>
                  <li><a href="#" id="desc" onClick={this.sortDirHandelar}>Desc { this.props.orderDir === 'desc' ? <span className="glyphicon glyphicon-ok"></span> : null}</a></li>
                </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default SearchAppointments;
