import React from 'react'
import Nav from './Nav'

function UpdateStudentList() {
    return (
        <div>
            <Nav/>
        <div className='Main'>
            <div className='sub-main'>
                <fieldset>
                    <label>Name</label>
                    <input type="text" name='Name' />
                </fieldset>
                <fieldset>
                    <label>Age</label>
                    <input type="text" name='Name' />
                </fieldset>
                <fieldset>
                    <label>Course</label>
                    <input type="text" name='Name' />
                </fieldset>
                <fieldset>
                    <label>Batch</label>
                    <input type="text" name='Name' />
                </fieldset>
            </div>
            <div className='btn'>
                <button>Cancle</button>
                <button>Submit</button>
            </div>

        </div>
        </div>
    )
}

export default UpdateStudentList