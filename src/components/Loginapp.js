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



function Loginapp(){
    const [loginModalOpen, setLoginModalOpen] = useState(false);
    const [signupModalOpen, setSignupModalOpen] = useState(false);
    const classes = useStyles();

    useEffect(()=>{      
        setLoginModalOpen(true);
    })

    function goToRegister(){
        axios.get("/register");
    }

    return <>
        <CssBaseline />
        <Modal open={loginModalOpen} className={classes.loginModal}>
            <Zoom in={loginModalOpen}>
                <div className={classes.loginModalContents}>
                    <div className={classes.loginModalTitleContainer}>
                        <Typography variant='h2' className={classes.loginModalTitle}>
                            Login
                        </Typography>
                        <Typography className={classes.loginSubtitle}>
                            login to your account
                        </Typography>
                    </div>
                    <form method="POST" action="/login" >
                        <div className={classes.loginForm}>
                            <div className={classes.loginIpHolder} >
                                <DraftsIcon className={classes.loginIpIcons}/>
                                <input type='email' name="email" className={classes.loginFormTextboxes} placeholder='Email'/>
                            </div>
                            <div className={classes.loginIpHolder}>
                                <LockIcon className={classes.loginIpIcons}/>
                                <input type='password' name="password" className={classes.loginFormTextboxes} placeholder='Password'/>
                            </div>
                        </div>
                        <Button className={classes.loginSubmitButton} style={{marginLeft: 'auto', marginRight:'auto'}} type='submit' >LOGIN</Button>
                    </form>
                    <a onClick={goToRegister} className={classes.redirect2Login}>Dont have an account?</a>
                </div>
            </Zoom>
        </Modal>
    </>
}

export default Loginapp;