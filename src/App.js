// import React, { useState } from 'react';
// import {
//   Box,
//   Card,
//   CardContent,
//   Typography,
//   Grid,
//   Avatar,
//   List,
//   ListItem,
//   ListItemAvatar,
//   ListItemText,
//   ListItemIcon,
//   Tabs,
//   Tab,
//   Paper,
//   Drawer,
//   AppBar, 
//   Toolbar,
//   IconButton,
//   useTheme,
//   useMediaQuery,
//   Divider,
//   Container,
// } from '@mui/material';
// import {
//   Menu as MenuIcon,
//   Dashboard as DashboardIcon,
//   Assessment as AnalyticsIcon,
//   People as CustomerIcon,
//   RestaurantMenu as MenuItemIcon,
//   Search as SearchIcon,
//   Notifications as NotificationsIcon,
//   LocationOn as LocationIcon,
//   MoreVert as MoreVertIcon,
//   AttachMoney as RevenueIcon,
//   People as CustomersIcon,
//   ShoppingCart as OrdersIcon
// } from '@mui/icons-material';
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
// import { PieChart, Pie, Cell } from 'recharts';

// // Sample data remains the same
// const revenueData = [
//   { month: 'Jan', value: 15000 },
//   { month: 'Feb', value: 18000 },
//   { month: 'Mar', value: 22000 },
//   { month: 'Apr', value: 28000 },
//   { month: 'May', value: 32000 },
//   { month: 'Jun', value: 37000 },
// ];

// const customerData = [
//   { name: 'New', value: 82.3 },
//   { name: 'Returning', value: 17.7 },
// ];

// const COLORS = ['#8884d8', '#82ca9d'];
// const DRAWER_WIDTH = 240;

// const Dashboard = () => {
//   const [tabValue, setTabValue] = useState(0);
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

//   const handleDrawerToggle = () => {
//     setMobileOpen(!mobileOpen);
//   };

//   const drawerContent = (
//     <Container>  
//         <Box sx={{ width: DRAWER_WIDTH }}>
//       {/* Logo/Brand */}
//       <Box sx={{ p: 2, display: 'flex', alignItems: 'center', gap: 2 }}>
//         <Avatar sx={{ bgcolor: 'primary.main' }}>C</Avatar>
//         <Typography variant="h6" color="dark">
//           Chucky
//           <Typography>
//             Admin Dashboard
//           </Typography>
//         </Typography>
//       </Box>
    

//       {/* Navigation Items */}
//       <List sx={{ px: 2 }}>
//         <ListItem
//           button
//           selected
//           sx={{
//             borderRadius: 1,
//             mb: 1,
//             '&.Mui-selected': {
//               backgroundColor: 'primary.main',
//               color: 'white',
//               '& .MuiListItemIcon-root': {
//                 color: 'white',
//               },
//             },
//           }}
//         >
//           <ListItemIcon>
//             <DashboardIcon />
//           </ListItemIcon>
//           <ListItemText primary="Dashboard" />
//         </ListItem>
//         <ListItem button sx={{ borderRadius: 1, mb: 1 }}>
//           <ListItemIcon>
//             <AnalyticsIcon />
//           </ListItemIcon>
//           <ListItemText primary="Orders" />
//         </ListItem>
//         <ListItem button sx={{ borderRadius: 1, mb: 1 }}>
//           <ListItemIcon>
//             <CustomerIcon />
//           </ListItemIcon>
//           <ListItemText primary="Analytics" />
//         </ListItem>
//         <ListItem button sx={{ borderRadius: 1, mb: 1 }}>
//           <ListItemIcon>
//             <CustomerIcon />
//           </ListItemIcon>
//           <ListItemText primary="Customers" />
//         </ListItem>
//         <ListItem button sx={{ borderRadius: 1, mb: 1 }}>
//           <ListItemIcon>
//             <MenuItemIcon />
//           </ListItemIcon>
//           <ListItemText primary="Menu" />
//         </ListItem>
    
//       </List>
//     </Box>
//     </Container>
//   );

//   const customerList = [
//     {
//       id: 1,
//       name: 'Ann Klein',
//       email: 'ann@gmail.com',
//       avatar: '/api/placeholder/40/40',
//       // location: 'San Francisco',
//     },
//     {
//       id: 2,
//       name: 'George Lin',
//       email: 'george@gmail.com',
//       avatar: '/api/placeholder/40/40',
//       // location: 'Berkeley',
//     },
//     {
//       id: 3,
//       name: 'Nina Smith',
//       email: 'nina@gmail.com',
//       avatar: '/api/placeholder/40/40',
//       // location: 'Oakland',
//     },
//     {
//       id: 4,
//       name: 'Helen Syers',
//       email: 'helen@gmail.com',
//       avatar: '/api/placeholder/40/40',
//       // location: 'San Jose',
//     },
//   ];



