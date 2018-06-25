/**
 * Created by nickdelfino on 9/17/17.
 */
import React from 'react';
import createReactClass from 'create-react-class';

const Spinner = createReactClass({
  render() {
    return(
      <div className="center-spinner">
        <i className="fa fa-spinner fa-spin fa-3x fa-fw"/>
        <style jsx>{`
         .center-spinner{
            display: flex;
            justify-content: center;
            padding: 5px;
        }
        `}</style>
      </div>
    );
  }
});

export default Spinner;