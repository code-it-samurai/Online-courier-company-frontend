import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { AppBar, Typography, useMediaQuery, Button, Toolbar, CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import {useStyles, appbartheme } from './Styles';
import Modal from '@material-ui/core/Modal';
import DraftsIcon from '@material-ui/icons/Drafts';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import LockIcon from '@material-ui/icons/Lock';
import Zoom from '@material-ui/core/Zoom';




function Registerapp(){
    const [signupModalOpen, setSignupModalOpen] = useState(false);
    const classes = useStyles();

    useEffect(()=>{      
        setSignupModalOpen(true);
    })

    function goToLogin(){
        axios.get("/login");
    }

    return <>
        <CssBaseline />
        <Modal open={signupModalOpen} className={classes.signupModal}>
            <Zoom in={signupModalOpen}>
                <div className={classes.signupModalContents}>
                    <div className={classes.signupModalTitleContainer}>
                        <Typography variant='h2' className={classes.signupModalTitle}>
                            Sign Up
                        </Typography>
                        <Typography className={classes.signupSubtitle}>
                            Happy to have you on board.
                        </Typography>
                    </div>
                    <form method="POST" action="/register" >
                        <div className={classes.signupForm}>
                            <div className={classes.signupIpHolder}>
                                <AccountBoxIcon className={classes.signupIpIcons} />
                                <input type='text' className={classes.signupFormTextboxes} name="fullname" placeholder='Full Name'/>
                            </div>
                            <div className={classes.signupIpHolder} >
                                <DraftsIcon className={classes.signupIpIcons}/>
                                <input type='email' className={classes.signupFormTextboxes}  name="email" placeholder='Email'/>
                            </div>
                            <div className={classes.signupIpHolder}>
                                <LockIcon className={classes.signupIpIcons}/>
                                <input type='password' className={classes.signupFormTextboxes} name="password" placeholder='Password'/>
                            </div>
                        </div>
                        <Button type="submit" className={classes.signupSubmitButton} style={{marginLeft: 'auto', marginRight:'auto'}}>SIGN UP</Button>
                    </form>
                    <a onClick={goToLogin} className={classes.redirect2Login}>Already have an account?</a>
                </div>
            </Zoom>
        </Modal>
    </>
}

export default Registerapp;