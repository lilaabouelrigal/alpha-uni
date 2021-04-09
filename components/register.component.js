import React, { Component } from 'react';
import { Button, Icon } from 'semantic-ui-react';
import axios from 'axios';

export default class Navbar extends Component {
  constructor(props) {
    super(props);

    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeAddress=this.onChangeAddress.bind(this)
    this.onChangeBirthday=this.onChangeBirthday.bind(this)
    this.onChangeStatus=this.onChangeStatus.bind(this)
    this.onChangeName=this.onChangeName.bind(this)
    this.onChangePassword=this.onChangePassword.bind(this)

    this.state = { 
    name:'',
    birthday:'',
    address:'',
    status:'',
    email: '',
    password:''
    }
  }
  
  onChangeStatus(e){
    this.setState({
        status:e.target.value
    })
}
  onChangeAddress(e){
    this.setState({
        address:e.target.value
    })
}
onChangeName(e){
    this.setState({
        name:e.target.value
    })
}
onChangeBirthday(e){
    this.setState({
        birthday:e.target.value
    })
}
  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    })
  }
  onChangePassword(e) {
    this.setState({
      password: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {

      email: this.state.email,
      password: this.state.password,
      name:this.state.name,
      birthday:this.state.birthday,
      status:this.state.status,
      address:this.state.address
    }

    console.log(user);

    axios.post('http://localhost:5000/users/add', user)
      .then(
        alert("Registration successful !"));

    this.setState({
        
      email: '',
      password:''
      
    })
    

  }
render() {
    return (
        <div style = {{width:"100vh"}}>
        <form onSubmit={this.onSubmit}>
          <div className="form-group" style = {{width:"100vh",position: 'absolute', left: '50%', top: '16%',
        transform: 'translate(-50%, -50%)'}}> 
            <label>Email: </label>
            <input  type="text"
                required
                value={this.state.email}
                onChange={this.onChangeEmail}
                className="form-control"
               
                />
          </div>
          <div  style = {{width:"100vh",position: 'absolute', left: '50%', top: '27.8%',
        transform: 'translate(-50%, -50%)'}} className="form-group"> 
            <label>Password: </label>
            <input  input type="password" name="password"
                required
                value={this.state.password}
                onChange={this.onChangePassword}
                className="form-control"
                />
          </div>
          <div  style = {{width:"100vh",position: 'absolute', left: '50%', top: '39.9%',
        transform: 'translate(-50%, -50%)'}} className="form-group"> 
            <label>Full Name: </label>
            <input  input type="text"
                required
                value={this.state.name}
                onChange={this.onChangeName}
                className="form-control"
                />
          </div>

          <div  style = {{width:"100vh",position: 'absolute', left: '50%', top: '50.8%',
        transform: 'translate(-50%, -50%)'}} className="form-group"> 
            <label>Birthday (Please enter it in the MM/DD/YYYY format.): </label>
            <input  input type="text"
                required
                value={this.state.birthday}
                onChange={this.onChangeBirthday}
                className="form-control"
                />
          </div>
          <div  style = {{width:"100vh",position: 'absolute', left: '50%', top: '61.8%',
        transform: 'translate(-50%, -50%)'}} className="form-group"> 
            <label>Status (Full Time or Part Time): </label>
            <input  input type="text"
                required
                value={this.state.status}
                onChange={this.onChangeStatus}
                className="form-control"
                />
          </div>

          <div  style = {{width:"100vh",position: 'absolute', left: '50%', top: '72.8%',
        transform: 'translate(-50%, -50%)'}} className="form-group"> 
            <label>Street Address: </label>
            <input  input type="text"
                required
                value={this.state.address}
                onChange={this.onChangeAddress}
                className="form-control"
                />
          </div>












          <div>
    <Button  animated  style = {{width:"11vh",position: 'absolute', left: '50%', top: '86.8%',
        transform: 'translate(-50%, -50%)'}} type="submit" value="register" >
      <Button.Content visible>Register</Button.Content>
      <Button.Content visible>
        <Icon name='arrow right' />
      </Button.Content>
    </Button>
  
  </div>
  
        </form>
      </div>
    )
  }
}