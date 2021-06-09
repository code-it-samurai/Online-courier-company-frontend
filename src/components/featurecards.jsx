import React, { useRef, useState } from 'react';
import { Card, Typography, CardContent } from '@material-ui/core';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import { useStyles } from './Styles'
import classNames from 'classnames'



function FeatureCard(props){
    const classes = useStyles()

    return(
        <>
            <Card className={ props.class }>
                <CardContent className={classes.featurecardContent}>
                    {<props.emoji style={{ fontSize: 75, marginTop: 80 }} className={classes.cardEmoji}/>}
                    <Typography className={classes.cardTitle}>
                        {props.title}
                    </Typography>
                    <Typography className={classes.cardDescription}>
                        {props.description}
                    </Typography>
                </CardContent>
            </Card>
        </>
    )
}
export default FeatureCard;