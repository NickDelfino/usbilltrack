/**
 * Created by nickdelfino on 9/17/17.
 */
import React from 'react';
import createReactClass from 'create-react-class';

var ActionItem = createReactClass({
  render(){
    if(this.props.action){
      const { chamber, action_type, datetime, description } = this.props.action;
      const { first } = this.props;

      return(
        <div>
          <div className={"action-item-header" + (first ? "" : " action-item-header-padding")}>
            {chamber} - {action_type} - {datetime}
          </div>
          <div className="action-item-description">
            {description}
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
          <div>
            No actions at this time.
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
    }
  }
});

export default ActionItem;
