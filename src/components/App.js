import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { AppBar, Typography, useMediaQuery, Button, Toolbar, CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import {useStyles, appbartheme } from './Styles';
import Titlescape from './Front.jsx';
import Features from './features';
import About from './About'
import Reviews from './Reviews'
import Creators from './Creators'
import Footer from './footer'
import Pricetable from './pricetable'
import Modal from '@material-ui/core/Modal';
import DraftsIcon from '@material-ui/icons/Drafts';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import LockIcon from '@material-ui/icons/Lock';
import Zoom from '@material-ui/core/Zoom';

function App(){


    // function handleClick(){
    //     axios.get("http://localhost:5000/getname").then(res=>{ console.log(res.data) });
    // }

    const isactive = useMediaQuery('(max-width: 200px)')
    const [signupModalOpen, setSignupModalOpen] = useState(false);
    const [loginModalOpen, setLoginModalOpen] = useState(false);
    const [pastFeatures, setPastFeatures] = useState(false);
    const [loginMail, setLoginMail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [signupUsername, setSignupUsername] = useState('');
    const [signupMail, setSignupMail] = useState('');
    const [signupPassword, setSignupPassword] = useState('');
    const classes = useStyles();
    const featuresref = useRef();

    useEffect(()=>{      
        
        window.addEventListener('scroll', ()=>{
                      
            const featuresElement = featuresref.current;
            const featuresPosition = featuresElement.getBoundingClientRect().top;
            const screenPosition = window.innerHeight;

            if(featuresPosition < screenPosition){
                setPastFeatures(true);
            }

            if(featuresPosition > screenPosition){
                setPastFeatures(false);
            }
        })
    })

    const handleLoginClick = ()=>{
        setLoginModalOpen(!loginModalOpen);
    }
    
    const handleSignupClick = ()=>{
        setSignupModalOpen(!signupModalOpen);
    }

    const loginUser =() =>{
        let userLoginData = JSON.stringify({
            email : loginMail,
            password : loginPassword,
        })
        axios.post('/login', userLoginData).then(res=>{ console.log(res.data)})
    }

    const registerUser = ()=>{
        let userSignupData = JSON.stringify({
            fullname : signupUsername,
            email : signupMail,
            password : signupPassword,
        })
        axios.post('/register', userSignupData)
    }

    return <div>
            <CssBaseline />
            <ThemeProvider theme={appbartheme}>
                <AppBar position="sticky" className={classes.appbar}>
                    <Toolbar className={classes.toolbar}>
                        { pastFeatures ? <Typography variant="h1" className={classes.header}>
                            TCC
                        </Typography> :
                        <Typography variant="h1" className={classes.header}>
                            TheCourierCompany
                        </Typography>
                        }
                        <div className={classes.midHeaderDiv}>

                        </div>
                        <Box className={classes.headerButtonClass}>
                            <Button disableRipple  onClick={handleLoginClick} variant="contained" size='large' className = {classes.appbarbutton}>
                                Login
                            </Button>
                            <Button disableRipple onClick={handleSignupClick} variant="contained" size= 'large' className = {classes.appbarbutton}>
                                Sign up
                            </Button>
                        </Box>
                    </Toolbar>
                </AppBar>
            <Modal open={loginModalOpen} onClose={handleLoginClick} className={classes.loginModal}>
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
                        <form method="POST" action="/register" >
                            <div className={classes.loginForm}>
                                <div className={classes.loginIpHolder} >
                                    <DraftsIcon className={classes.loginIpIcons}/>
                                    <input type='email' onChange={(event)=>{setLoginMail(event.target.value)}} className={classes.loginFormTextboxes} placeholder='Email'/>
                                </div>
                                <div className={classes.loginIpHolder}>
                                    <LockIcon className={classes.loginIpIcons}/>
                                    <input type='password' onChange={(event)=>{setLoginPassword(event.target.value)}} className={classes.loginFormTextboxes} placeholder='Password'/>
                                </div>
                            </div>
                            <Button className={classes.loginSubmitButton} style={{marginLeft: 'auto', marginRight:'auto'}} onClick={loginUser}>LOGIN</Button>
                        </form>
                        <a onClick={()=>{ handleLoginClick(); handleSignupClick();}} className={classes.redirect2Login}>Dont have an account?</a>
                    </div>
                </Zoom>
            </Modal>
            <Modal open={signupModalOpen} onClose={handleSignupClick} className={classes.signupModal}>
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
                        <form action="/" method="POST">
                            <div className={classes.signupForm}>
                                <div className={classes.signupIpHolder}>
                                    <AccountBoxIcon className={classes.signupIpIcons} />
                                    <input type='text' className={classes.signupFormTextboxes} onChange={(event)=>{setSignupUsername(event.target.value)}} name="fullname" placeholder='Full Name'/>
                                </div>
                                <div className={classes.signupIpHolder} >
                                    <DraftsIcon className={classes.signupIpIcons}/>
                                    <input type='email' className={classes.signupFormTextboxes} onChange={(event)=>{setSignupMail(event.target.value)}} name="email" placeholder='Email'/>
                                </div>
                                <div className={classes.signupIpHolder}>
                                    <LockIcon className={classes.signupIpIcons}/>
                                    <input type='password' className={classes.signupFormTextboxes} onChange={(event)=>{setSignupPassword(event.target.value)}} name="password" placeholder='Password'/>
                                </div>
                            </div>
                            <Button type="submit" className={classes.signupSubmitButton} style={{marginLeft: 'auto', marginRight:'auto'}} onClick={registerUser}>SIGN UP</Button>
                        </form>
                        <a onClick={()=>{ handleLoginClick(); handleSignupClick();}} className={classes.redirect2Login}>Already have an account?</a>
                    </div>
                </Zoom>
            </Modal>
            </ThemeProvider>
            <Titlescape  />
            <Features ref4scroll={featuresref} />
            <Pricetable />
            <About />
            <Reviews />
            <Creators />
            <Footer />
    </div>
}

export default App;

