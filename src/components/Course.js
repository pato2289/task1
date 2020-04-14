import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap'


const Course = () => {
    return (
        <> 
            <h1>Desde Course</h1>
            <Link to='/'>
                <Button color="danger">Back</Button>
            </Link>
        </>
     );
}
 
export default Course;