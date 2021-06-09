import { makeStyles } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles'
import gplay from '../media/gplay.png'
import reviewbg5 from '../media/reviewbg5.jpg'
import reviewbg2 from '../media/reviewbg2.jpg'
import reviewbg6 from '../media/reviewbg6.jpg'
import reviewbg4 from '../media/reviewbg4.jpg'
import reviewbg8 from '../media/reviewbg8.jpg'
import reviewbg9 from '../media/reviewbg9.jpg'
import reviewbg10 from '../media/reviewbg10.jpg'
import reviewbg11 from '../media/reviewbg11.jpg'
import developerbackground from '../media/developerbackground.jpg'
import documentorbackground from '../media/documentorBackground.jpg'
import cardbg1 from '../media/cardbg1.jpg'
import cardbg2 from '../media/cardbg2.jpg'
import cardbg3 from '../media/cardbg3.jpg'
import cardbg4 from '../media/cardbg4.jpg'


export const appbartheme = createMuiTheme({
    palette: {
      primary: {
        // main: "#4b778d",
        main: "#126e82"
      }
    }
});

export const useStyles = makeStyles({
    appbarbutton:{
        background:"transparent",
        borderRadius: 5,
        borderColor:'#aad8d3',
        border: "2px",
        borderStyle: "solid",
        color:'#aad8d3',
        height: 35,
        margin:"10px",
        boxShadow: "none",
        '&:hover':{
            background: '#aad8d3',
            color:'#132c33',
            boxShadow:"none"
        }
    },
    appbar:{
        height:"10%",
    },
    titlescapeHolder:{
        padding:0,
        position:'relative',
        marginBottom:"0",
        height: "46vw",
        overflow:'hidden',
    },
    titleImg:{
        margin:"0",
        marginBottom : "0",
        width:"100vw",
        height:"46vw",
        zIndex:20,
        position:"relative"
    },
    titlescapeTitleDiv:{
        zIndex:30,
        position:"absolute",
        background: 'rgba(0, 0, 0, 0.3)',
        height:"46vw",
        width:"100%",
        top:"0",
        marginBottom:"0"
    },
    titlescapeTitle:{
        color:"white",
        fontSize:"6vw",
        marginLeft: "50px",
        fontFamily:"'Open Sans',sans-serif",
        marginTop: "40px",
        letterSpacing: "0px"

    },
    titlescapeTagline:{
        color:"white",
        marginTop:"20px",
        marginLeft:"50px",
        fontFamily: 'roboto',
        fontSize: '2.05vw',
        letterSpacing: '1.5px'
    },
    titlescapeButtonsSet:{
        marginLeft:"50px",
        marginTop: "40px",
    },
    titlescapeButton:{
        marginRight: "20px",
        background: "transparent",
        borderStyle: 'solid',
        borderWidth:2,
        borderColor: '#132c33',
        // color: "#51c4d3",
        color: '#132c33',
        boxShadow: "none",
        '&:hover':{
            background:"#132c33",
            color: "#51c4d3",
        }
    },
    toolbar:{
        display: "flex",
        justifyContent:"space-between"
    },
    header:{
        fontSize: "3vw",
        color:"white",
        width:'33%',
        fontFamily:"'Open Sans',sans-serif",

        transition:'all 1s'
    },    
    headerButtonClass:{
        width:'33%',
        display:'flex',
        flexDirection:'row',
        justifyContent:'flex-end',
    },
    midHeaderDiv:{
        width:'33%',
        textAlign:'center',
        transition: 'all 1s'
    },
    body:{
        overflowX: "hidden"
    },
    titlescapeBackground:{
        padding:"0",
        margin:"0",
    },
    aboutSectionContainer:{
        position:'relative',
        opacity:0,
        transform: 'translateY(50px)',
        transition: '0.5s all ease-in-out',
    },
    aboutSectionContainerInView:{
        position:'relative',
        opacity:1,
        transform: 'translateY(0px)',
        transition: '0.5s all ease-in-out',
    },
    aboutSectionBackgroundImage:{
        width: '90%',
        height:'auto',
        margin:0,
        zIndex: '1',
    },
    aboutSectionElements:{
        background:'linear-gradient(to right, rgba(0, 0, 0, 0.5) 20%, black 70%)',
        width:"100%",
        height:'99.4%',
        margin: 0,
        top:0,
        bottom: "auto",
        position: 'absolute',
        zIndex:50
    },
    aboutSectionTitleHolder:{
        marginTop: '40px',
        marginBottom: '10px',
        paddingLeft: '20px',
    },
    aboutSectionSubtitle:{
        fontSize:'19px',
        margin:0,
        color:'white',
        opacity:0,
        transform : 'translateY(30px)',
        transition: 'all 0.9',
    },
    aboutSectionSubtitleInView:{
        fontSize:'19px',
        margin:0,
        color:'white',
        opacity:1,
        transform : 'translateY(0px)',
        transition: 'all 0.9',
    },
    aboutSectionTitle:{
        fontSize:"3.8vw",
        fontWeight: "bold",
        fontFamily:"'Open Sans',sans-serif",
        color: "#00adb5",
        opacity:0,
        transform: 'translateY(30px)',
        transition: 'all 0.9s'
    },
    aboutSectionTitleInView:{
        fontSize:"3.8vw",
        fontWeight: "bold",
        fontFamily:"'Open Sans',sans-serif",
        color: "#00adb5",
        opacity:1,
        transform: 'translateY(0px)',
        transition: 'all 0.9s'  
    },
    aboutSectionContent:{
        display:"flex",
    },
    aboutTextHolder:{
        fontSize: "20px",
        width:"50vw",
        color:'white',
        paddingRight: '100px',
        height:"100%",
        paddingLeft: "20px",
        opacity:0,
        transform : 'translateY(30px)',
        transition: 'all 0.9s'
    },
    aboutTextHolderInView:{
        fontSize: "20px",
        width:"50vw",
        color:'white',
        paddingRight: '100px',
        height:"100%",
        paddingLeft: "20px",
        opacity:1,
        transform : 'translateY(0px)',
        transition: 'all 0.9s'
    },
    aboutImageHolder:{
        width:"50vw",
        paddingLeft: '100px',
        // backgroundImage: `url(${gplay})`,
        height: '90vh'
    },
    aboutSectionImage1:{
        height: "210px",
        width: "350px",
        position: 'absolute',
        bottom: 250,
        width: 340,
        marginLeft: '50px',
        opacity: 0,
        transform:'translateX(30px)',
        '&:hover':{
            transform:'scale(1.15, 1.15)',
        },
        transition: 'transform 1.2s',
        transition: '0.5s all ease-in-out',
    },
    aboutSectionImage1Reset:{
        height: "210px",
        width: "350px",
        position: 'absolute',
        bottom: 250,
        width: 340,
        marginLeft: '50px',
        opacity: 1,
        transform:'translateX(0px)',
        '&:hover':{
            transform:'scale(1.15, 1.15)',
        },
        transition: 'transform 1.2s',
        transition: '0.5s all ease-in-out',
    },
    aboutSectionImage2:{
        height:"210px",
        width: "340px",
        position: 'absolute',
        marginLeft: '150px',
        marginTop: '30px',
        opacity:0,
        transform: 'translateX(30px)',
        '&:hover':{
            transform:'scale(1.15, 1.15)',
        },
        transition: 'transform 1.2s',
        transition: '0.5s all ease-in-out',
    },
    aboutSectionImage2Reset:{
        height:"210px",
        width: "340px",
        position: 'absolute',
        marginLeft: '150px',
        marginTop: '30px',
        opacity:1,
        transform: 'translateX(0px)',
        '&:hover':{
            transform:'scale(1.15, 1.15)',
        },
        transition: 'transform 1.2s',
        transition: '0.5s all ease-in-out',
    },
    aboutSectionImage3:{
        height:"210px",
        width: "340px",
        position: 'absolute',
        marginTop:'200px',
        bottom: 45,
        opacity:0,
        transform: 'translateX(30px)',
        left: '70%',
        '&:hover':{
            transform:'scale(1.15, 1.15)',
        },
        transition: 'transform 1.2s',
        transition: '0.5s translate ease-in-out',

    },
    aboutSectionImage3Reset:{
        height:"210px",
        width: "340px",
        position: 'absolute',
        marginTop:'200px',
        bottom: 45,
        opacity:1,
        transform: 'translateY(0px)',
        left: '70%',
        '&:hover':{
            transform:'scale(1.15, 1.15)',
        },
        transition: 'transform 1.2s',
        transition: '0.5s all ease-in-out',
    },
    reviewSectionContainer:{
        height: "auto",
        width: "100%",
        paddingTop:2,
        background: 'white',
        backgroundImage: `url(${gplay})`
    },
    reviewSectionTitle:{
        fontSize:"3.8vw",
        fontWeight: "bold",
        fontFamily:"'Open Sans',sans-serif",
        color: "#00adb5",
        opacity:0,
        transform: 'translateY(30px)',
        transition: 'all 0.9s'
    },
    reviewSectionTitleInView:{
        fontSize:"3.8vw",
        fontWeight: "bold",
        fontFamily:"'Open Sans',sans-serif",
        color: "#00adb5",
        opacity:1,
        transform: 'translateY(0px)',
        transition: 'all 0.9s'
    },
    reviewSectionTitleHolder:{
        marginTop: '40px',
        marginBottom: '10px',
        paddingLeft: '20px',
    },
    reviewSectionSubtitle:{
        fontSize:'19px',
        margin:0,
        opacity:0,
        transform: 'translateY(30px)',
        transition: 'all 0.9'
    },
    reviewSectionSubtitleInView:{
        fontSize:'19px',
        margin:0,
        opacity:1,
        transform: 'translateY(0px)',
        transition: 'all 0.9'
    },
    reviewSectionReviewsContainer:{
        height: "100%",
        width: "100%",
        padding: 20,
        transition: 'all 0.9'
    },
    reviewSectionReviewImage:{
        borderRadius: '50%',
        height:'50px',
    },
    reviewSectionReviewTitle:{
        fontSize: '20px',
        fontWeight: 'bold',
    },
    reviewSectionFullReview:{
        fontSize: '16px',
        marginTop: 10,
        lineHeight: 'normal',
    },
    reviewBackgroundImage:{
        position:'relative',
        width:'100%',
        height:'200px',
        zIndex: '1',
    },
    '@keyframes bottom2Top':{
        from:{
            backgroundPosition: 'bottom',
        },
        to:{
            backgroundPosition: 'top',
        },
    },
    '@keyframes bottomLeft2TopRight':{
        from:{
            backgroundPosition: 'bottom left',
        },
        to:{
            backgroundPosition: 'right top',
        },
    },
    '@keyframes bottomRight2TopLeft':{
        from:{
            backgroundPosition: 'bottom right',
        },
        to:{
            backgroundPosition: 'top left',
        },
    },
    '@keyframes left2Right':{
        from:{
            backgroundPosition: 'left',
        },
        to:{
            backgroundPosition: 'right',
        },
    },
    '@keyframes right2Left':{
        from:{
            backgroundPosition: 'right',
        },
        to:{
            backgroundPosition: 'left',
        },
    },
    '@keyframes top2Bottom':{
        from:{
            backgroundPosition: 'top',
        },
        to:{
            backgroundPosition: 'bottom',
        },
    },
    reviewMainContainer1:{
        background: `url(${reviewbg5})`,
        backgroundSize: '300%',
        animationName: '$bottom2Top',
        animationDuration:'50s',
        animationIterationCount:'infinite',
        animationDirection:'alternate',
        animationTimingFunction: 'linear',
        height:'220px',
        marginRight:'10px',
        marginLeft: '10px',
        borderRadius: '7%',
        marginTop:"10px",
        marginBottom: "10px",
        '&:hover':{
            animationPlayState: 'paused',
        }
    },
    reviewMainContainer2:{
        background: `url(${reviewbg2})`,
        backgroundSize: '300%',
        animationName: '$left2Right',
        animationDuration:'50s',
        animationIterationCount:'infinite',
        animationDirection:'alternate',
        animationTimingFunction:'linear',
        height:'220px',
        marginRight:'10px',
        marginLeft: '10px',
        borderRadius: '7%',
        marginTop:"10px",
        marginBottom: "10px",
        '&:hover':{
            animationPlayState: 'paused',
        }
    },
    reviewMainContainer3:{
        background: `url(${reviewbg4})`,
        backgroundSize: '300%',
        animationName: '$right2Left',
        animationDuration:'50s',
        animationIterationCount:'infinite',
        animationDirection:'alternate',
        animationTimingFunction:'linear',
        height:'220px',
        marginRight:'10px',
        marginLeft: '10px',
        borderRadius: '7%',
        marginTop:"10px",
        marginBottom: "10px",
        '&:hover':{
            animationPlayState: 'paused',
        }
    },
    reviewMainContainer4:{
        background: `url(${reviewbg6})`,
        backgroundSize: '300%',
        animationName: '$top2Bottom',
        animationDuration:'50s',
        animationIterationCount:'infinite',
        animationDirection:'alternate',
        animationTimingFunction:'linear',
        height:'220px',
        marginRight:'10px',
        marginLeft: '10px',
        borderRadius: '7%',
        marginTop:"10px",
        marginBottom: "10px",
        '&:hover':{
            animationPlayState: 'paused',
        }
    },
    reviewMainContainer5:{
        background: `url(${reviewbg8})`,
        backgroundSize: '300%',
        animationName: '$bottomLeft2TopRight',
        animationDuration:'50s',
        animationIterationCount:'infinite',
        animationDirection:'alternate',
        animationTimingFunction:'linear',
        height:'220px',
        marginRight:'10px',
        marginLeft: '10px',
        borderRadius: '7%',
        marginTop:"10px",
        marginBottom: "10px",
        '&:hover':{
            animationPlayState: 'paused',
        }
    },
    reviewMainContainer6:{
        background: `url(${reviewbg9})`,
        backgroundSize: '300%',
        animationName: '$right2Left',
        animationDuration:'50s',
        animationIterationCount:'infinite',
        animationTimingFunction:'linear',
        animationDirection:'alternate',
        height:'220px',
        marginRight:'10px',
        marginLeft: '10px',
        borderRadius: '7%',
        marginTop:"10px",
        marginBottom: "10px",
        '&:hover':{
            animationPlayState: 'paused',
        }
    },
    reviewMainContainer7:{
        background: `url(${reviewbg10})`,
        backgroundSize: '300%',
        animationName: '$bottomRight2TopLeft',
        animationDuration:'50s',
        animationIterationCount:'infinite',
        animationDirection:'alternate',
        animationTimingFunction:'linear',
        height:'220px',
        marginRight:'10px',
        marginLeft: '10px',
        borderRadius: '7%',
        marginTop:"10px",
        marginBottom: "10px",
        '&:hover':{
            animationPlayState: 'paused',
        }
    },
    reviewMainContainer8:{
        background: `url(${reviewbg11})`,
        backgroundSize: '300%',
        animationName: '$left2Right',
        animationDuration:'50s',
        animationIterationCount:'infinite',
        animationDirection:'alternate',
        animationTimingFunction:'linear',
        height:'220px',
        marginRight:'10px',
        marginLeft: '10px',
        marginTop:"10px",
        marginBottom: "10px",
        borderRadius: '7%',
        '&:hover':{
            animationPlayState: 'paused',
        }
    },
    reviewTextContainer:{
        postition:'absolute',
        background: 'rgba(0,0,0,0.6)',
        height:"100%",
        zIndex:50,
        padding:'10px',
        color:'white',
        borderRadius:'7%',
        '&:hover':{
        }
    },
    floatingBackgroundsDiv:{
        display:'flex',
        flexDirection: 'row',
        height:'100%',
        position:'relative',
        zIndex:'-1',
    },
    '@keyframes smoothDownwards':{
        from:{
            backgroundPosition:'top',
        },
        to:{
            backgroundPosition:'bottom',
        }
    },
    floatingDeveloperBackground:{
        background: `url(${developerbackground})`,
        backgroundSize: 'cover',
        animationName: '$top2Bottom',
        animationDuration:'80s',
        animationIterationCount:'infinite',
        animationDirection:'alternate',
        animationTimingFunction:'linear',
        width: '50%',
    },
    floatingDocumentorBackground:{
        background: `url(${documentorbackground})`,
        backgroundSize: '300%',
        animationName: '$left2Right',
        animationDuration:'80s',
        animationIterationCount:'infinite',
        animationDirection:'alternate',
        animationTimingFunction:'linear',
        width: '50%',
    },
    gradientdiv:{
        background: 'rgba(0, 0, 0, 0.6)',
        position:'relative',
        width:'100%',
        height:'100%',
    },
    creatorsContainer:{
        position:'relative',
        height:'635px',
        boxSizing: 'border-box',
    },
    creatorsSectionTitleHolder:{
        marginTop: '40px',
        marginBottom: '10px',
        paddingLeft: '20px',
    },
    creatorsSectionTitle:{
        fontSize:"3.8vw",
        fontWeight: "bold",
        fontFamily:"'Open Sans',sans-serif",
        color: "#00adb5",
    },
    creatorsSectionSubtitle:{
        fontSize:'19px',
        margin:0,
        color:'white',
    },
    creatorsContentContainer:{
        margin: 0,
        display:'block',
        bottom: "auto",
        position: 'absolute',
        height:'100%',
        zIndex:50,
        width:'100%',
        top:0,
    },
    creatorsHolder:{
        display:'flex',
        flexDirection: 'row',
        marginTop: '100px',
        marginBottom: '50px',
    },
    creatorContentHolder:{
        width:'50%',
        display:'flex',
        flexDirection: 'column',
    },
    creatorsSectionImage:{
        height:'200px',
        borderRadius: '50%',  
        marginLeft:'auto',
        marginRight:'auto',
        display:'block',
    },
    creatorSectionTextHolder:{
        padding:'20px'
    },
    creatorSectionCreatorName:{
        fontSize:'25px',
        textAlign:'center',
        color:'white',
    },
    creatorSectionCreatorRole:{
        fontSize:'18px',
        textAlign:'center',
        color: 'white',
    },
    tccfooter:{
        background:'white',
    },
    footerTitle:{
        fontSize:"4vw",
        fontWeight:'bold',
        fontFamily: "'Comfortaa', cursive",
        textAlign:'center',
        color:"#000000",
        marginTop:50
    },
    footerInfo:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-around',
        marginTop:'30px'
    },
    footerSocials:{
        display:'flex',
        flexDirection:'column',
        margin:20
    },
    footerSubtitle:{
        fontSize:'3.1vw',
        textAlign:'center',
        // fontFamily: "'Comfortaa', cursive",
        fontFamily: "'Archivo Narrow', sans-serif",
        color:'#484848',
        marginBottom:'25px',
    },
    footerContacts:{
        display:'flex',
        flexDirection:'column',
        margin:20
    },
    copyright:{
        textAlign: 'center',
        background:'white',
        margin:20,
        color:'#484848',
        fontSize:17,
        fontFamily: "'Comfortaa', cursive",
        '&:hover':{
            fontSize: '19px'
        },
        transition: 'font-size 1.7s',
    },
    footerInfoItem:{
        textAlign:'center',
        marginTop:'5px',
        fontSize:'20px',
        fontFamily: "'Comfortaa', cursive",
        color:'grey',
        cursor: 'pointer',
        '&:hover':{
            color:'#484848',
            fontSize:'30px',
        },
        transition: 'font-size 0.7s'
    },
    TitleHolder:{
        marginTop: '40px',
        marginBottom: '10px',
        paddingLeft: '20px',
    },
    pricetableTitle:{
        fontSize:"3.8vw",
        fontWeight: "bold",
        fontFamily:"'Open Sans',sans-serif",
        color: "#00adb5",
        opacity:0,
        transform: 'translateY(30px)',
        transition: 'all 0.9s'
    },
    pricetableTitleInView:{
        fontSize:"3.8vw",
        fontWeight: "bold",
        fontFamily:"'Open Sans',sans-serif",
        color: "#00adb5",
        opacity:1,
        transform: 'translateY(0px)',
        transition: 'all 0.9s'
    },
    pricetableSubtitle:{
        fontSize:'19px',
        margin:0,
        color:'black',
        opacity:0,
        transform: 'translateY(30px)',
        transition: 'all 0.9s'
    },
    pricetableSubtitleInView:{
        fontSize:'19px',
        margin:0,
        color:'black',
        opacity:1,
        transform: 'translateY(0px)',
        transition: 'all 0.9s'
    },
    pricetableTitleHolder:{
        paddingLeft:20,
    },
    tableContainer:{
        marginTop:'50px',
        marginBottom: '50px',
        marginRight: '100px',
        marginLeft:'100px',
    },
    priceTable:{
        borderRadius:'10px',
    },
    tableHeaders:{
        fontWeight: 'bold',
        fontSize:'18px',
        background:'#a7bbc7'
    },
    greyRow:{
        background:'#e1e5ea',
    },
    showTableButton:{
        height:'40px',
        width:'150px',
        background:'white',
        margin:' 30px auto',
        display:'block',
    },
    featureCardWithBg1:{
        background: `url(${cardbg1})`,
        backgroundSize: 'cover',
        textAlign: "center",
        margin:"30px 20px",
        height:"450px",
        width:"250px",
        borderRadius: "10px",
        '&:hover':{
            transform:'scale(1.1,1.1)'
        },
        transition: 'all 0.9s',
    },
    featureCardWithBg2:{
        background: `url(${cardbg2})`,
        backgroundSize: 'cover',
        textAlign: "center",
        margin:"30px 20px",
        height:"450px",
        width:"250px",
        borderRadius: "10px",
        '&:hover':{
            transform:'scale(1.1,1.1)'
        },
        transition: 'all 0.9s',
    },
    featureCardWithBg3:{
        background: `url(${cardbg3})`,
        backgroundSize: 'cover',
        textAlign: "center",
        margin:"30px 20px",
        height:"450px",
        width:"250px",
        borderRadius: "10px",
        '&:hover':{
            transform:'scale(1.1,1.1)'
        },
        transition: 'all 0.9s',
    },
    featureCardWithBg4:{
        background: `url(${cardbg4})`,
        backgroundSize: 'cover',
        textAlign: "center",
        margin:"30px 20px",
        height:"450px",
        width:"250px",
        borderRadius: "10px",
        '&:hover':{
            transform:'scale(1.1,1.1)'
        },
        transition: 'all 0.9s',
    },
    cardTitle:{
        fontSize: "33px",
        color: "white",
        fontWeight: "bold"
    },
    cardDescription:{
        fontSize:"20px",  
        color:"white",
    },
    cardEmoji:{
        margin:"20px",
        // fontSize: "200px",
        color: "white"
    },
    featuresTitle:{
        fontSize:"3.8vw",
        fontWeight: "bold",
        fontFamily:"'Open Sans',sans-serif",
        color: "#00adb5",
        opacity: 0,
        transform: 'translateY(30px)',
        transition: '0.7s all ease-in-out',
    },
    featuresTitleInView:{
        fontSize:"3.8vw",
        fontWeight: "bold",
        fontFamily:"'Open Sans',sans-serif",
        color: "#00adb5",
        opacity: 1,
        transform: 'translateY(0px)',
        transition: 'transform 0.7s ease-in-out'
    },
    cardHolder:{
        display:'flex',
        flexDirection:'row',
        margin:'auto'
    },
    featurescontaineroffview:{
        marginTop: "0",
        padding:"20px 20px",
        backgroundImage: `url(${gplay})`,
    },
    cardHolder:{
        display:'flex',
        justifyContent: 'center',
        opacity:0,
        transform: 'translateY(30px)',
        transition: 'transform 0.7s ease-in-out'
    },
    cardHolderInView:{
        display:'flex',
        justifyContent: 'center',
        opacity:1,
        transform: 'translateY(0px)',
        transition: 'all 0.9s'
    },
    featurecardContent:{
        background:'rgba(0,0,0,0.7)',
        height:'100%',
        width: '100',
        // padding: "80px 25px",
        paddingTop: 140,
        paddingLeft: 12,
        paddingRight:12,
    },
    links:{
        textDecoration: 'none',
        color: '#484848'
    },
    loginModal:{
        display:'flex',
        alignItems: 'center',
        justifyContent:'center',
    },
    loginModalContents:{
        background:'White',
        textAlign:'center',
        transition:'all 0.9s',
        paddingRight:20,
        paddingLeft:20,
        paddingTop:50,
        paddingBottom:50,
        borderRadius: 30,
        width:'30%',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
    },
    loginModalTitleContainer:{
        marginBottom: 20,
        padding:10,       
    },
    loginModalTitle:{
        fontSize:'3.5rem',
        fontWeight: "bold",
        fontFamily:"'Open Sans',sans-serif",
        color: "#00adb5",       
    },
    loginSubtitle:{
        fontSize:'19px',
        color:'black'
    },
    loginForm:{
        display:'flex',
        flexDirection:'column',
        marginBottom:50,
        justifyContent:'center',
        alignItems: 'center',
    },
    loginIpHolder:{
        marginTop:15,
        display:'flex',
        justifyContent:'flex-start',
        borderRadius:30,
        background:'#d3d3d3',
        padding:12,
    },
    loginIpIcons:{
        marginRight:10
    },
    loginFormTextboxes:{
        border:'none',
        background:'transparent',
        fontSize:17,
        color:'#2e4053',
        '&:focus':{
        color:'#17202a',
        outline:'none',
        },
    },
    loginSubmitButton:{
        background:'white',
        marginTop:'30',
        height:45,
        width:120,
        color:'white',
        background:'#00adb5',
        '&:hover':{
            transform:'scale(1.1,1.1)',
            color:'white',
            background:'#00adb5',
        },
        transition:'transform 0.5s ease-in-out'
    },
    redirect2Login:{
        color:'#757171',
        margin:10,
        cursor:'pointer'
    },
    signupModal:{
        display:'flex',
        alignItems: 'center',
        justifyContent:'center',
    },
    signupModalContents:{
        background:'White',
        textAlign:'center',
        paddingRight:20,
        paddingLeft:20,
        paddingTop:50,
        paddingBottom:50,
        borderRadius: 30,
        width:'30%',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
    },
    signupModalTitleContainer:{
        marginBottom: 20,
        padding:10,       
    },
    signupModalTitle:{
        fontSize:'3.5rem',
        fontWeight: "bold",
        fontFamily:"'Open Sans',sans-serif",
        color: "#00adb5",       
    },
    signupSubtitle:{
        fontSize:'19px',
        color:'black'
    },
    signupForm:{
        display:'flex',
        flexDirection:'column',
        marginBottom:50,
        justifyContent:'center',
        alignItems: 'center',
    },
    signupIpHolder:{
        marginTop:15,
        display:'flex',
        justifyContent:'flex-start',
        borderRadius:30,
        background:'#d3d3d3',
        padding:12,
    },
    signupIpIcons:{
        marginRight:10
    },
    signupFormTextboxes:{
        border:'none',
        background:'transparent',
        fontSize:17,
        color:'#2e4053',
        '&:focus':{
        color:'#17202a',
        outline:'none',
        },
    },
    signupSubmitButton:{
        background:'white',
        marginTop:'30',
        height:45,
        width:120,
        color:'white',
        background:'#00adb5',
        '&:hover':{
            transform:'scale(1.1,1.1)',
            color:'white',
            background:'#00adb5',
        },
        transition:'transform 0.5s ease-in-out'
    },
    redirect2Login:{
        color:'#757171',
        margin:10,
        cursor:'pointer'
    }
})
// 100% 12:55 ONLY CODING with TIMER light blink at 01:54