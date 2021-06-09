import React from 'react';
import { useStyles } from './Styles';
import { Button, Typography, Container, requirePropFactory } from '@material-ui/core';
import skytruck from '../media/skytruck.jpg';
import Box from '@material-ui/core/Box';
import PhoneIcon from '@material-ui/icons/Phone';
import AllInboxIcon from '@material-ui/icons/AllInbox';

function FrontTitlescape(){
    const classes = useStyles();

    return(
        <div className={classes.titlescapeHolder} id="HOME">
            {/* <Box className={classes.titlescapeBackground}> */}
                <img src={skytruck} className={classes.titleImg} alt="website logo" />
            {/* </Box> */}
            <Box className={classes.titlescapeTitleDiv}>
                <Typography variant="h4" className={classes.titlescapeTitle} >
                    The Courier Company
                </Typography>
                <Typography variant="h6" className={classes.titlescapeTagline}>
                    Safety, Reliability, Speed.
                </Typography>
                <Box className={classes.titlescapeButtonsSet}>
                    <Button variant="contained" size='large' className = {classes.titlescapeButton}>
                        Enquiry &nbsp;&nbsp;<PhoneIcon />
                    </Button>
                    <Button variant="contained" size='large' className = {classes.titlescapeButton}>
                        Ship Now &nbsp;&nbsp;<AllInboxIcon />
                    </Button>
                </Box>
            </Box>
        </div>
    )}
export default FrontTitlescape;