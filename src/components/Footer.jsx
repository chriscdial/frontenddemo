import React from 'react';
import PropTypes from 'prop-types';
import { ButtonToolbar, DropdownButton, MenuItem } from 'react-bootstrap';

require("style-loader!../res/styles/footer.css");

class Footer extends React.Component {
  constructor( props ) {
    super( props );
  }

  render() {
    return (
      <div className="content footer">
        <div className="footerElements left">
          <span>BLOG+VIDEOS</span>
          <span>   /   </span>
          <span>SHOP</span>
          <span>   /   </span>
          <span>COMPANY</span>
          <span>   /   </span>
          <span>PRESS</span>
          <span>   /   </span>
          <span>JOBS</span>
          <span>   /   </span>
          <span>SUPPORT</span>
          <span>   /   </span>
          <span>LEGAL</span>
          <span>   /   </span>
          <span>CONTACT</span>
        </div>
        <div className="footerElements left">
          <img src={ require("../res/images/facebook.png") } />
          <img src={ require("../res/images/twitter.png") } />
          <img src={ require("../res/images/google+.png") } />
          <img src={ require("../res/images/pintrest.png") } />
          <img src={ require("../res/images/instagram.png") } />
          <img src={ require("../res/images/youtube.png") } />
        </div>
        <div className="footerElements right langSelect">
          <span>LANGUAGE: </span>
            <DropdownButton bsSize="xsmall" title="ENGLISH" id="dropdown-size-extra-small">
              <MenuItem eventKey="1" active>ENGLISH</MenuItem>
              <MenuItem eventKey="2">FRENCH</MenuItem>
              <MenuItem eventKey="3">SPANISH</MenuItem>
              <MenuItem eventKey="4">GERMAN</MenuItem>
            </DropdownButton>
        </div>
        <div className="copyright right">
          <span>Copyright© iFit.com, All rights reserved.</span>
        </div>
      </div>
    );
  }
}

Footer.propTypes = {
};

export default Footer;
