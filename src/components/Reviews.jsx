import React, { useEffect, useRef, useState } from 'react'
import { useStyles } from './Styles'
import { Box, Grid, Typography } from '@material-ui/core'
import conan from '../media/conan.jpg'
import elon from '../media/elon.jpg'
import billy from '../media/billy.jpg'
import rich from '../media/rich.jpg'
import person1 from '../media/person1.jpg'
import person2 from '../media/person2.jpg'
import person3 from '../media/person3.jpg'
import person4 from '../media/person4.jpg'
import person5 from '../media/person5.jpg'
import person6 from '../media/person6.jpg'
import { makeStyles } from '@material-ui/core';

function Reviews(){
    const classes = useStyles();

    const clientReviews = [
        {
            image: elon,
            name: 'Elon Musk',
            review: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Pellentesque nulla metus molestie sit amet diam eteleifend posuere orci,backgroundimg: fasttruck',
            style: classes.reviewMainContainer1,
        },
        {
            image: rich,
            name: 'Richard Hendrix',
            review: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Pellentesque nulla metus molestie sit amet diam eteleifend posuere orci,backgroundimg: fasttruck',
            style: classes.reviewMainContainer2,
        },
        {
            image: conan,
            name: 'Conan Obrian',
            review: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Pellentesque nulla metus molestie sit amet diam eteleifend posuere orci,backgroundimg: fasttruck',
            style: classes.reviewMainContainer3,
        },
        {
            image: billy,
            name: 'Bill Gates',
            review: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Pellentesque nulla metus molestie sit amet diam eteleifend posuere orci,backgroundimg: fasttruck',
            style: classes.reviewMainContainer4,
        },
        {
            image: person1,
            name: 'Nathan Drake',
            review: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Pellentesque nulla metus molestie sit amet diam eteleifend posuere orci,backgroundimg: fasttruck',
            style: classes.reviewMainContainer5,
        },
        {
            image: person2,
            name: 'Charles keating',
            review: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Pellentesque nulla metus molestie sit amet diam eteleifend posuere orci,backgroundimg: fasttruck',
            style: classes.reviewMainContainer6,
        },
        {
            image: person3,
            name: 'Daniel Negreanu',
            review: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Pellentesque nulla metus molestie sit amet diam eteleifend posuere orci,backgroundimg: fasttruck',
            style: classes.reviewMainContainer7,
        },
        {
            image: person4,
            name: 'Robert Kiyoski',
            review: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Pellentesque nulla metus molestie sit amet diam eteleifend posuere orci,backgroundimg: fasttruck',
            style: classes.reviewMainContainer8,
        }
    ]
    const mainTitleScrollRef = useRef();
    const subtitleScrollRef = useRef();
    const reviewsScrollRef = useRef();
    const [mainTitleInView, setMainTitleInView] = useState(false);
    const [subtitleInView, setSubtitleInView] = useState(false);
    const [reviewsInView, setReveiwsInView] = useState(false);
    
    useEffect(()=>{
        document.addEventListener('scroll', ()=>{
            const mainTitle = mainTitleScrollRef.current;
            const subtitle = subtitleScrollRef.current;

            const mainTitlePosition = mainTitle.getBoundingClientRect().top;
            const subtitlePosition = subtitle.getBoundingClientRect().top;

            const screenPosition = window.innerHeight/1.1;

            if(mainTitlePosition < screenPosition){
                setMainTitleInView(true);
            }

            if(subtitlePosition < screenPosition){
                setSubtitleInView(true);
            }
        })
    })

    function gridItemGenerator(reviewInfo){
        return<Grid item xs={12} sm={6} md={3}>
            <div className={reviewInfo.style}>
                <div className={classes.reviewTextContainer}>
                    <img src={reviewInfo.image} className={classes.reviewSectionReviewImage} alt="author image" />
                    <Typography className={classes.reviewSectionReviewTitle}>
                        {reviewInfo.name}
                    </Typography>
                    <Box className={classes.reviewSectionFullReview}>
                        <p>{reviewInfo.review}</p>
                    </Box>
                </div>
            </div>
        </Grid>
    }

    return <div className={classes.reviewSectionContainer} id='REVIEWS'>
        <div className={classes.reviewSectionTitleHolder}>
            <Typography variant='h2' className={mainTitleInView ? classes.reviewSectionTitleInView : classes.reviewSectionTitle} ref={mainTitleScrollRef}>
                Reviews
            </Typography>
            <p className={ subtitleInView ?  classes.reviewSectionSubtitleInView :classes.reviewSectionSubtitle} ref={subtitleScrollRef}>
                Take a look at what our clients think about our services.
            </p>
        </div>
        <div className={ classes.reviewSectionReviewsContainer}>
            <Grid container spacing={0} >
                {clientReviews.map(gridItemGenerator)}
            </Grid>
        </div>
    </div>
}

export default Reviews;