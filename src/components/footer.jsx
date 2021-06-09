import { Typography } from '@material-ui/core'
import React from 'react'
import { useStyles } from './Styles'

function Footer(){
    const classes = useStyles();

    return <div className={classes.tccfooter}>
            <div>
                <Typography variant='h5' className={classes.footerTitle}>
                    HIRE US.
                </Typography>
            </div>
            <div>
            <div className={classes.toTheTop}>

            </div>
            <div className={classes.footerInfo}>
                <div className={classes.footerSocials}>
                    <Typography variant='h4' className={classes.footerSubtitle}>
                        Socials
                    </Typography>
                    <p className={classes.footerInfoItem}>Instagram</p>
                    <p className={classes.footerInfoItem}>Facebook</p>
                    <p className={classes.footerInfoItem}>Twitter</p>
                </div>
                <div className={classes.footerContacts}>
                    <Typography variant='h4' className={classes.footerSubtitle}>
                        Contacts
                    </Typography>
                    <p className={classes.footerInfoItem}>thecouriercompany404@gmail.com</p>
                    <p className={classes.footerInfoItem}>8884048888</p>
                </div>
                <div className={classes.footerSocials}>
                    <Typography variant='h4' className={classes.footerSubtitle}>
                        Explore
                    </Typography>
                    <p className={classes.footerInfoItem}><a href='#REVIEWS' className={classes.links}>Reviews</a></p>
                    <p className={classes.footerInfoItem}><a href='#ABOUT' className={classes.links}>About</a></p>
                    <p className={classes.footerInfoItem}><a href='#PRICES' className={classes.links}>Prices</a></p>
                    <p className={classes.footerInfoItem}><a href='#HOME' className={classes.links}>Home</a></p>
                </div>
            </div>
            </div>
            
            <div className={classes.copyright}>© TheCourierCompany </div>
        </div>
}

export default Footer;