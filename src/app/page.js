'use client' ;
import './home.css' ;
import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { barlow } from './config/fonts';
import MyProjects from './Components/UserShared/MyProjects/MyProjects';
import ContactMe from './Components/UserShared/ContactMe/ContactMe';
import AboutMe from './Components/UserShared/AboutMe/AboutMe';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const Home = () => {

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className= {` ${barlow.className} bg-white text-black w-full `}>
 <Box sx={{ width: '100%' }}>
      <Box sx={{  borderColor: 'divider', }} className= "bg-white md:fixed sm: sticky top-0 w-full z-10">
        <Tabs sx={{ padding:"10px" }} value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab sx={{ fontWeight: 'bold', color: "black" }} label="About" {...a11yProps(0)} />
          <Tab sx={{ fontWeight: 'bold', color: "black" }}  label="Projects" {...a11yProps(1)} />
          <Tab sx={{ fontWeight: 'bold', color: "black" }} label="Contact" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <AboutMe/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
      <MyProjects/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <ContactMe href="#contact"/>
      </CustomTabPanel>
    </Box>
    </div>
  );
};

export default Home;