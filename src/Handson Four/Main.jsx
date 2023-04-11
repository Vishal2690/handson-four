import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Contact from './Contact'
import Student from './Student'
import Error from './Error'
import AddNewList from './AddNewList'
import UpdateStudentList from './UpdateStudentList'



function Main() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Student" element={<Student />} />
          <Route path='/addNewList' element={<AddNewList />} />
          <Route path='/updateStudentList' element={<UpdateStudentList />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </BrowserRouter>


    </div>
  )
}

export default Main