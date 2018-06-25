/**
 * Created by nickdelfino on 9/17/17.
 */
import React from 'react';
import createReactClass from 'create-react-class';
import Router from 'next/router';

const BillItem = createReactClass({
  onBillClick() {
    Router.push({pathname: '/bill',
                  query:
                      {
                        slug: this.props.bill.bill_id
                      }
                });
  },

  render() {
    let {
      title,
      summary,
      sponsor_name,
      sponsor_state,
      sponsor_party,
      latest_major_action_date,
      latest_major_action,
      committees
    } = this.props.bill;

    if(title.length > 100){
      title = title.substring(0, 100) + '...';
    }

    if(summary.length > 300){
      summary = summary.substring(0, 300) + '...';
    }

    if(!summary || summary === ''){
      summary = 'No summary at this time.'
    }

    return(
          <div className="infinite-list-item" onClick={this.onBillClick}>
            <div className="bill-item-title">
              {title}
            </div>
            <div className="bill-item-section">
              <div className="inter-bill-section">
              {sponsor_name} - {sponsor_party} - {sponsor_state}
              </div>
              {summary}
            </div>
            <div className="bill-item-section">
              <div style={{ fontWeight: 'bold' }}>Last Major Action - {latest_major_action_date}:</div>
              {latest_major_action}
            </div>
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
            `}</style>
          </div>
    );
  }
});

export default BillItem;