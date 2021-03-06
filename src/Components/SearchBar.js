/**
 * Created by nickdelfino on 9/21/17.
 */
import React from 'react';
import createReactClass from 'create-react-class';

const SearchBar = createReactClass({
  render(){
    const { onChange, onKeyPress, value } = this.props;

    return(
        <div className="container-4">
          <input type="search" id="search" placeholder="Search..." value={value} onChange={onChange} onKeyPress={onKeyPress}/>
          <style jsx>{`
           .container-4{
              overflow: hidden;
              vertical-align: middle;
              white-space: nowrap;
              display: flex;
              align-self: center;
              justify-content: center;
              -moz-box-shadow:    2px 2px 2px 2px #ccc;
              -webkit-box-shadow: 2px 2px 2px 2px #ccc;
              box-shadow:         2px 2px 2px 2px #ccc;
          }

          .container-4 input#search{
              height: 50px;
              width: 100%;
              background: #ffffff;
              border: none;
              font-size: 10pt;
              padding-left: 15px;
              outline: none;
          }

          .container-4 input#search:hover:focus{
              outline: none;
          }

          .container-4 input#search::-webkit-input-placeholder {
              color: #65737e;
          }

          .container-4 input#search:-moz-placeholder { /* Firefox 18- */
              color: #65737e;
          }

          .container-4 input#search::-moz-placeholder {  /* Firefox 19+ */
              color: #65737e;
          }

          .container-4 input#search:-ms-input-placeholder {
              color: #65737e;
          }

          @media screen and (min-width: 700px) {
              /* For desktop phones: */
              .container-4{
                  width: 600px;
                  margin-top: 10px;
              }
          }

          @media screen and (max-width: 700px) {
              /* For mobile phones: */
              .container-4{
                  width: 92%;
                  margin-top: 10px;
              }
          }
          `}</style>
        </div>
    );
  }
});

export default SearchBar;