//   const CustomerMapSection = () => {
//     return (
//       <Grid container spacing={3}>
//         {/* Map Section */}
//         <Grid item xs={12} md={8}>
//           <Card sx={{ height: '100%' }}>
//             <CardContent>
//               <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
//                 <Typography variant="h6">Customer Map</Typography>
//                 <IconButton size="small">
//                   <MoreVertIcon />
//                 </IconButton>
//               </Box>
//               {/* Placeholder for Google Maps */}
//               <Box
//                 sx={{
//                   height: 400,
//                   bgcolor: '#f5f5f5',
//                   borderRadius: 1,
//                   display: 'flex',
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                   position: 'relative',
//                   overflow: 'hidden',
//                 }}
//               >
//                 <img 
//                   src="/api/placeholder/800/400" 
//                   alt="Map"
//                   style={{
//                     width: '100%',
//                     height: '100%',
//                     objectFit: 'cover',
//                   }}
//                 />
//                 {/* Sample location markers */}
//                 {[
//                   { top: '30%', left: '40%' },
//                   { top: '45%', left: '55%' },
//                   { top: '60%', left: '35%' },
//                   { top: '35%', left: '60%' },
//                 ].map((pos, idx) => (
//                   <Box
//                     key={idx}
//                     sx={{
//                       position: 'absolute',
//                       ...pos,
//                       transform: 'translate(-50%, -50%)',
//                     }}
//                   >
//                     <LocationIcon color="error" />
//                   </Box>
//                 ))}
//               </Box>
//             </CardContent>
//           </Card>
//         </Grid>
  
//         {/* Customer List Section */}
//         <Grid item xs={12} md={4}>
//           <Card sx={{ height: '100%' }}>
//             <CardContent>
//               <Typography variant="h6" sx={{ mb: 2 }}>
//                 Customer List
//               </Typography>
//               <List>
//                 {customerList.map((customer) => (
//                   <React.Fragment key={customer.id}>
//                     <ListItem sx={{ px: 0 }}>
//                       <ListItemAvatar>
//                         <Avatar src={customer.avatar} />
//                       </ListItemAvatar>
//                       <ListItemText
//                         primary={customer.name}
//                         secondary={customer.email}
//                       />
//                       <Typography variant="body2" color="text.secondary">
//                         <LocationIcon sx={{ fontSize: 14, verticalAlign: 'middle', mr: 0.5 }} />
//                         {customer.location}
//                       </Typography>
//                     </ListItem>
//                     <Divider component="li" />
//                   </React.Fragment>
//                 ))}
//               </List>
//             </CardContent>
//           </Card>
//         </Grid>
//       </Grid>
//     );
//   };

//   return (
//     <Container>
//     <Box sx={{ display: 'flex' }}>
   
//       <AppBar
//         position="fixed"
//         sx={{
//           display: { sm: 'none' },
//           width: { sm: `calc(100% - ${DRAWER_WIDTH}px)` },
//           ml: { sm: `${DRAWER_WIDTH}px` },
//         }}
//       >
//         <Toolbar>
//           <IconButton
//             color="inherit"
//             edge="start"
//             onClick={handleDrawerToggle}
//             sx={{ mr: 2, display: { sm: 'none' } }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
//             Dashboard
//           </Typography>
//           <IconButton color="inherit">
//             <SearchIcon />
//           </IconButton>
//           <IconButton color="inherit">
//             <NotificationsIcon />
//           </IconButton>
//         </Toolbar>
//       </AppBar>

//       {/* Sidebar */}
//       <Box
//         component="nav"
//         sx={{ width: { sm: DRAWER_WIDTH }, flexShrink: { sm: 0 } }}
//       >
//         {/* Mobile drawer */}
//         <Drawer
//           variant="temporary"
//           open={mobileOpen}
//           onClose={handleDrawerToggle}
//           ModalProps={{
//             keepMounted: true,
//           }}
//           sx={{
//             display: { xs: 'block', sm: 'none' },
//             '& .MuiDrawer-paper': {
//               boxSizing: 'border-box',
//               width: DRAWER_WIDTH,
//             },
//           }}
//         >
//           {drawerContent}
//         </Drawer>
        
//         {/* Desktop drawer */}
//         <Drawer
//           variant="permanent"
//           sx={{
//             display: { xs: 'none', sm: 'block' },
//             '& .MuiDrawer-paper': {
//               boxSizing: 'border-box',
//               width: DRAWER_WIDTH,
//               border: 'none',
//               bgcolor: 'background.default',
//             },
//           }}
//           open
//         >
//           {drawerContent}
//         </Drawer>
//       </Box>

//       {/* Main Content */}
//       <Box
//         component="main"
//         sx={{
//           flexGrow: 1,
//           p: 3,
//           width: { sm: `calc(100% - ${DRAWER_WIDTH}px)` },
//           mt: { xs: 8, sm: 0 },
//           bgcolor: '#f5f5f5',
//           minHeight: '100vh',
//         }}
//       >
//         {/* Header */}
//         <Paper sx={{ p: 2, mb: 3 }}>
//           <Grid container alignItems="center" justifyContent="space-between">
//             <Grid item>
//               <Typography variant="h6">Hi, Taylor!</Typography>
//             </Grid>
//             <Grid item>
//               <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
//                 <IconButton>
//                   <SearchIcon />
//                 </IconButton>
//                 <IconButton>
//                   <NotificationsIcon />
//                 </IconButton>
//                 <Avatar>T</Avatar>
//               </Box>
//             </Grid>
//           </Grid>
//         </Paper>

