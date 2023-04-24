import React from 'react'
import googleMapReact from 'google-map-react';
import {Paper , Typography, useMediaQuery}  from "@material-ui/core"
import { LocationOnOutlinedIcon } from '@material-ui/icons/LocationOutlined';
import Rating  from "@material-ui/lab"
import useStyles  from "./styles"

 const Map = () => {
     const classes= useStyles();
     const isMobile= useMediaQuery('(min')

    return(

        <h3>Map</h3>

    );

 }

 export default Map;