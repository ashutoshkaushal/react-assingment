import React, { Component } from "react";

import "semantic-ui-css/semantic.min.css";

import {
  Button,
  Grid,
  Icon,
  Menu
} from "semantic-ui-react";

import '../assets/css/navbar.css'

class App extends Component {
  state = {
    dropdownMenuStyle: {
      display: "none"
    }
  };

  handleToggleDropdownMenu = () => {
    let newState = Object.assign({}, this.state);
    if (newState.dropdownMenuStyle.display === "none") {
      newState.dropdownMenuStyle = { display: "flex" };
    } else {
      newState.dropdownMenuStyle = { display: "none" };
    }

    this.setState(newState);
  };

  render() {
    return (
      <div className="App">
        <Grid padded className="tablet computer only">
          <Menu inverted borderless fluid style={{marginBottom : "10px"}}>
              <Menu.Item header>Web Shopping</Menu.Item>
              <Menu.Menu position="right">
                  <Menu.Item as="a" href="/register">Home</Menu.Item>
                  <Menu.Item as="a" href="/login">Login</Menu.Item>
                  <Menu.Item as="a" href="/register">Regiter</Menu.Item>
              </Menu.Menu>
            
          </Menu>
        </Grid>
        
        
        <Grid padded className="mobile only">
          <Menu borderless fluid inverted fixed="top" size="huge">
            <Menu.Item header>Project Name</Menu.Item>
            <Menu.Menu position="right">
              <Menu.Item>
                <Button
                  basic
                  inverted
                  icon
                  toggle
                  onClick={this.handleToggleDropdownMenu}
                >
                  <Icon name="content" />
                </Button>
              </Menu.Item>
            </Menu.Menu>
            <Menu
              borderless
              fluid
              inverted
              vertical
              style={this.state.dropdownMenuStyle}
            >
                <Menu.Item as="a" href="/">Home</Menu.Item>
                  <Menu.Item as="a" href="/login">Login</Menu.Item>
                  <Menu.Item as="a" href="/signup">Signup</Menu.Item>
                 <Menu.Item as="a" href="/add_product">Upload</Menu.Item>
            </Menu>
          </Menu>
        </Grid>
        
        
      </div>
    );
  }
}

export default App;