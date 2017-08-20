import React from 'react';
import PropTypes from 'prop-types';
import { Button, Glyphicon, PanelGroup, Panel } from 'react-bootstrap';

require("style-loader!../res/styles/header.css");

class Header extends React.Component {
  constructor( props ) {
    super( props );
    this.state = {
      menuHidden: true,
      activeItem: 1
    }
  }

  showMenu() {
    this.setState({
      menuHidden: !this.state.menuHidden
    });
  }

  setMenuItem( menuIndex, context ) {
    context.setState({
      activeItem: menuIndex
    });
  }

  render() {
    return (
      <div className="root">
        <div className={ "header appGreyBg" + ( this.props.sticky ? " sticky" : "" )}>
          <div className="left">
            <img src={ require( "../res/images/ifit.png" ) } />
          </div>
          <div className="headerElements">
            <div>
              <span>LOGIN</span>
            </div>
            <div>
              <span>SIGN UP</span>
            </div>
            <div>
              <span>MENU</span>
            </div>
            <div className="menuGlyph" onClick={ this.showMenu.bind( this )}>
              <span><Glyphicon glyph="menu-hamburger" /></span>
            </div>
          </div>
        </div>
        <div className={ "pageMenu" + ( this.state.menuHidden ? " hide" : " show" )}>
          <PanelGroup defaultActiveKey="1" accordion bsClass="menuSection">
            <Panel header="TRAINING" eventKey="1" bsClass="menuSubsection">
              <Panel header="Weight Loss" eventKey="11" bsClass={ "menuLink" + ( this.state.activeItem === 1 ? " activeLink" : "" )} onClick={ this.setMenuItem.bind( null, 1, this )}></Panel>
              <Panel header="Running" eventKey="11" bsClass={ "menuLink" + ( this.state.activeItem === 2 ? " activeLink" : "" )} onClick={ this.setMenuItem.bind( null, 2, this )}></Panel>
              <Panel header="Cycling" eventKey="11" bsClass={ "menuLink" + ( this.state.activeItem === 3 ? " activeLink" : "" )} onClick={ this.setMenuItem.bind( null, 3, this )}></Panel>
              <Panel header="Fitness" eventKey="11" bsClass={ "menuLink" + ( this.state.activeItem === 4 ? " activeLink" : "" )} onClick={ this.setMenuItem.bind( null, 4, this )}></Panel>
              <Panel header="Walking" eventKey="11" bsClass={ "menuLink" + ( this.state.activeItem === 5 ? " activeLink" : "" )} onClick={ this.setMenuItem.bind( null, 5, this )}></Panel>
            </Panel>
            <Panel header="SHOP" eventKey="2" bsClass="menuSubsection"></Panel>
            <Panel header="TIPS+VIDEOS" eventKey="3" bsClass="menuSubsection"></Panel>
            <Panel header="CART" eventKey="4" bsClass="menuSubsection"></Panel>
          </PanelGroup>
          <div className="">
            <Button bsStyle="primary" className="menuButton">JOIN IFIT TODAY</Button>
          </div>
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  sticky: PropTypes.bool.isRequired
};

export default Header;
