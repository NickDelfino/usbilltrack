/**
 * Created by nickdelfino on 9/17/17.
 */
import React from 'react';
import createReactClass from 'create-react-class';
import axios from 'axios';
import Router from 'next/router';

import Section from '../Common/Section';
import ActionItem from '../ActionItem';
import VoteItem from '../VoteItem';
import Spinner from '../Common/Spinner';

const Bill = createReactClass({
  getInitialProps(){
    return {}
  },

  getInitialState(){
    return{
      loading: false,
      bill: undefined
    }
  },

  componentDidMount(){
    const slug = this.props.slug.split('-');

    if(slug) {
      this.loadBill(slug[1], slug[0]);
    }else{
      Router.push('/');
    }
  },

  loadBill(congress, slug) {
    this.setState({ loading: true });
    axios.get(`https://api.propublica.org/congress/v1/${congress}/bills/${slug}.json`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-API-Key': '<placeholder>'
      }
    }).then(response => {
      console.log(response);
      if (response.data.status === 'OK') {
        const bill = response.data.results[0];
        this.setState({ bill,
          loading: false });
      } else {
        this.setState({ bill: undefined,
          loading: false });
      }
    }).catch(response => {
      console.log(response);
      this.setState({ loading: false });
    })
  },

  createActionItems(actions){
    const actionElements = [];

    if(actions.length === 0) {
      actionElements.push(<ActionItem key="empty-action"/>);
      return actionElements;
    }

    for(let actionIndex = 0; actionIndex < actions.length; actionIndex++){
      actionElements.push(
          <ActionItem
            key={actions[actionIndex].id}
            action = {actions[actionIndex]}
            first={actionIndex === 0}
          />)
    }

    return actionElements;
  },

  createVoteItems(votes){
    const voteElements = [];

    if(votes.length === 0) {
      voteElements.push(<VoteItem key="empty-vote"/>);
      return voteElements;
    }

    for(let voteIndex = 0; voteIndex < votes.length; voteIndex++){
      const vote = votes[voteIndex];
      voteElements.push(
          <VoteItem
              key={vote.date + vote.time}
              vote = {vote}
              first={voteIndex === 0}
          />)
    }

    return voteElements;
  },

  createSummaryItem(summary){
    return (
        <div key="summary" className="action-item-header-padding">
          {!summary ? 'No summary at this time.' : summary}
        </div>
    );
  },

  renderBill(){
    const { bill, loading } = this.state;

    switch(loading){
      case true:
        return(
          <Spinner />
        );

      case false:
        if(bill) {
          let { title, summary, actions, votes } = bill;

          return (
              <div className="bill-detail-item">
                <div className="title">
                  {title}
                </div>
                <Section title="Summary" content={ this.createSummaryItem(summary) } expanded paddingBottom={5}/>
                <Section title="Actions" content={ this.createActionItems(actions) } paddingBottom={5}/>
                <Section title="Votes" content={ this.createVoteItems(votes) } paddingBottom={5}/>
              </div>
          );
        }else{
          return (
              <div className="bill-detail-item">
                Issue finding bill.
              </div>
          );
        }
        break;

      default:
        return(
            <Spinner />
        );
    }
  },

  render() {
    return(
      <div className='bill-detail'>
          {this.renderBill()}
          <style>{`
          .bill-detail{
              display:flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              margin-bottom: 10px;
          }

          .title{
              font-weight: bold;
          }

          @media screen and (min-width: 700px) {
              /* For desktop phones: */
              .bill-detail-item{
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
              .bill-detail-item{
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
          `}</style>
      </div>
    );
  }
});

export default Bill;
