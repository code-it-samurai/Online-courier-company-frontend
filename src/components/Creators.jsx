import { Grid, Box, Typography } from '@material-ui/core'
import React from 'react'
import { useStyles } from './Styles'
import person1 from '../media/person1.jpg'
import person2 from '../media/person2.jpg'


function Creators(){
    const classes= useStyles();

    return <Box className={classes.creatorsContainer}>
                <Grid container className={classes.floatingBackgroundsDiv}>
                    <Grid item className={classes.floatingDeveloperBackground}>
                        <div className={classes.gradientdiv}>h</div>
                    </Grid>
                    <Grid item className={classes.floatingDocumentorBackground}>
                        <div className={classes.gradientdiv}>h</div>
                    </Grid>
                </Grid>
                <div className={classes.creatorsContentContainer}>
                    <div className={classes.creatorsSectionTitleHolder}>
                        <Typography variant='h2' className={classes.creatorsSectionTitle}>
                            Creators
                        </Typography>
                        <p className={classes.creatorsSectionSubtitle}>Students involved in creations of this project</p>
                    </div>
                    <Grid container className={classes.creatorsHolder}>
                        <Grid item xs={12} md={6} className={classes.creatorContentHolder}>
                            <div className={classes.creatorImgaeHolder}>
                                <img src={person1} className={classes.creatorsSectionImage}/>
                            </div>
                            <div className={classes.creatorSectionTextHolder}>
                                <Typography variant='h6' className={classes.creatorSectionCreatorName}>
                                    Prathamesh Takane
                                </Typography>
                                <p className={classes.creatorSectionCreatorRole}>Development</p>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={6} className={classes.creatorContentHolder}>
                            <div className={classes.creatorImgaeHolder}>
                                <img src={person2} className={classes.creatorsSectionImage}/>
                            </div>
                            <div className={classes.creatorSectionTextHolder}>
                                <Typography variant='h6' className={classes.creatorSectionCreatorName}>
                                    Aditya Pandit
                                </Typography>
                                <p className={classes.creatorSectionCreatorRole}>Documentation</p>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </Box>
}

export default Creators;