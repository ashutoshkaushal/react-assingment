import React, { Component } from "react";
import Axios from 'axios'
import "semantic-ui-css/semantic.min.css";
import {
  Button,
  Checkbox,
  Container,
  Form,
  Grid,
  Header
} from "semantic-ui-react";

import '../assets/css/sign.css'

export default class Login extends Component{
    constructor(){
        super();
    
    this.state ={
        email: '',
        pass:''
        }
    }
    
  onChangeEmail = e =>{
        this.setState({
            email:e.target.value   
        });
    }
  
    onChangePass = e =>{
        this.setState({
            pass:e.target.value
        });
    }    
    
    
    
    onSubmit = (e) =>{
        e.preventDefault();
        var user = {...this.state}
            console.log(user);
        
         Axios.post('http://localhost:4200/login',user)
        .then(res =>{            
             console.log(res.data);
             if(res.data.email === "admin@admin.com" && res.data.pass === "admin"){
               this.props.history.push('/admin')  
             }else if(res.data.email === "city@admin-admin.com" && res.data.pass === "admin"){
               this.props.history.push('/cityadmin')  
             }
             else{
                this.props.history.push('/login')  
             }
        });
         
    }
    

  render() {
    return (
      <div className="App">
        <Grid textAlign="center">
          <Container>
            <Header size="huge">Please sign in</Header>
            <Form size="large" onSubmit={this.onSubmit}>
              <Form.Input
                name="email"
                placeholder="Email address"
                type="email"
                onChange={this.onChangeEmail}
              />
              <Form.Input
                name="password"
                placeholder="Password"
                type="password"
                onChange={this.onChangePass}
              />
              <Form.Field>
                <Checkbox label="Remember me" />
              </Form.Field>
              <Button primary fluid size="large" type="submit" onSubmit={this.onSubmit}>
                Sign in
              </Button>
            <p className="message">Not registered? <a href="/signup">Create an account</a></p>
            </Form>
          </Container>
        </Grid>
      </div>
    );
  }
}

