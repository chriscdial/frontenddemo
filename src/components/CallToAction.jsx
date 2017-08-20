import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

require("style-loader!../res/styles/content.css");

class CallToAction extends React.Component {
  constructor( props ) {
    super( props );
  }

  render() {
    return (
      <div className="content callPhrase">
        <span>Get started on your weight loss journey.</span>
        <Button bsStyle="primary" className="inlineSpacer">JOIN IFIT TODAY</Button>
      </div>
    );
  }
}

CallToAction.propTypes = {
  section: PropTypes.string.isRequired
};

export default CallToAction;
