import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import HeroBannerImage from '../assets/images/bruce.jpg';

const HeroBanner = () => (
<Box sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }} position="relative" p="20px">
    <Typography color="#FF2625" fontWeight="600" fontSize="26px">Expand your Physical Capacities</Typography>
    <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb="23px" mt="30px">
        Hard Work, Dedication <br />
        And Self-Love
    </Typography>
    <Typography fontSize="22px" fontFamily="Alegreya" lineHeight="35px">
    “Be like water making its way through cracks. Do not be assertive, 
    <br></br>
    but adjust to the object, and you shall find a way around or through it. 
    <br></br>
    If nothing within you stays rigid, outward things will disclose themselves.
    </Typography>
    <Stack>
        <a href="#exercises" style={{ marginTop: '45px', textDecoration: 'none', width: '200px', textAlign: 'center', background: '#FF2625', padding: '14px', fontSize: '22px', textTransform: 'none', color: 'white', borderRadius: '4px' }}>Explore Exercises</a>
    </Stack>
    <Typography fontWeight={600} color="#FF2625" sx={{ opacity: '0.1', display: { lg: 'block', xs: 'none' }, fontSize: '200px' }}>
        Exercise
    </Typography>
    <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" />
</Box>
);

export default HeroBanner;

