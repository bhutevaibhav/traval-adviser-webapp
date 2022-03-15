import { useMediaQuery } from '@material-ui/core';
import GoogleMapReact from 'google-map-react';
import React from 'react';
import useStyles from './styles';



const Map = () => {
    const classes = useStyles();
    const  isMobile = useMediaQuery('min-width: 600px');

    const coordinates = { lat: 0, lng: 0 };
  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: '' }}
        defaultCenter={coordinates}
        center={coordinates}
        margin={[50, 50, 50, 50]}
      >

      </GoogleMapReact>
    </div>
  )
}

export default Map