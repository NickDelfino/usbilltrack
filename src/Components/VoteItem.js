/**
 * Created by nickdelfino on 9/17/17.
 */
import React from 'react';
import createReactClass from 'create-react-class';

var VoteItem = createReactClass({
  render(){
    if(this.props.vote){
      const {
        chamber,
        question,
        result,
        total_yes,
        total_no,
        total_not_voting,
        roll_call,
        date,
        time
      } = this.props.vote;

      const { first } = this.props;

      return(
          <div>
            <div className={"action-item-header" + (first ? "" : " action-item-header-padding")}>
              {chamber} - {question} - {date} {time}
            </div>
            <div className="action-item-description">
              Yes: {total_yes} - No: {total_no} - Abstained: {total_not_voting}
            </div>
            <div className="action-item-description">
              Yes: {result}
            </div>
            <style jsx>{`
          .action-item-header-padding{
              padding-top: 10px;
          }

          .action-item-header{
              font-weight: bold;
          }
          `}</style>
          </div>
      );
    }else{
      return(
          <div className="action-item-header-padding">
            No votes at this time.
            <style jsx>{`
          .action-item-header{
              font-weight: bold;
          }
          `}</style>
          </div>
      );
    }
  }
});

export default VoteItem;
