import React, { Component } from "react";
import Axios from 'axios'
import "semantic-ui-css/semantic.min.css";
import {
  Button,
  Container,
  Form,
  Grid,
  Header,
    Select
} from "semantic-ui-react";


import '../assets/css/sign.css'

export default class Register extends Component{
    constructor(props){
        super(props);
    
    this.state ={
        name: '',
        dob:'',
        country:'',
        city:'',
        area:'',
        }
    }
    
    onChangeName = (e,data) =>{
        this.setState({country:data.value})
    }
  
    onChangedob = e =>{
        this.setState({
            dob:e.target.value
        });
    }    
    
     getCity= e =>{
        this.setState({
           city:e.target.value
        });
         Axios.post('http://localhost:4200/getArea',this.state.city)
             .then(res =>{
             console.log(res.data)
        })    
     }
     
      getArea = e =>{
        this.setState({
           area:e.target.value
        });
    }    
    
    onSubmit = (e) =>{
        e.preventDefault(); 
        var data = new FormData();
        data.append("name",this.state.name);
        data.append("dob",this.state.email);
        data.append("country",this.state.country);
        data.append("city",this.state.city);
        data.append("area",this.state.area);
        data.append("image",this.uploadInput.files[0]);
         const time = Date.now();
        data.append('time',time);
        console.log(data);
        
    Axios.post('http://localhost:4200/register',data).then(res =>{
            console.log(res);
          
        });   
            this.props.history.push('/register')  
            this.setState({
            name: '',
            pass:'',
            email:''
        })
    }
    
    componentDidMount= (state)=>{
        Axios.get("http://localhost:4200/getCity")
        .then(response => {
            var data = response.data;
//            return state.data[0].city_name;
            console.log(data[0].city_name);
            data.map((item,index)=>{
               return(

                this.setState({"country":item.city_name})
          )})
        })
    }

  render() {
    return (
      <div className="App">
        <Grid textAlign="center">
          <Container>
            <Header size="huge">Please Register {this.state.country}</Header>
            <Form size="large" onSubmit={this.onSubmit}>
        
              <Form.Input name="username" placeholder="Enter Name" type="text"    
                onChange={this.onChangeName} required />
                <input type="date" />
                    

                
                <label>Select Country</label>
                     <select onClick={this.getCity}>
                    <option value={this.state.country}>{this.state.country}</option>
                        </select>
               
        
                <select onClick={this.getArea}>
                    <option value="">Select Area</option>
                    <option value={this.state.city}>{this.state.city}</option>
                </select>
        
                <select>
                    <option value="">Select city</option>
                    <option value={this.state.area}>{this.state.area}</option>
                </select>
        
                    <input type="file" name="image" ref={ref => {this.uploadInput = ref;}}/>
                <Button primary fluid size="large" type="submit">
                Register
              </Button>
         
            </Form>
          </Container>
        </Grid>
      </div>
    );
  }
}

