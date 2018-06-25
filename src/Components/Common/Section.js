/**
 * Created by nickdelfino on 9/17/17.
 */
import React from 'react';
import createReactClass from 'create-react-class';

const Section = createReactClass({
  getInitialState(){
    const { expanded, first, paddingBottom } = this.props;
    
    if(!paddingBottom){
      return{
        expanded,
        first,
        paddingBottom: '0'
      }
    }else{
      return{
        expanded,
        first,
        paddingBottom
      }
    }
  },

  showDropdownArrow(){
    if(this.state.expanded){
      return(
          <i className="fa fa-angle-down" aria-hidden="true">
            <style>{`
            i {
              float: right;
            }
          `}</style>
          </i>
      );
    }else{
      return(
          <i className="fa fa-angle-up" aria-hidden="true">
            <style>{`
            i {
              float: right;
            }
          `}</style>
          </i>
      );
    }
  },

  onHeaderClick(){
    this.setState({ expanded: !this.state.expanded })
  },

  renderHeader(){
    const { title, first, paddingBottom } = this.props;

    if(first) {
      return(
      <h2 className="section-header-first"
          onClick={this.onHeaderClick}
          style={{
            paddingTop: 5,
            paddingBottom,
            margin: 0,
            cursor: 'pointer',
          }}
      >
        {title}
        {this.showDropdownArrow()}
      </h2>
      );
    }

    return(
      <h2 className="section-header"
          onClick={this.onHeaderClick}
          style={{
            borderTop: 'solid thin #c1c1c1',
            paddingTop: 5,
            paddingBottom,
            margin: 0,
            cursor: 'pointer',
          }}
      >
        {title}
        {this.showDropdownArrow()}
      </h2>
    )
  },

  renderContent(){
    if(this.state.expanded){
      return(
          <div className="section">
            {this.props.content}
            <style jsx>{`
              .section{
                  opacity: 1.0;
                  box-sizing: border-box;
                  transition: height 500ms 0ms, opacity 500ms 500ms;
                  padding-bottom: 5px;
              }
            `}</style>
          </div>
      );
    }
  },

  render(){
    return(
      <div>
        {this.renderHeader()}
        {this.renderContent()}
      </div>
    );
  }
});

export default Section;
