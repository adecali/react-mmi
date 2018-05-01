/*
 * Base Google Map example
 */
import {PropTypes, Component} from 'prop-types';

import GoogleMap from 'google-map-react';
import BellaMachina from './BelleMachine.jsx';

export default class MaCarte extends Component {
  static prop = {
    center: PropTypes.array,
    zoom: PropTypes.number,
    BellaMachinaCoords: PropTypes.any
  };

  static defaultProps = {
    center: [59.938043, 30.337157],
    zoom: 9,
    BellaMachinaCoords: {lat: 59.724465, lng: 30.080121}
  };


  
}