 
import React from 'react';
import { 
  AppBar,
  Toolbar,
  InputBase,
  Avatar,
  Typography,
  IconButton,
  Box,
  alpha,
  useTheme,
  Badge,
  useMediaQuery
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { 
  Search as SearchIcon,
  NotificationsNoneOutlined as NotificationIcon,
  Menu as MenuIcon,
  Mail as MailIcon,
} from '@mui/icons-material';
 
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  border: '1px solid',
  borderColor: theme.palette.grey[300],
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  maxWidth: '500px',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.grey[500],
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    width: '100%',
  },
}));

const Topbar = ({ handleDrawerToggle, DRAWER_WIDTH = 240 }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <AppBar 
      position="fixed" 
      color="transparent" 
      elevation={0} 
      sx={{ 
        borderBottom: 1, 
        borderColor: 'grey.200',
        bgcolor: 'background.paper',
        zIndex: theme.zIndex.drawer + 1,
        width: { 
          sm: `calc(100% - ${DRAWER_WIDTH}px)` 
        },
        ml: { 
          sm: `${DRAWER_WIDTH}px` 
        }
      }}
    >
      <Toolbar 
        sx={{ 
          justifyContent: 'space-between',
          minHeight: { xs: '56px', sm: '64px' },
          px: { xs: 1, sm: 2 }
        }}
      >
         
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          {isMobile && (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 1 }}
            >
              <MenuIcon />
            </IconButton>
          )}
          <Box>
            <Typography 
              variant="h6" 
              component="h1" 
              sx={{ 
                fontWeight: 600,
                fontSize: { xs: '1.1rem', sm: '1.25rem' }
              }}
            >
              Hi, Taylor!
            </Typography>
            <Typography 
              variant="body2" 
              color="text.secondary"
              sx={{ 
                display: { xs: 'none', sm: 'block' }
              }}
            >
              Let's check your store today
            </Typography>
          </Box>
        </Box>

       
        <Search sx={{ 
          display: { xs: 'none', md: 'block' },
          maxWidth: { sm: '300px', md: '400px' }
        }}>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search..."
            inputProps={{ 'aria-label': 'search' }}
          />
        </Search>

      
        <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 1, sm: 2 } }}>
         
         
           <IconButton>
               <Badge color="error" variant="dot">
                 <MailIcon />
               </Badge>
            </IconButton>
             <IconButton>
               <Badge color="error" variant="dot">
                 <NotificationIcon />
               </Badge>
            </IconButton>
          
          <Avatar 
            src="/api/placeholder/32/32"
            alt="Tynisha Obey"
            sx={{ 
              width: { xs: 32, sm: 40 }, 
              height: { xs: 32, sm: 40 }
            }}
          />
          
          <Typography 
            variant="body2" 
            sx={{ 
              fontWeight: 500,
              display: { xs: 'none', sm: 'block' }
            }}
          >
            Tynisha Obey
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;