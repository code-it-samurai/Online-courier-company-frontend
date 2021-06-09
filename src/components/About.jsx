import React, { useEffect, useRef, useState } from 'react'
import { Box, Typography } from '@material-ui/core'
import { useStyles } from './Styles.js'
import handshake from '../media/handshake.jpg'
import flyover from '../media/flyover.jpg'
import nightStreet from '../media/nightStreet.jpg'
import easyuse from '../media/easyuse.jpg'
import batthern from '../media/batthern.png'


function AboutSite(){
    const classes = useStyles();
    const mainScrollRef = useRef();
    const scrollPhotoRef= useRef();
    const mainTitleScrollRef = useRef();
    const subtitleScrollRef = useRef();
    const contentTextScrollRef = useRef();
    const [mainInView, setMainInView] = useState(false)
    const [imageInView, setImageInView] = useState(false)
    const [mainTitleInView, setMainTitleInView] = useState(false);
    const [subtitleInView, setSubtitleInView] = useState(false);
    const [contentTextInView, setContentTextInView] = useState(false);

    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            const mainContainer = mainScrollRef.current;
            const photoElement = scrollPhotoRef.current;
            const mainTitle = mainTitleScrollRef.current;
            const subtitle = subtitleScrollRef.current;
            const contentText = contentTextScrollRef.current;

            const mainContainerPosition = mainContainer.getBoundingClientRect().top;
            const photoElementPosition = photoElement.getBoundingClientRect().top;
            const mainTitlePosition = mainTitle.getBoundingClientRect().top;
            const subtitlePosition = subtitle.getBoundingClientRect().top;
            const contentTextPosition = contentText.getBoundingClientRect().top;
            const screenPosition = window.innerHeight/1.1;

            if(mainContainerPosition < screenPosition){
                setMainInView(true);
            }

            if(photoElementPosition < screenPosition){
                setImageInView(true);
            }

            if(mainTitlePosition < screenPosition){
                setMainTitleInView(true)
            }

            if(subtitlePosition < screenPosition){
                setSubtitleInView(true)
            }

            if(contentTextPosition < screenPosition){
                setContentTextInView(true)
            }
        });
    });

    return <div className={mainInView ? classes.aboutSectionContainerInView : classes.aboutSectionContainer} ref={mainScrollRef} id="ABOUT">
        <img src={nightStreet} className={classes.aboutSectionBackgroundImage} alt="bgpic" />
        <div className={classes.aboutSectionElements}>
            <div className={classes.aboutSectionTitleHolder}>
                <Typography variant='h2' className={mainTitleInView ? classes.aboutSectionTitleInView : classes.aboutSectionTitle} ref={mainTitleScrollRef}>
                    ABOUT US
                </Typography>
                <p className={subtitleInView ? classes.aboutSectionSubtitleInView : classes.aboutSectionSubtitle} ref={subtitleScrollRef}>
                    See what we are all about.
                </p>
            </div>
            <div className = {classes.aboutSectionContent}>
                <Box className={contentTextInView ? classes.aboutTextHolderInView :classes.aboutTextHolder}>
                    <p ref={contentTextScrollRef}>
                        Lorem ipsum dolor sit amet
                        consectetur adipiscing elit
                        Pellentesque nulla metus
                        molestie sit amet diam et
                        eleifend posuere orci
                        Maecenas vel velit commodo
                        gravida leo nec
                        aliquet mauris
                        Donec pretium at sapien ut ultricies
                        Proin vitae aliquet leo
                        placerat maximus sapien
                        Praesent malesuada nisi massa
                        vitae aliquam nisi hendrerit non
                        Etiam condimentum purus ac mauris vulputate
                        nec porttitor augue dictum
                        Proin id rutrum diam
                        Suspendisse vitae molestie eros
                        Nunc volutpat
                        ipsum quis tincidunt sollicitudin
                        orci erat consequat felis
                        sit amet eleifend felis turpis lacinia turpis
                        Aenean auctor vehicula elit eget dictum
                    </p>
                    <p ref={scrollPhotoRef}>
                        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas
                        Suspendisse potenti
                        Sed nec ligula finibus
                        tincidunt felis nec
                        fermentum est
                        Suspendisse eros odio
                        porta sit amet nibh et
                        pharetra cursus libero
                        Aenean dapibus venenatis nibh nec vehicula
                        Praesent nisl leo
                        molestie sit amet augue nec
                        commodo euismod nibh
                        Cras in pellentesque lacus
                        a tempor tortor
                    </p>
                </Box>
                <Box className={classes.aboutImageHolder} styles={{ backgroundImage:`url(${batthern})`}}>
                        <img src={handshake} className={ imageInView ? classes.aboutSectionImage1Reset : classes.aboutSectionImage1} alt="shaking hands" />
                        <img src={flyover} className={imageInView ? classes.aboutSectionImage2Reset : classes.aboutSectionImage2 } alt="trucks" />
                        <img src={easyuse} className={imageInView ? classes.aboutSectionImage3Reset : classes.aboutSectionImage3 } alt="easy for everyone" />
                </Box>
            </div>
        </div>
    </div>
}

export default AboutSite;