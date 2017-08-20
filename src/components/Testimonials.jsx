import React from 'react';
import PropTypes from 'prop-types';

require("style-loader!../res/styles/content.css");

class Testimonials extends React.Component {
  constructor( props ) {
    super( props );
  }

  render() {
    return (
      <div className="content testimonial">
        <div className="inlineContent">
          <div className="left quotes">
            <img src={ require("../res/images/bigquote.png") } />
            <img src={ require("../res/images/bigquote.png") } />
          </div>
          <div className="left testimonialText">
            <span>To date I have lost 14 Kilos (30 pounds) and my fitness level is at least the same as when I was actively</span>
            <br />
            <span>engaged in sport (if not better), thanks to iFit and the range and variation of fitness programs available.</span>
          </div>
          <div className="testimonialSpeaker right">
            <span>—Graham Lambourne</span>
          </div>
        </div>
      </div>
    );
  }
}

Testimonials.propTypes = {
  section: PropTypes.string.isRequired
};

export default Testimonials;
