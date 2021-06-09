import { Button, Typography, Box, Table, TableCell, TableBody, TableHead, TableContainer, Paper, TableRow, Collapse } from '@material-ui/core'
import React, { useEffect, useRef, useState } from 'react'
import { useStyles } from './Styles'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import ExpandLessIcon from '@material-ui/icons/ExpandLess';


function Pricetable(){

    const classes = useStyles();
    const titleScrollRef = useRef();
    const subtitleScrollRef = useRef();
    const [clicked, setClick] = useState(false)
    const [titleInView, setTitleInView] = useState(false)
    const [subtitleInView, setSubtitleInView] = useState(false)
    const rows = [
        {weight:'0 to 2', costLocal: '10 Rs.', cost200: '25 Rs.', cost1000: '25 Rs.', cost2000: '30 Rs.', costmt2000: '40 Rs.', style:classes.greyRow},
        {weight:'2 to 10', costLocal: '15 Rs.', cost200: '35 Rs.', cost1000: '40 Rs.', cost2000: '60 Rs.', costmt2000: '80 Rs.',},
        {weight:'10 to 20', costLocal: '25 Rs.', cost200: '45 Rs.', cost1000: '60 Rs.', cost2000: '80 Rs.', costmt2000: '100 Rs.', style:classes.greyRow},
        {weight:'20 to 35', costLocal: '60 Rs.', cost200: '80 Rs.', cost1000: '100 Rs.', cost2000: '120 Rs.', costmt2000: '150 Rs.'},
        {weight:'35 to 50', costLocal: '100 Rs.', cost200: '120 Rs.', cost1000: '170 Rs.', cost2000: '200 Rs.', costmt2000: '350 Rs.', style:classes.greyRow}
    ]

    function handleClick(){
        setClick(!clicked)
    }
    useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            var mainTitle = titleScrollRef.current;
            var subtitle = subtitleScrollRef.current;
            var mainTitlePosition = mainTitle.getBoundingClientRect().top;
            var subtitlePosition = subtitle.getBoundingClientRect().top;
            var screenPosition = window.innerHeight / 1.1;
    
            if(mainTitlePosition < screenPosition){
                setTitleInView(true);
            }

            if(subtitlePosition < screenPosition){
                setSubtitleInView(true);
            }
        });
    })
    

    return <Box id="PRICES">
        <div className={classes.pricetableTitleHolder}>
            <Typography variant='h1' className={titleInView ? classes.pricetableTitleInView : classes.pricetableTitle} ref={titleScrollRef}>
                Prices
            </Typography>
            <Typography variant='h4' className={subtitleInView ? classes.pricetableSubtitleInView : classes.pricetableSubtitle} ref={subtitleScrollRef}>
                Check out our prices relative to package weight and distance
            </Typography>
        </div>
            <Collapse in={clicked} timeout='auto'>
                <div className={classes.tableContainer}>
                    <TableContainer component={Paper} className={classes.priceTable}>
                        <Table className={classes.table} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell className={classes.tableHeaders}>Weight(Kg)</TableCell>
                                    <TableCell align="right" className={classes.tableHeaders}>Less Than 50(Km)</TableCell>
                                    <TableCell align="right" className={classes.tableHeaders}>50km to 200(Km)</TableCell>
                                    <TableCell align="right" className={classes.tableHeaders}>201km to 1000(Km)</TableCell>
                                    <TableCell align="right" className={classes.tableHeaders}>1001km to 2000(Km)</TableCell>
                                    <TableCell align="right" className={classes.tableHeaders}>2001+(Km)</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row)=>(
                                    <TableRow key={row.weight}>
                                        <TableCell className={row.style} component='th' scope='row'>
                                            {row.weight}
                                        </TableCell>
                                        <TableCell className={row.style}  align="right">{row.costLocal}</TableCell>
                                        <TableCell className={row.style} align="right">{row.cost200}</TableCell>
                                        <TableCell className={row.style} align="right">{row.cost1000}</TableCell>
                                        <TableCell className={row.style} align="right">{row.cost2000}</TableCell>
                                        <TableCell className={row.style} align="right">{row.costmt2000}</TableCell>
                                    </TableRow>    
                                ))}                        
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </Collapse>
            <Button onClick={handleClick} className={classes.showTableButton}>
                { clicked ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </Button>
        </Box>
}

export default Pricetable;