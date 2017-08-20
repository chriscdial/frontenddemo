import React from 'react';

require("style-loader!../res/styles/hero.css");

class Hero extends React.Component {
  constructor( props ) {
    super( props );
    this.state = {
      show: false
    }
  }

  componentDidMount() {
    this.timeoutId = setTimeout( function () {
      this.setState({
        show: true
      });
    }.bind( this ), 2000 );
  }

  componentWillUnmount () {
    if ( this.timeoutId ) {
      clearTimeout( this.timeoutId );
    }
  }

  render() {
    return (
      <div className="hero">
        <img src={ require("../res/images/hero.png") } />
        <img className="heroShadow" src={ require("../res/images/heroshadow.png") } />
        <div className={ "heroMsg" + ( this.state.show ? " slideIn" : "" )}>
          <span className="heroTitle" >WORKING OUT<br /> HAS NEVER BEEN SO FUN</span>
          <br />
          <div className="heroText">
              <span>Welcome to the center of it all. The Fitness Shop</span>
              <span> presents you with hundreds of workout programs</span>
              <span> designed to guide your weight loss journey.</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;
