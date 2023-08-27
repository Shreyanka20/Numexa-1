import React, { useState } from 'react';
import Image from 'next/image';
import { Box, Tab, Tabs } from '@mui/material';
import logo from '../assets/logo.png';
import Hero from './waitlist';
import DOCBUTTON from './doc';
import DEVBUTTON from './developer';
import RESOURCEBUTT from './resources';

const Navbar = () => {
  const [value, setValue] = useState(0);

  const handleChange = (_event, newValue) => {
    setValue(newValue);
  };

  const tabElements = [
    { label: <h2>HOME</h2> },
    { label: <h2>DOCS</h2>, content: <DOCBUTTON /> },
    { label: <h2>DEVELOPMENT</h2>, content: <DEVBUTTON /> },
    { label: <h2>RESOURCE</h2>, content: <RESOURCEBUTT /> },
  ];

  return (
    <div className="bg-white shadow-md ">
      <div className="container mx-auto px-3 flex justify-between items-center">
        <div className="logo-and-text-container pr-[100px]"> {/* Add right padding */}
          <div className="logo-container">
            <Image src={logo} alt="Numexa Logo" className="h-14 w-[360px]" />
          </div>
        </div>

        {/* Centered Tabs */}
        <div className="flex-grow text-center"> {/* Add the 'flex-grow' class to make it take up available space */}
          <Tabs
            onChange={handleChange}
            value={value}
            aria-label="Tabs where each tab needs to be selected manually"
            sx={{ alignSelf: 'flex-end' }}
            className="custom-tabs"
          >
            {tabElements.map((tab, index) => (
              <Tab
                key={index}
                label={tab.label}
                sx={{
                  fontSize: '20px', // Adjust font size
                   // Adjust padding
                  color: value === index ? ' #01637c ' : ' #01637c ',
                  '&:hover': {
                    color: value === index ? 'grey' : ' #01637c ',
                  },
                }}
              />
            ))}
          </Tabs>
          <Box sx={{ marginTop: '1px' }}> {/* Add left padding */}
            {tabElements[value].content}
          </Box>
        </div>

        {/* Waitlist Button */}
        <Hero />
      </div>
    </div>
  );
};

export default Navbar;