//         {/* Stats Overview */}
//         <Grid container spacing={3} sx={{ mb: 3 }}>
//   <Grid item xs={12} sm={3}>
//     <Card>
//       <CardContent>
//         <Box  >
//           <MenuIcon sx={{   fontSize: 40 }} />
//           <div>
//             <Typography color="textSecondary" gutterBottom>
//               Total Menu
//             </Typography>
//             <Typography variant="h6">345</Typography>
//           </div>
//         </Box>
//       </CardContent>
//     </Card>
//   </Grid>

//   <Grid item xs={12} sm={3}>
//     <Card>
//       <CardContent>
//         <Box >
//           <RevenueIcon sx={{ fontSize: 40 }} />
//           <div>
//             <Typography color="textSecondary" gutterBottom>
//               Total Revenue
//             </Typography>
//             <Typography variant="h6">$37,193.00</Typography>
//           </div>
//         </Box>
//       </CardContent>
//     </Card>
//   </Grid>

//   <Grid item xs={12} sm={3}>
//     <Card>
//       <CardContent>
//         <Box  >
//           <CustomersIcon sx={{ fontSize: 40 }} />
//           <div>
//             <Typography color="textSecondary" gutterBottom>
//               Total Customers
//             </Typography>
//             <Typography variant="h6">1349</Typography>
//           </div>
//         </Box>
//       </CardContent>
//     </Card>
//   </Grid>

//   <Grid item xs={12} sm={3}>
//     <Card>
//       <CardContent>
//         <Box  >
//           <OrdersIcon sx={{ fontSize: 40 }} />
//           <div>
//             <Typography color="textSecondary" gutterBottom>
//               Total Orders
//             </Typography>
//             <Typography variant="h6">3500</Typography>
//           </div>
//         </Box>
//       </CardContent>
//     </Card>
//   </Grid>
// </Grid>

//         {/* Charts */}
//         <Grid container spacing={3} sx={{ mb: 3 }}>
//           <Grid item xs={12} md={8}>
//             <Card>
//               <CardContent>
//                 <Typography variant="h6" gutterBottom>
//                   Revenue
//                 </Typography>
//                 <Box sx={{ height: 300 }}>
//                   <ResponsiveContainer width="100%" height="100%">
//                     <BarChart data={revenueData}>
//                       <CartesianGrid strokeDasharray="3 3" />
//                       <XAxis dataKey="month" />
//                       <YAxis />
//                       <Bar dataKey="value" fill="#8884d8" />
//                     </BarChart>
//                   </ResponsiveContainer>
//                 </Box>
//               </CardContent>
//             </Card>
//           </Grid>
//           <Grid item xs={12} md={4}>
//             <Card>
//               <CardContent>
//                 <Typography variant="h6" gutterBottom>
//                   Customers
//                 </Typography>
//                 <Box sx={{ height: 300 }}>
//                   <ResponsiveContainer width="100%" height="100%">
//                     <PieChart>
//                       <Pie
//                         data={customerData}
//                         innerRadius={60}
//                         outerRadius={80}
//                         paddingAngle={5}
//                         dataKey="value"
//                       >
//                         {customerData.map((entry, index) => (
//                           <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//                         ))}
//                       </Pie>
//                     </PieChart>
//                   </ResponsiveContainer>
//                 </Box>
//               </CardContent>
//             </Card>
//           </Grid>
//         </Grid>


//         <Box sx={{ mb: 3 }}>
//           <CustomerMapSection />
//         </Box>

//         {/* Menu Section */}
//         <Card>
//           <CardContent>
//             <Typography variant="h6" gutterBottom>
//               Menu
//             </Typography>
//             <Tabs
//               value={tabValue}
//               onChange={(e, newValue) => setTabValue(newValue)}
//               sx={{ mb: 2 }}
//             >
//               <Tab label="All Category" />
//               <Tab label="Breakfast" />
//               <Tab label="Lunch" />
//               <Tab label="Dinner" />
//             </Tabs>
//             <Grid container spacing={2}>
//               <Grid item xs={12} sm={6} md={3}>
//                 <Card>
//                   <Box
//                     component="img"
//                     sx={{
//                       width: '100%',
//                       height: 200,
//                       objectFit: 'cover',
//                     }}
//                     src="/api/placeholder/400/320"
//                     alt="Menu item"
//                   />
//                   <CardContent>
//                     <Typography variant="subtitle1">Surf & Turf</Typography>
//                     <Typography variant="body2" color="textSecondary">
//                       $24.99
//                     </Typography>
//                   </CardContent>
//                 </Card>
//               </Grid>
//             </Grid>
//           </CardContent>
//         </Card>
//       </Box>
//     </Box>
//     </Container>
//   );
// };

// export default Dashboard;



import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from "./Components/Dashboard";
import { Container } from '@mui/material';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />

      </Routes>
    </Router>
  );
};

export default App;
