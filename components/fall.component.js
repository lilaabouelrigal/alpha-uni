import React, { Component } from 'react';
import axios from 'axios';
import {Table}from 'react-bootstrap'
import { Button, Icon } from 'semantic-ui-react';

export default class CreateExercise extends Component {
 
render() {
  
    return (
      <div>
      <Table striped bordered hover size="sm"style = {{width:"100vh",position: 'absolute', left: '50%', top: '75%',
      transform: 'translate(-50%, -50%)'}}>
      <thead>
        <tr>
          <th>Date</th>
          <th>Academic Event </th>
          
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Sept 1 2021 (All day) to Feb 6 2021 (All day)</td>
          <td>Add/Drop (no fee) / Late Registration ($50 fee) on the Web</td>
        
        </tr>
        <tr>
          <td>Sept 1 2021 (All day)</td>
          <td>First Day of Classes - All Remote</td>
        
        </tr>
        <tr>
          <td>Sept 6 2021 (All day)</td>
          <td>In-Person Course Sessions Begin</td>
        
        </tr>
        <tr>
          <td>Oct 11 2021 (All day)</td>
          <td>Columbus Day – no classes</td>
        
        </tr>
        <tr>
          <td>Oct 14 2021 (All day)</td>
          <td>Applications for Graduation (Registrar’s Office) due</td>
        
        </tr>
        <tr>
          <td>Oct 18 2021 (All day)</td>
          <td>Advising begins for Spring 2022 registration</td>
        
        </tr>
        <tr>
          <td>Oct 18 2021 (All day) to Oct 22 2021 (All day)</td>
          <td>Mid-term Week</td>
        
        </tr>
        <tr>
          <td>Oct 23 2021 (All day)</td>
          <td>Mid-term advisory grades due</td>
        
        </tr>
        <tr>
          <td>Nov 1 2021 (All day) to Nov 8 2021 (All day)</td>
          <td>Winter Break 2021</td>
        
        </tr>
        <tr>
          <td>Dec 1 2021 (All day)</td>
          <td>Fall 2021 registration for Seniors on the Web</td>
        
        </tr>
        <tr>
          <td>Dec 3 2021 (All day)</td>
          <td>Fall 2021 registration for Juniors on the Web</td>
        
        </tr>
        <tr>
          <td>Dec 5 2021 (All day)</td>
          <td>Fall 2021 registration for Sophomores on the Web</td>
        
        </tr>
        <tr>
          <td>Dec 7 2021 (All day)</td>
          <td>Fall 2021 registration for First-Years on the Web</td>
        
        </tr>
        <tr>
          <td>Dec 9 2021 (All day)</td>
          <td>Continuing Registration for Spring 2022 for all students</td>
        
        </tr>
        <tr>
          <td>Dec 13 2021 (All day)</td>
          <td>Honors Convocation</td>
        
        </tr>
        <tr>
          <td>Dec 20 2021 (All day) to Dec 23 2021 (All day)</td>
          <td>Study/Make-Up Days</td>
        
        </tr>
        <tr>
          <td>Dec 27 2021 (All day) to Dec 30 2021 (All day)</td>
          <td>Final Exams</td>
        
        </tr>
        <tr>
          <td>Dec 30 2021 (All day)</td>
          <td>Fall Semester Ends</td>
        
        </tr>
        <tr>
          <td>Jan 3 2022 (All day)</td>
          <td>Commencement</td>
        
        </tr>
        
     
       
       
       
       
      </tbody>
    </Table>
  
    </div>
    

  
    
    )
  }
}