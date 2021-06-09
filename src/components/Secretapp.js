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


function App(){
    
    // function handleClick(){
    //     axios.get("http://localhost:5000/getname").then(res=>{ console.log(res.data) });
    // }

    const isactive = useMediaQuery('(max-width: 200px)')
    const [pastFeatures, setPastFeatures] = useState(false);
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


    function handleACClick(){
        //dropdown switch
    }


    return <>
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
                        <Button disableRipple  onClick={handleACClick} variant="contained"  className = {classes.cardEmoji}>
                            Login
                        </Button>
                    </Box>
                </Toolbar>
            </AppBar>

        </ThemeProvider>
        <Titlescape  />
        <Features ref4scroll={featuresref} />
        <Pricetable />
        <About />
        <Reviews />
        <Creators />
        <Footer />
    </>
}

export default App;

