import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import { AppBar, Toolbar, IconButton, Typography} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { NavLink,useRouteMatch,Link,Switch,Route } from 'react-router-dom';
import { Button } from '@mui/material';
import useAuth from '../../Hooks/useAuth/useAuth';
import AddService from '../AddService/AddService';
import AddAdmin from '../AddAdmin/AddAdmin';
import ManageAllOrder from '../ManageAllOrder/ManageAllOrder';
import MyOrder from '../MyOrder/MyOrder';
import Payment from '../Payment/Payment';
import Review from '../Review/Review';

const drawerWidth =150;
function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  
  let{path,url}=useRouteMatch();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const {user,logout,admin}=useAuth();
  const drawer = (
    <div >
      <Toolbar />
      <NavLink  to="/home"  style={{textDecoration:'none',color:'black',fontSize:'20px',marginLeft:'10px'}}><Button  color="inherit">Home</Button></NavLink>
      
      { admin? <Box>
      <Link  to={`${url}/addservice`}  style={{textDecoration:'none',color:'black',fontSize:'20px',marginLeft:'10px'}}><Button  color="inherit">Add product</Button></Link>
      <Link  to={`${url}/addadmin`}  style={{textDecoration:'none',color:'black',fontSize:'20px',marginLeft:'10px'}}><Button  color="inherit">Add Admin</Button></Link>
      <Link  to={`${url}/allorder`}  style={{textDecoration:'none',color:'black',fontSize:'20px',marginLeft:'10px'}}><Button  color="inherit">Manage Order</Button></Link>
       </Box>:

      <div className="d-flex flex-column">
          <Link  to={`${url}/myorder`}  style={{textDecoration:'none',color:'black',fontSize:'20px',marginLeft:'10px'}}><Button  color="inherit">My Order</Button></Link>
          <Link  to={`${url}/review`}  style={{textDecoration:'none',color:'black',fontSize:'20px',marginLeft:'10px'}}><Button  color="inherit"> review </Button></Link>
          <Link  to={`${url}/payment`}  style={{textDecoration:'none',color:'black',fontSize:'20px',marginLeft:'10px'}}><Button  color="inherit"> payment </Button></Link>
 
           
      </div> 
    }
      {user?.email&&<button onClick={logout} style={{marginLeft:'10px'}}> logout</button> }
    </div>
    
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box  sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar 
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography style={{color:'white',marginLeft:'150px'}}  variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Switch>
         <Route exact path={`${path}/addservice`}>
           <AddService></AddService>
         </Route>
         <Route exact path={`${path}/allorder`}>
           <ManageAllOrder></ManageAllOrder>
         </Route>
         <Route exact path={`${path}/myorder`}>
           <MyOrder></MyOrder>
         </Route>
         <Route exact path={`${path}/addadmin`}>
           <AddAdmin></AddAdmin>
         </Route>
         <Route exact path={`${path}/payment`}>
           <Payment></Payment>
         </Route>
         <Route exact path={`${path}/review`}>
           <Review></Review>
         </Route>
        </Switch>
        
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;