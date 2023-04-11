// import React, { useState } from 'react'
import React from 'react'
import Nav from './Nav'
import { Link } from 'react-router-dom'


function Student() {
  return (
    <div>
      <Nav />
      <div className='first-FlexContainer'>
        <h1>Student Details</h1>
        <Link to='/addNewList'><button>Add new Student</button></Link>
      </div>

      <div className='table'>
        <table>
          <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Course</th>
            <th>Batch</th>
            <th>Change</th>
          </tr>
          </thead>
          <tbody>
            <tr>
            <td>John</td>
            <td>24</td>
            <td>MERN</td>
            <td>October</td>
            <td> <Link to='/updateStudentList'>Edit</Link></td>
            </tr>
            <tr>
            <td>John</td>
            <td>24</td>
            <td>MERN</td>
            <td>October</td>
            <td> <Link to='/updateStudentList'>Edit</Link></td>
            </tr>
            <tr>
            <td>John</td>
            <td>24</td>
            <td>MERN</td>
            <td>October</td>
            <td> <Link to='/updateStudentList'>Edit</Link></td>
            </tr>
            <tr>
            <td>John</td>
            <td>24</td>
            <td>MERN</td>
            <td>October</td>
            <td> <Link to='/updateStudentList'>Edit</Link></td>
            </tr>
            <tr>
            <td>Rohan</td>
            <td>44</td>
            <td>MERN</td>
            <td>October</td>
            <td> <Link to='/updateStudentList'>Edit</Link></td>
            </tr>
            <tr>
            <td>John</td>
            <td>24</td>
            <td>MERN</td>
            <td>Jun</td>
            <td> <Link to='/updateStudentList'>Edit</Link></td>
            </tr>
                        
          </tbody>
        </table>
      </div>

    </div>
  )
}

export default Student


   