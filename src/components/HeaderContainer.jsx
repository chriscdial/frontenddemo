import React from 'react';
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types';

import Header from './Header.jsx'
import SectionHeader from './SectionHeader.jsx'

class HeaderContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sticky: false
    };
  }

  componentDidMount() {
    const compBounding = ReactDOM.findDOMNode( this ).getBoundingClientRect();
    window.addEventListener( 'scroll', this.handleScroll.bind( null, compBounding, this ));
  }

  componentWillUnmount() {
    window.removeEventListener( 'scroll', this.handleScroll.bind( null, compBounding, this ));
  }

  handleScroll( compBounding, context, event ) {
    const topOffset = compBounding.top;
    const top = document.documentElement.scrollTop || document.body.scrollTop;

    if ( top !== 0 && ( top > topOffset )) {
      context.setState({
        sticky: true
      });
    } else if ( context.state.sticky && ( top === 0 )) {
      context.setState({
        sticky: false
      });
    }
  }

  render() {
    return (
      <div className="headerContainer">
        <Header sticky={ this.state.sticky } />
        <SectionHeader sticky={ this.state.sticky } section={ this.props.section } />
      </div>
    );
  }
}

HeaderContainer.propTypes = {
  section: PropTypes.string.isRequired
};

export default HeaderContainer;
