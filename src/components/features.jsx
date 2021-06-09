import { Box, Grid, makeStyles, Typography} from '@material-ui/core';
import React, { useEffect, useRef, useState } from 'react';
import Featurecard from './featurecards';
import { useStyles } from './Styles.js';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import EmojiTransportationIcon from '@material-ui/icons/EmojiTransportation';
import AlarmOnIcon from '@material-ui/icons/AlarmOn';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';





function Features( props ){
    const classes = useStyles();
    const featureCardClassesList = [classes.featureCardWithBg1, classes.featureCardWithBg2, classes.featureCardWithBg3, classes.featureCardWithBg4]
    const titleScrollRef = useRef();
    const cardScrollRef = useRef();
    const [inView, setInView] = useState(false);
    const [cardInView, setCardInView] = useState(false);

    const featureCardsInfo = [
        {
            key : 1,
            emoji : AccountBalanceWalletIcon,
            title : "Delivery Price",
            description : "Our prices depend on the size of your parcel",
            class : classes.featureCardWithBg1
        },
        {
            key : 2,
            emoji : AlarmOnIcon,
            title : "Delivery Time",
            description : "All deliveries are carried within several days",
            class : classes.featureCardWithBg2
        },
        {
            key : 3,
            emoji : EmojiTransportationIcon,
            title : "Nearest Depot",
            description : "We got depots in every state in India",
            class : classes.featureCardWithBg3
        },
        {
            key : 4,
            emoji : LocalShippingIcon,
            title : "Big Deliveries",
            description : "Deliver big and heavy packages across the country",
            class : classes.featureCardWithBg4
        }
    ]
    
    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            var mainTitle = titleScrollRef.current;
            var cardHolder = cardScrollRef.current;
            var mainTitlePosition = mainTitle.getBoundingClientRect().top;
            var cardHolderPosition = cardHolder.getBoundingClientRect().top;
            var screenPosition = window.innerHeight/1.1;
        
            if(mainTitlePosition < screenPosition){
                setInView(true);
            }

            if(cardHolderPosition < screenPosition){
                setCardInView(true);
            }
        })
    })
    
    function gridItemMap(itemInfo){
        return <Featurecard
                    key = {itemInfo.key}
                    emoji = {itemInfo.emoji}
                    title = {itemInfo.title}
                    description = {itemInfo.description}
                    class = {itemInfo.class}
                />
    }
    
    return(
        <>
            <Box className={ classes.featurescontaineroffview } ref={props.ref4scroll}>
                <Typography ref={ titleScrollRef }  variant="h1" className = {inView ? classes.featuresTitleInView :classes.featuresTitle}>
                    WHY US?
                </Typography>
                <div ref={ cardScrollRef } className={cardInView ? classes.cardHolderInView : classes.cardHolder}> 
                    {featureCardsInfo.map(gridItemMap)}
                </div>
            </Box>
        </>
    )
}

export default Features;