import React from 'react';
import { Grid, Card, CardContent, Box, Typography, IconButton, List, ListItem, ListItemAvatar, ListItemText, Avatar, Divider } from '@mui/material';
import { MoreVert as MoreVertIcon } from '@mui/icons-material';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

const customerList = [
  {
    id: 1,
    name: 'Ana Black',
    email: 'ana@gmail.com',
    avatar: '/api/placeholder/40/40',
    lat: 37.7749,
    lng: -122.4194,
  },
  {
    id: 2,
    name: 'George Litz',
    email: 'georgelitz@gmail.com',
    avatar: '/api/placeholder/40/40',
    lat: 34.0522,
    lng: -118.2437,
  },
  {
    id: 3,
    name: 'John Miller',
    email: 'jmiller@gmail.com',
    avatar: '/api/placeholder/40/40',
    lat: 40.7128,
    lng: -74.0060,
  },
  {
    id: 4,
    name: 'Jane Johnson',
    email: 'jj@gmail.com',
    avatar: '/api/placeholder/40/40',
    lat: 41.8781,
    lng: -87.6298,
  },
  {
    id: 5,
    name: 'Meze Agnes',
    email: 'fefekartika@gmail.com',
    avatar: '/api/placeholder/40/40',
    lat: 51.5074,
    lng: -0.1278,
  },
  {
    id: 6,
    name: 'Katona Beatrix',
    email: 'edobram@gmail.com',
    avatar: '/api/placeholder/40/40',
    lat: 48.8566,
    lng: 2.3522,
  },
  {
    id: 7,
    name: 'Halasz Emese',
    email: 'jiloputri@gmail.com',
    avatar: '/api/placeholder/40/40',
    lat: 35.6895,
    lng: 139.6917,
  },
];

const MapSection = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyCGfPzOBoaEyzQ4-UyXwdatyVlKyZ6L9kk',
  });

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={8}>
        <Card sx={{ height: '100%' }}>
          <CardContent>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
              <Typography variant="h6">Customer Map</Typography>
              <IconButton size="small">
                <MoreVertIcon />
              </IconButton>
            </Box>
            <Box sx={{ height: 400, borderRadius: 1, position: 'relative' }}>
              <GoogleMap
                mapContainerStyle={{ height: '100%', width: '100%' }}
                center={{ lat: 37.7749, lng: -122.4194 }}
                zoom={2}
              >
                {customerList.map((customer) => (
                  <Marker
                    key={customer.id}
                    position={{ lat: customer.lat, lng: customer.lng }}
                  />
                ))}
              </GoogleMap>
            </Box>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} md={4}>
        <Card sx={{ height: '100%' }}>
          <CardContent>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Customer List
            </Typography>
            <List>
              {customerList.map((customer) => (
                <div key={customer.id}>
                  <ListItem sx={{ px: 0 }}>
                    <ListItemAvatar>
                      <Avatar src={customer.avatar} />
                    </ListItemAvatar>
                    <ListItemText
                      primary={customer.name}
                      secondary={customer.email}
                    />
                  </ListItem>
                  <Divider component="li" />
                </div>
              ))}
            </List>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default MapSection;
