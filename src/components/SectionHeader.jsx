import React from 'react';
import PropTypes from 'prop-types';
import { Glyphicon } from 'react-bootstrap';

require("style-loader!../res/styles/header.css");

class SectionHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subsection: 3
    }
  }

  setSubsection( subectionIndex, context ) {
    context.setState({
      subsection: subectionIndex
    });
  }

  render() {
    return (
      <div className={ "sectionHeader" + ( this.props.sticky ? " sticky" : "" )}>
        <div className="left">
          <span className="sectionTitle">{ this.props.section }</span>
        </div>
        <div className="headerElements">
          <div>
            <span className={ this.state.subsection === 1 ? "active" : "" } onClick={ this.setSubsection.bind( null, 1, this ) }>
              OVERVIEW
            </span>
          </div>
          <div>
            <span className={ this.state.subsection === 2 ? "active" : "" } onClick={ this.setSubsection.bind( null, 2, this ) }>
              FEATURES
            </span>
          </div>
          <div>
            <span className={ this.state.subsection === 3 ? "active" : "" } onClick={ this.setSubsection.bind( null, 3, this ) }>
              PROGRAMS
            </span>
          </div>
          <div>
            <span className={ this.state.subsection === 4 ? "active" : "" } onClick={ this.setSubsection.bind( null, 4, this ) }>
              TRAINING
            </span>
          </div>
          <div className="menuGlyph">
            <span><Glyphicon glyph="search" /></span>
          </div>
        </div>
      </div>
    );
  }
}

SectionHeader.propTypes = {
  sticky: PropTypes.bool.isRequired
};

export default SectionHeader;
