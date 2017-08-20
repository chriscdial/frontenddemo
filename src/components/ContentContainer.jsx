import React from 'react';
import PropTypes from 'prop-types';

require("style-loader!../res/styles/content.css");

import ProgramList from './ProgramList.jsx'
import Testimonials from './Testimonials.jsx'
import CallToAction from './CallToAction.jsx'

class ContentContainer extends React.Component {
  constructor( props ) {
    super( props );
  }

  render() {
    return (
      <div>
        <div className="content">
          <h2>{ this.props.section }</h2>
          <div className="summary">
              <span>Welcome to the center of it all. The Fitness Shop</span>
              <span> presents you with hundreds of workout programs</span>
              <span> designed to guide your weight loss journey.</span>
          </div>
        </div>
        <ProgramList section={ this.props.section } />
        <Testimonials section={ this.props.section } />
        <CallToAction section={ this.props.section } />
      </div>
    );
  }
}

ContentContainer.propTypes = {
  section: PropTypes.string.isRequired
};

export default ContentContainer;
