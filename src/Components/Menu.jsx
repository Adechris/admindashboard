 


import React from 'react';
import { Card, CardContent, Typography, Tabs, Tab, Box, Grid } from '@mui/material';

import Food1 from "../Assets/food1.jpeg";
import Food2 from "../Assets/food2.jpeg";
import Food3 from "../Assets/food3.jpeg";
import Food4 from "../Assets/food4.jpeg";
import Food5 from "../Assets/food5.jpeg";
import Food6 from "../Assets/food6.jpeg";

const menuItems = [
  {
    name: 'BBQ Rib Dinner',
    price: '$69.21',
    image: Food1
  },
  {
    name: 'Chicken Ribs Combo',
    price: '$98.49',
    image: Food2
  },
  {
    name: 'Fried Chicken Dinner',
    price: '$83.56',
    image: Food3
  },
  {
    name: 'Dark & Stormy',
    price: '$90.58',
    image: Food4
  },
];

const specialItems = [
  {
    name: 'Surf & Turf Gift Basket',
    price: '$89.24',
    image: Food6
  },
  {
    name: 'Shaking beef Tri-Trip',
    price: '$69.46',
    image: Food5
  },
];

const MenuSection = ({ tabValue, setTabValue }) => {
  return (
    <Card>
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
          <Typography variant="h6">
            Menu
          </Typography>
          <Tabs
            value={tabValue}
            onChange={(e, newValue) => setTabValue(newValue)}
          >
            <Tab label="All Category" />
            <Tab label="Breakfast" />
            <Tab label="Lunch" />
            <Tab label="Dinner" />
          </Tabs>
        </Box>
        <Box sx={{ mt: 4 }}>
       
          <Grid container spacing={2} sx={{ mb: 3 }}>
            {specialItems.map((item, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <Card>
                  <Box sx={{ position: 'relative' }}>
                    <Box
                      component="img"
                      sx={{
                        width: '100%',
                        height: 200,
                        objectFit: 'cover',
                      }}
                      src={item.image}
                      alt={item.name}
                    />
                    <Box
                      sx={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        bgcolor: 'rgba(0, 0, 0, 0.3)',
                        color: 'red',
                        padding: 2,
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}
                    >
                      <Typography variant="subtitle1" sx={{ color: 'white' }}>
                        {item.name}
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'white' }}>
                        {item.price}
                      </Typography>
                    </Box>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
        <Grid container spacing={2}>
          {menuItems.map((item, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card>
                <Box sx={{ position: 'relative' }}>
                  <Box
                    component="img"
                    sx={{
                      width: '100%',
                      height: 200,
                      objectFit: 'cover',
                    }}
                    src={item.image}
                    alt={item.name}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      bgcolor: 'rgba(0, 0, 0, 0.3)',
                      color: 'red',
                      padding: 2,
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <Typography variant="subtitle1" sx={{ color: 'white' }}>
                      {item.name}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'white' }}>
                      {item.price}
                    </Typography>
                  </Box>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
     
      </CardContent>
    </Card>
  );
};

export default MenuSection;
