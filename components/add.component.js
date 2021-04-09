import React, { Component } from 'react';
import axios from 'axios';
import {Form} from 'react-bootstrap';
import {Button} from 'semantic-ui-react'
export default class CreateExercise extends Component {
  constructor(props) {
    super(props);
    this.onClickClasses=this.onClickClasses.bind(this);
    this.Drop1stHandleClick=this.Drop1stHandleClick.bind(this);
    this.handleClick=this.handleClick.bind(this);
    this.onChangeID=this.onChangeID.bind(this);
    this.wrapper = React.createRef();
    this.state = {
         id:0,
        crn:0,
        crn2:'',
        id2:'',
        message:''
      }
   
  }
  Drop1stHandleClick(e){
    e.preventDefault();
   
 
          const user ={
            
            crn: this.state.crn2,
            id: this.props.match.params.id
          
  
          }
  
        axios.post('http://localhost:5000/section/deletesection/',user)
      
            
       
        .catch((error) => {
          console.log(error);
        })
  
        document.getElementById("form").reset()
        alert("Section dropped !")
  } 
onClickClasses(e){
  e.preventDefault()
  window.location='/classes/'+this.props.match.params.id

}
  onChangeID(e) {
    this.setState({
      crn2: e.target.value
    })
  }
  handleClick(e) {
    e.preventDefault();

    const user = {
      crn: this.state.crn2,
      id: this.props.match.params.id
    
    }

    console.log(user);

    axios.post('http://localhost:5000/section/findbycrn/'+this.props.match.params.id, user)
    
    .then(data=>{
      console.log(data)
      this.setState({
        message:data.data

      })

      console.log(this.state.message)
      alert(this.state.message)
   } )
    document.getElementById("form").reset()
   
    
    
  }





  

 
render() {
  
    return (
     <div><Form id="form">
     <Form.Group onChange={this.onChangeID} style = {{width:"100vh",position: 'absolute', left: '50%', top: '39%',
      transform: 'translate(-50%, -50%)'}} controlId="formBasicPassword">
       <Form.Label>CRN#</Form.Label>
       <Form.Control type="ID" />
     </Form.Group>
     
     <Button onClick={this.handleClick} style = {{width:"11vh",position: 'absolute', left: '40%', top: '50%'}} variant="Primary" type="submit">
       Add
     </Button>
     
     <Button onClick={this.Drop1stHandleClick} style = {{width:"11vh",position: 'absolute', left: '46%', top: '50%'}} variant="Primary" type="submit">
       Drop
     </Button>
     <Button onClick={this.onClickClasses} style = {{width:"20vh",position: 'absolute', left: '52%', top: '50%'}} variant="Primary" type="submit">
       Class Search
     </Button>
   </Form>
              </div>

  
    
    )
  }
}