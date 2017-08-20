import React from 'react';
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types';
import { Button, Glyphicon } from 'react-bootstrap';

require("style-loader!../res/styles/content.css");
require.context('../res/images/programs', false, /\.(png|jpe?g|svg)$/);

class ProgramList extends React.Component {
  constructor( props ) {
    super( props );
  }

  buildDatObj() {
    let data = [
      { title: "Get Fit with Jillian Michaels", category: "weight loss", path: "images/getfitjillian.png" },
      { title: "Grand Canyon", category: "incline trainer", path: "images/grandcanyon.png" },
      { title: "Power Walk", category: "walking", path: "images/powerwalk.png" },
      { title: "Elliptical Weight Loss", category: "weight loss", path: "images/elliptical.png" },
      { title: "Off Season Weight Loss", category: "cycling", path: "images/offseason.png" },
      { title: "Central Park", category: "fitness", path: "images/centralpark.png" },
      { title: "5k Beginner Training", category: "running", path: "images/fivekbeginner.png" },
      { title: "Going Coastal", category: "running", path: "images/goingcoastal.png" },
      { title: "Elliptical with Jillian Michaels", category: "weight loss", path: "images/ellipticaljillian.png" },
      { title: "Incline Train", category: "incline trainer", path: "images/inclinetraining.png" },
      { title: "Paris", category: "running", path: "images/paris.png" },
      { title: "Lose Weight with Jillian Michaels", category: "weight loss", path: "images/weightlossjillian.png" }
    ];

    return data;
  }

  handleFavorite( refIndex, context ) {
    context.refs[refIndex].classList.toggle("favorite");
  }

  getProgramList( programDataObj, context ) {
    let elements = programDataObj.map( function ( programObj, index ) {
      return (
        <div key={ index } className="flexChild">
          <div ref={ index } className="favoriteGlyph" onClick={ context.handleFavorite.bind( null, index, context ) }><span><Glyphicon glyph="heart" /></span></div>
          <img src={ programObj.path } />
          <div>
            <span className="title">{ programObj.title }</span>
            <span className="category"> { programObj.category }</span>
          </div>
        </div>
      );
    });

    return (
      <div className="flexMaster">
        { elements }
      </div>
    );
  }

  render() {
    const programDataObj = this.buildDatObj();
    const programList = this.getProgramList( programDataObj, this );
    return (
      <div className="content">
        { programList }
        <div className="content morePrograms">
          <Button bsStyle="primary">VIEW MORE</Button>
        </div>
      </div>
    );
  }
}

ProgramList.propTypes = {
  section: PropTypes.string.isRequired
};

export default ProgramList;
