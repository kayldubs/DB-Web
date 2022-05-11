import React from 'react';

//Material UI Imports 
//import Paper from '@mui/material/Paper';
//import CardMedia from '@mui/material/CardMedia';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    homeHero: {
        component: "img",
        backgroundImage: "src/assests/imgs/recordBanner.jpeg",
        image: "src/assests/imgs/recordBanner.jpeg",
        width: '100%',
        height: '400vh',
    },
}));

const Home = () => {
    const classes = useStyles();
    return(
        <div>
            <p></p>
        </div>
    )
}

export default Home;