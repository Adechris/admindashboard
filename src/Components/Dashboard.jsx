 

 

import React, { useState } from 'react';
import { Box, Container, useTheme, useMediaQuery } from '@mui/material';
import Sidebar from '../Components/Sidebar';
import Header from '../Components/TopBar';
import StatsOverview from '../Components/Overview';
import Charts from '../Components/Charts';
import CustomerMapSection from '../Components/MapSection';
import MenuSection from '../Components/Menu';

const DRAWER_WIDTH = 240;

const Dashboard = () => {
  const [tabValue, setTabValue] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Header 
        handleDrawerToggle={handleDrawerToggle} 
        DRAWER_WIDTH={DRAWER_WIDTH}
      />
      <Sidebar
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
      />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${DRAWER_WIDTH}px)` },
          ml: { sm: `${DRAWER_WIDTH}px` },  
          mt: { xs: '76px', sm: '88px' },  
          bgcolor: '#f5f5f5',
          minHeight: '100vh',
          overflow: 'hidden' 
        }}
      >
        <Container maxWidth="xl" sx={{ py: 2 }}>
          <StatsOverview />
          <Charts />
          <Box sx={{ mb: 3 }}>
            <CustomerMapSection />
          </Box>
          <MenuSection tabValue={tabValue} setTabValue={setTabValue} />
        </Container>
      </Box>
    </Box>
  );
};

export default Dashboard;