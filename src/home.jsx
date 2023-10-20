import React, { useState, useEffect } from 'react';
import * as Components from './Components';
import { colors } from '@mui/material';
import { green } from '@mui/material/colors';
import { redirect,useNavigate } from "react-router-dom";
import Dashboard from './dashboard';
function Login(){
  const navigate = useNavigate();

    const Logout = () => {

        console.log(11);
        navigate('/dashboard');
    };
    const redd = () => {
            toggle(true);
    };
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [msg, setMsg] = useState('');
    const [signIn, toggle] = React.useState(true);
    
useEffect(()=>{
    setTimeout(function(){
    setMsg("");

    },3000)
},[msg])    
const spanSuccess = {
    color: 'green' 
  };
  const spanError = {
    color: 'red' 
  };
const handleFormSubmit = async (e) => {
    e.preventDefault();
    if(signIn){
        try {
            var url =   "http://localhost/react/login.php";
            var header = {
    "Accept": "application/json",
    "Content-type":"application/json"
            };
            var Data = {
                user:username,
                pass:password,
            };
            fetch(url,{
                method:"POST"
                ,header:header
                ,body:JSON.stringify(Data)
            }).then((response)=>response.json())
            .then((response)=>{
            console.log(response);
            if(response[0].result=="1"){
                localStorage.setItem('app-token', response[0].token);
                setMsg("Logged In Successfully! Redirecting......");
                Logout();
                    
            }else if(response[0].result=="2"){
                setError("InCorrect UserName Or Password!!!");
            }else{
                setError("Some Error Occured!!!");
            }
            }).catch((err)=>{
                setError(err);
                console.log(err) ;
            })
        
        } catch (error) {
          console.error(error);
          setError("Some Error Occured");
        }
    }else{
        try {
            var url =   "http://localhost/react/register.php";
            var header = {
                "Accept": "application/json",
                "Content-type":"application/json"
            };
            var Data = {
                user:username,
                pass:password,
                name:name,
            };
            fetch(url,{
                method:"POST"
                ,header:header
                ,body:JSON.stringify(Data)
            }).then((response)=>response.json())
            .then((response)=>{
            console.log(response);
            if(response[0].result=="1"){
                setMsg("Registed Successfully! Please Login......");
                redd();
            }else if(response[0].result=="2"){
                setError("Some Error Occured!!!");
            }else{
                setError("Some Error Occured!!!");
            }
            }).catch((err)=>{
                setError(err);
                console.log(err) ;
            })
        
        } catch (error) {
          console.error(error);
          setError("Some Error Occured");
        }

    }
  
  };

  return(
  <Components.MidContainer>
    <Components.SignUpContainer signinin={signIn}>
        <Components.Form onSubmit={handleFormSubmit}>
        <p>
               {
               msg!=""?
               <span className='success' style={spanSuccess} >{msg}</span>:
               <span className='error' style={spanError}>{error}</span>
           }

              
              
           </p>
            <Components.Title>Create Account</Components.Title>
            <Components.Input required type='text' value={name} placeholder='Name'  onChange={(e) => setName(e.target.value)} />
            <Components.Input required type='email' value={username} placeholder='Email' onChange={(e) => setUsername(e.target.value)}/>
            <Components.Input required type='password' value={password} placeholder='Password' onChange={(e) => setPassword(e.target.value)}/>
            <Components.Button type="submit" >Sign Up</Components.Button>
        </Components.Form>
    </Components.SignUpContainer>

    <Components.SignInContainer signinin={signIn}>
         <Components.Form onSubmit={handleFormSubmit}>
         <p>
               {
               msg!=""?
               <span className='success' style={spanSuccess} >{msg}</span>:
               <span className='error' style={spanError}>{error}</span>
           }

              
              
           </p>
             <Components.Title>Sign in</Components.Title>
             <Components.Input required type='email' placeholder='Email' value={username} onChange={(e) => setUsername(e.target.value)} />
             <Components.Input required type='password' placeholder='Password'value={password} onChange={(e) => setPassword(e.target.value)}/>
             <Components.Anchor href='#'>Forgot your password?</Components.Anchor>
             <Components.Button>Sigin In</Components.Button>
         </Components.Form>
    </Components.SignInContainer>

    <Components.OverlayContainer signinin={signIn}>
        <Components.Overlay signinin={signIn}>

        <Components.LeftOverlayPanel signinin={signIn}>
            <Components.Title>Welcome Back!</Components.Title>
            <Components.Paragraph>
                To keep connected with us please login with your personal info
            </Components.Paragraph>
            <Components.GhostButton onClick={() => toggle(true)}>
                Sign In
            </Components.GhostButton>
        </Components.LeftOverlayPanel>

        <Components.RightOverlayPanel signinin={signIn}>
              <Components.Title>Hello, Friend!</Components.Title>
              <Components.Paragraph>
                  Enter Your personal details and start journey with us
              </Components.Paragraph>
                  <Components.GhostButton onClick={() => toggle(false)}>
                      Sigin Up
                  </Components.GhostButton> 
         </Components.RightOverlayPanel>

        </Components.Overlay>
    </Components.OverlayContainer>

</Components.MidContainer>);


}


export default Login;