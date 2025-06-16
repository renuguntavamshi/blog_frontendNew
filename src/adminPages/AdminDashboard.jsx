import * as React from 'react';
import AdminStyles from './admin.module.css';
import api, { setAuthToken } from './api';
import { useContext } from 'react';
import { NavLink,Outlet,useNavigate,useLocation } from 'react-router-dom';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AddIcon from '@mui/icons-material/Add';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import axios from 'axios';
import {useState, useEffect } from 'react';
import {store} from '../App';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    variants: [
      {
        props: ({ open }) => open,
        style: {
          transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
          }),
          marginLeft: 0,
        },
      },
    ],
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      props: ({ open }) => open,
      style: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function AdminDashboard() {
 let [token,setToken,userName]= useContext(store);
 
 let navigate=useNavigate();
 let result=useLocation().pathname.split("/");
 console.log(result);
 useEffect(()=>{
if(!token){
  // alert("Please login using credentials to go to admin Dashboard")
  navigate("/login",{replace:true})
 }
 },[token])
 
  useEffect(()=>{
    if(token){
axios.get("https://blog-backendnew-1.onrender.com/adminDashboard",{
  headers:{
    "x-token":token
  }
})
setAuthToken(token);
api.get("/adminDashboard")
.then(res=>console.log(res))
.catch(err=>console.log(err))
}
},[token])
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  let icons=[<AddIcon />,<ModeEditOutlineIcon />,<AddIcon />,<ModeEditOutlineIcon />,<AddIcon />,<ModeEditOutlineIcon />]
  function Icons({i}){
    return(
      <>
      {icons[i]}
      </>
    )
  }
  return (
    <>
     <Box sx={{ display: 'flex' }} >
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={[
              {
                mr: 2,
              },
              open && { display: 'none' },
            ]}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" noWrap component="div">
            Hi {userName}
          </Typography>
          <Typography variant="h6"  sx={{ ml: 'auto' }}>
           <button onClick={()=>{setToken("")
                      }} className={`${AdminStyles.logoutbtn}`}>Logout</button>
          </Typography>

        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List className={AdminStyles.a}>
          {['','Edit & Delete Blog'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 1 === 0 ? <><Icons i={index} /></> :null}
                </ListItemIcon>
 <NavLink to={text}>{index===0?<ListItemText primary="Add Blog" />:<ListItemText primary={text} />}            </NavLink>
 
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
       
      </Drawer>
      <Main open={open} style={{padding:"0px"}}
className={`${AdminStyles.mainpadding} mt-1`}
      >
        <h4 className='text-center bg-body-secondary  py-2 ' style={{color:"rgb(138, 34, 16)"}}>{result[result.length-1].replaceAll("%20"," ")==="adminDashboard"?"Add Blog":<>{result[result.length-1].replaceAll("%20"," ")}</>} </h4>           
      
<Outlet />
      </Main>
    </Box>   


    </>
  );
}