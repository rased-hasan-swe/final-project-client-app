import { Container,Grid,TextField,Typography,Button, CircularProgress, Alert } from '@mui/material';
import React, { useState } from 'react';
import { NavLink,useLocation,useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth/useAuth';
import login from '../../Images/login.jpg'
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Login = () => {
    const [loginData,setLoginData] = useState({})
    const {user,loginUser,isLoding,error,signInWithGoogle}=useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange= e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData={...loginData};
        newLoginData[field]=value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit=e=>{
        loginUser(loginData.email,loginData.password,location,history);
        e.preventDefault();
        
       
    }
    const handleGoogeSignIn=()=>{
        signInWithGoogle(location,history);
    }
    return (
        <>
        <Header></Header>
        <Container>
<Grid container spacing={2}>
  <Grid item xs={12} md={6} style={{marginTop:'210px'}}>
     <Typography style={{marginLeft:'10px'}} variant="body1" gutterBottom>Login</Typography>
     {!isLoding &&<form onSubmit={handleLoginSubmit} action="">
         <TextField
         sx={{width:'50%',m:1}}
         id="standard-basic"
         label="Your email"
         name="email"
         type="email"
         onBlur={handleOnChange} 
         variant="standard"
         >  
         </TextField>
         <TextField
         sx={{width:'50%',m:1}}
         id="standard-basic"
         label="Your password"
         name="password"
         onBlur={handleOnChange}
         type="password"
         variant="standard"
         > 
         </TextField>
         <Button sx={{width:'50%',m:1}} style={{marginLeft:"10px",backgroundColor:'gray',padding:'5px',color:'white'}} variant="contained" type="submit">Login</Button> 
         <NavLink style={{textDecoration:'none'}} to="/registar">
             <Button style={{marginLeft:"10px"}} variant="text">New user ? please click to Register </Button>
         </NavLink>
     </form>}
     <p style={{marginLeft:"10px"}}>--------------------or-----------------------</p>
             <Button onClick={handleGoogeSignIn} style={{marginLeft:"10px",backgroundColor:'gray',padding:'5px',color:'white'}} variant="contained"> Sign Up with google </Button>
            {isLoding && <CircularProgress />}
             {user?.email && <Alert variant="outlined" severity="success">
            user successfuly created
            </Alert> }
           {error && <Alert variant="outlined" severity="error">{error}</Alert>}
  </Grid>
  <Grid item xs={12} md={6}>
    <img style={{width:'100%',marginTop:'145px'}} src={login} alt="" />
  </Grid>
</Grid>
        </Container>
        <Footer></Footer>
        </>
    );
};

export default Login;