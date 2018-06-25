/**
 * Created by nickdelfino on 9/22/17.
 */
import React from 'react';
import createReactClass from 'create-react-class';
import Section from '../Common/Section';

const AboutScreen = createReactClass({
  render(){
    return(
      <div className="bill-detail">
        <div className="bill-detail-item">
          <Section title="About" content={ 'I believe in creating a clean streamlined interface for people to quickly learn about import legislation. This website is a work in progress to eventually achieve that goal.'} expanded first paddingBottom={5}/>
          <Section title="Contribute" content={ 'Currently, this is not an open source project but I am always looking for collaborators. If you or someone you know would like to help then please contact me at delfinonick@gmail.com.'} paddingBottom={5}/>
          <Section title="Tech" content={'This is built using reactjs and the congressional data made available by the ProPublica Congress API.'} />
        </div>
        <style jsx>{`
          .about-screen-title{
              font-weight: bold;
              font-size: 24px;
          }
          .bill-detail{
              display:flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              margin-bottom: 10px;
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

export default AboutScreen;