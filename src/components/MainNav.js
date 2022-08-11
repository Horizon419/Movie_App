import React from 'react';
import Box from '@material-ui/core/Box'
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { makeStyles } from '@material-ui/core';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import MovieIcon from '@material-ui/icons/Movie';
import SearchIcon from '@material-ui/icons/Search';
import TvIcon from '@material-ui/icons/Tv';
import { Link } from 'react-router-dom';
// import {useNavigate} from "react-router-dom"


const useStyles = makeStyles({
    root: {
        width: '100%',
        position: "fixed",
        bottom: 0,
        backgroundColor: 'orange',
        zIndex: 100
    }
})

export default function SimpleBottomNavigation() {
    const classes = useStyles();
  const [value, setValue] = React.useState(0);
//   const navigate = useNavigate();

// useEffect(() => {
//     if (value === 0) navigate.push("/");
//     else if (value === 1) navigate.push("/movies");
//     else if (value === 2) navigate.push("/series");
//     else if (value === 3) navigate.push("/search");
// }, [value, navigate]);

  return (
    <Box sx={{ width: 500 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        className={classes.root}
      >
        <BottomNavigationAction 
        style={{ color: "white" }}
        label="Trendng" icon={<Link to="/"><WhatshotIcon /></Link>} />

        <BottomNavigationAction 
        style={{ color: "white"}}
        label="Movies" icon={<Link to="/movies"><MovieIcon /></Link>} />

        <BottomNavigationAction 
        style={{ color: "white"}}
        label="Tv Series" icon={<Link to="/series"><TvIcon /></Link>} />

        <BottomNavigationAction 
        style={{ color: "white" }}
        label="Search" icon={<Link style={{ icon: "white"}} to="/search"><SearchIcon /></Link>} />
      </BottomNavigation>
    </Box>
  );
}
