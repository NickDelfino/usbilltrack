/**
 * Created by nickdelfino on 9/22/17.
 */
import React from 'react';
import createReactClass from 'create-react-class';
import Waypoint from 'react-waypoint';
import axios from 'axios';
import SearchBar from '../SearchBar';
import Spinner from '../Common/Spinner';
import BillItem from '../BillItem';

const BillListScreen = createReactClass({
  getInitialState() {
    return {
      elements: [],
      isLoading: false,
      offset: 0,
      searchText: '',
      currentSearch: null,
      isSearch: false,
      moreBills: true
    }
  },

  load(searchText) {
    let url = this.getUrl(searchText);

    axios.get(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-API-Key': '<placeholder>'
      }
    }).then(responseData => {
      if (responseData.data.status === 'OK') {
        let that = this;

        const bills = responseData.data.results[0].bills;
        let newElements = that.buildElements(bills, bills.length);

        that.setState({
          isLoading: false,
          elements: that.state.elements.concat(newElements),
          offset: that.state.offset + 1,
          moreBills: bills.length >= 20
        });
      } else {
        this.setState({
          isLoading: false
        });
      }
    }).catch(response => {
      this.setState({
        isLoading: false
      });
    });
  },

  buildElements(bills, length) {
    const elements = [];
    for (let i = 0; i < length - 1; i++) {
      elements.push(
          <BillItem key={bills[i].bill_id} bill={bills[i]}/>
      );
    }
    return elements;
  },

  renderWaypoint: function() {
    if (!this.state.isLoading && this.state.moreBills) {
      return (
          <Waypoint
              onEnter={this.load}
              threshold={2.0}
          />
      );
    }
  },

  isLoading() {
    if (this.state.isLoading) {
      return (
          <Spinner/>
      );
    }
  },

  //Renders bill information if a search is empty or there are no more bills matching
  //a criteria
  renderEndOfBills(){
    const { isSearch, moreBills, elements, isLoading } = this.state;

    if(isSearch && !moreBills && elements.length === 0 && !isLoading){
      return(
        <div className="bill-info" style={{ paddingTop: 10 }}>
          No bills found.
        </div>
      );
    }else if(!moreBills && elements && !isLoading){
      return(
        <div className="bill-info" style={{ paddingTop: 10 }}>
          End of bills.
        </div>
      );
    }
  },

  getUrl(searchText){
    const { currentSearch, isSearch, offset } = this.state;

    let url;

    if(typeof searchText === 'string'){
      url = `https://api.propublica.org/congress/v1/bills/search.json?query=${searchText}&offset=0`;
      this.setState({
        isLoading: true,
        elements: [],
        offset: 0,
        isSearch: true,
        currentSearch: searchText,
        moreBills: false
      });
    }else if(isSearch){
      url = `https://api.propublica.org/congress/v1/bills/search.json?query=${currentSearch}&offset=${(offset * 20)}`;
      this.setState({
        isLoading: true
      });
    }else{
      url = `https://api.propublica.org/congress/v1/115/both/bills/active.json?offset=${(offset * 20)}`;
      this.setState({
        isLoading: true,
        isSearch: false
      });
    }

    return url;
  },

  onSearchChange(event) {
    this.setState({searchText: event.target.value});
  },

  handleKeyPress(target) {
    if(target.charCode === 13){
      const { searchText } = this.state;

      this.load(searchText);
    }
  },

  render() {
    return(
      <div className="infinite-list">
        <SearchBar value={this.state.searchText} onChange={this.onSearchChange} onKeyPress={this.handleKeyPress}/>
        {this.state.elements}
        {this.renderWaypoint()}
        {this.isLoading()}
        {this.renderEndOfBills()}
        <style jsx>{`
          .infinite-list{
              display:flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              margin-bottom: 20px;
          }

          .infinite-list-item:hover{
              background: #fafafa;
              cursor: pointer;
          }

          .bill-item-title{
              font-weight: bold;
          }

          .bill-item-section{
              border-top: solid thin #c1c1c1;
              margin-top: 10px;
              padding-top: 10px;
              cursor: pointer;
          }

          .inter-bill-section{
              padding-bottom: 5px;
          }

          @media screen and (min-width: 700px) {
              /* For desktop phones: */
              .infinite-list-item{
                  width: 600px;
                  padding: 10px;
                  margin-top: 10px;
                  margin-left: 10px;
                  margin-right: 10px;
                  background: white;
                  -moz-box-shadow:    2px 2px 2px 2px #ccc;
                  -webkit-box-shadow: 2px 2px 2px 2px #ccc;
                  box-shadow:         2px 2px 2px 2px #ccc;
              }
          }

          @media screen and (max-width: 700px) {
              /* For mobile phones: */
              .infinite-list-item{
                  width: 92%;
                  padding: 10px;
                  margin-top: 10px;
                  margin-left: 10px;
                  margin-right: 10px;
                  background: white;
                  -moz-box-shadow:    2px 2px 2px 2px #ccc;
                  -webkit-box-shadow: 2px 2px 2px 2px #ccc;
                  box-shadow:         2px 2px 2px 2px #ccc;
              }
          }
        `}
        </style>
      </div>
    );
  }
});

export default BillListScreen;