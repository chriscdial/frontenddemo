import React from 'react';
import ReactDOM, { render } from 'react-dom'
import Bootstrap from 'bootstrap/dist/css/bootstrap.css'

require("style-loader!./res/styles/main.css")

import HeaderContainer from './components/HeaderContainer.jsx'
import Hero from './components/Hero.jsx'
import ContentContainer from './components/ContentContainer.jsx'
import Footer from './components/Footer.jsx'

class App extends React.Component {
  constructor( props ) {
    super( props );
    this.state = {
      section: "Weight Loss"
    }
  }

  componentDidMount() {
  }

  componentWillUnmount () {
  }

  setSection( newSection ) {
    this.setState({
      section: newSection
    });
  }

  render() {
    return (
      <div className="wrapper">
        <HeaderContainer section={ this.state.section } />
        <Hero />
        <ContentContainer section={ this.state.section } />
        <Footer />
      </div>
    );
  }
}

export default App;
