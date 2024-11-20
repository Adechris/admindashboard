 

import React from 'react';
import { Grid, Card, CardContent, Box, Typography } from '@mui/material';
import {
  Menu as MenuIcon,
  AttachMoney as RevenueIcon,
  People as CustomersIcon,
  ShoppingCart as OrdersIcon,
} from '@mui/icons-material';
import { logEvent } from '../utils/analytics'; 

const Overview = () => {
  const handleMenuClick = () => {
    logEvent('Overview', 'Menu Clicked', 'Total Menu');
  };

  const handleRevenueClick = () => {
    logEvent('Overview', 'Revenue Clicked', 'Total Revenue');
  };

  const handleCustomersClick = () => {
    logEvent('Overview', 'Customers Clicked', 'Total Customers');
  };

  const handleOrdersClick = () => {
    logEvent('Overview', 'Orders Clicked', 'Total Orders');
  };

  return (
    <Grid container spacing={3} sx={{ mb: 3 }}>
      <Grid item xs={12} sm={3}>
        <Card>
          <CardContent>
            <Box onClick={handleMenuClick}>
              <MenuIcon sx={{ fontSize: 40 }} />
              <div>
                <Typography color="textSecondary" gutterBottom>
                  Total Menu
                </Typography>
                <Typography variant="h6">345</Typography>
              </div>
            </Box>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={3}>
        <Card>
          <CardContent>
            <Box onClick={handleRevenueClick}>
              <RevenueIcon sx={{ fontSize: 40 }} />
              <div>
                <Typography color="textSecondary" gutterBottom>
                  Total Revenue
                </Typography>
                <Typography variant="h6">$37,193.00</Typography>
              </div>
            </Box>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={3}>
        <Card>
          <CardContent>
            <Box onClick={handleCustomersClick}>
              <CustomersIcon sx={{ fontSize: 40 }} />
              <div>
                <Typography color="textSecondary" gutterBottom>
                  Total Customers
                </Typography>
                <Typography variant="h6">1349</Typography>
              </div>
            </Box>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={3}>
        <Card>
          <CardContent>
            <Box onClick={handleOrdersClick}>
              <OrdersIcon sx={{ fontSize: 40 }} />
              <div>
                <Typography color="textSecondary" gutterBottom>
                  Total Orders
                </Typography>
                <Typography variant="h6">3500</Typography>
              </div>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Overview;
