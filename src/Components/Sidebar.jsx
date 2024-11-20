import React from 'react';
import {
  Box,
  Container,
  Avatar,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Drawer,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import {
  Dashboard as DashboardIcon,
  Assessment as AnalyticsIcon,
  People as CustomerIcon,
  RestaurantMenu as MenuItemIcon,
} from '@mui/icons-material';

const Sidebar = ({ mobileOpen, handleDrawerToggle, DRAWER_WIDTH }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const drawerContent = (
    <Container >
      <Box sx={{ width: DRAWER_WIDTH}}>
        
        <Box sx={{ p: 2, display: 'flex', alignItems: 'center', gap: 2 }} style={{marginTop:"40px"}}>
          <Avatar sx={{ bgcolor: 'primary.main' }}>C</Avatar>
          <Typography variant="h6" color="dark">
            Chucky
            <Typography>Admin Dashboard</Typography>
          </Typography>
        </Box>

       
        <List sx={{ px: 2 }}>
          <ListItem
            button
            selected
            sx={{
              borderRadius: 1,
              mb: 1,
              '&.Mui-selected': {
                backgroundColor: 'primary.main',
                color: 'white',
                '& .MuiListItemIcon-root': {
                  color: 'white',
                },
              },
            }}
          >
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem button sx={{ borderRadius: 1, mb: 1 }}>
            <ListItemIcon>
              <AnalyticsIcon />
            </ListItemIcon>
            <ListItemText primary="Orders" />
          </ListItem>
          <ListItem button sx={{ borderRadius: 1, mb: 1 }}>
            <ListItemIcon>
              <CustomerIcon />
            </ListItemIcon>
            <ListItemText primary="Analytics" />
          </ListItem>
          <ListItem button sx={{ borderRadius: 1, mb: 1 }}>
            <ListItemIcon>
              <CustomerIcon />
            </ListItemIcon>
            <ListItemText primary="Customers" />
          </ListItem>
          <ListItem button sx={{ borderRadius: 1, mb: 1 }}>
            <ListItemIcon>
              <MenuItemIcon />
            </ListItemIcon>
            <ListItemText primary="Menu" />
          </ListItem>
        </List>
      </Box>
    </Container>
  );

  return (
    <Box component="nav" sx={{ width: { sm: DRAWER_WIDTH }, flexShrink: { sm: 0 } }}>
    
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: DRAWER_WIDTH,
          },
        }}
      >
        {drawerContent}
      </Drawer>

   
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: DRAWER_WIDTH,
            border: 'none',
          
          },
        }}
        open
      >
        {drawerContent}
      </Drawer>
    </Box>
  );
};

export default Sidebar;
