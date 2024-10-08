import React from 'react';
import { AdvancedMarker } from '@vis.gl/react-google-maps';
import { ReactComponent as HomeMarker } from '../../assets/images/home_marker.svg';
import { PLACE_TYPES } from '../../Constants';
import './Marker.scss';

const Marker = ({ id, style, position, active, onToggle, type }) => {
  const Icon = type === 'Home' ? HomeMarker : PLACE_TYPES[type].markerIcon;

  return (
    <AdvancedMarker
      key={id}
      position={position}
      className={`marker ${active ? 'active' : ''}`}
      zIndex={active ? 2 : 1}
      onClick={onToggle}
    >
      <Icon style={style} />
    </AdvancedMarker>
  );
};

export default Marker;
