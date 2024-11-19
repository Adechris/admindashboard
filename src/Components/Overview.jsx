import React from 'react';
import { Grid, Card, CardContent, Box, Typography } from '@mui/material';
import {
  Menu as MenuIcon,
  AttachMoney as RevenueIcon,
  People as CustomersIcon,
  ShoppingCart as OrdersIcon,
} from '@mui/icons-material';

const  Overview = () => {
  return (
    <Grid container spacing={3} sx={{ mb: 3 }}>
      <Grid item xs={12} sm={3}>
        <Card>
          <CardContent>
            <Box>
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
            <Box>
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
            <Box>
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
            <Box>
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

export default  Overview;
