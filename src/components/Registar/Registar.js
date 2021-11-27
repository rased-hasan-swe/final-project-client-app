import { Container,Grid,TextField,Typography,Button, CircularProgress, Alert } from '@mui/material';
import React, { useState } from 'react';
import { NavLink,useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth/useAuth';
import login from '../../Images/login.jpg'
import Footer from '../Footer/Footer';
import Header from '../Header/Header';


const Registar = () => {
    const [loginData,setLoginData] = useState({});
    const history = useHistory();  
    const {user,registerUser,isLoding,error,signInWithGoogle} = useAuth();

    const handleOnChange=e=>{
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData={...loginData};
        newLoginData[field]=value;
        setLoginData(newLoginData);
        //console.log(newLoginData);
    }
    const handleLoginSubmit=e=>{
        
        if(loginData.password!==loginData.password2){
            alert('Your password did not match');
            return
        }
        registerUser(loginData.email,loginData.password,loginData.name,history);
        e.preventDefault();
    }
    const handleGoogeSignIn=()=>{
        signInWithGoogle(history);
    }
    
    return (
        <>
        <Header></Header>
        <Container>
        <Grid container spacing={2}>
          <Grid style={{marginTop:'125px'}} item xs={12} md={6}>
             <Typography style={{marginLeft:'10px'}} variant="body1" gutterBottom>Registar</Typography>
             {!isLoding && <form onSubmit={handleLoginSubmit} action="">
                 <TextField
                 sx={{width:'50%',m:1}}
                 id="standard-basic"
                 label="Your name"
                 name="name"
                 onBlur={handleOnChange}
                 variant="standard"
                 >  
                 </TextField>
                 <TextField
                 sx={{width:'50%',m:1}}
                 id="standard-basic"
                 label="Your email"
                 type="email"
                 name="email"
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
                 <TextField
                 sx={{width:'50%',m:1}}
                 id="standard-basic"
                 label="re-type password"
                 name="password2"
                 onBlur={handleOnChange}
                 type="password"
                 variant="standard"
                 > 
                 </TextField>
                 
                 <Button sx={{width:'50%',m:1}}style={{marginLeft:"10px",backgroundColor:'gray',padding:'5px',color:'white'}} variant="contained" type="submit">Register</Button> 
                 <NavLink style={{textDecoration:'none'}} to="/login">
                     <Button variant="text">Already registered ? please login </Button>
                 </NavLink>
             </form>}
             <p>--------------------or-----------------------</p>
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

export default Registar;