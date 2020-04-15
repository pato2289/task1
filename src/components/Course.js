import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Button, Jumbotron, Container } from 'reactstrap'


const Course = (props) => {

    const[course, setCourse] = useState([])

    useEffect(() => {
        const getCourses = async () => {
          const results = await axios.get(
            'https://quze-intern-test.s3.us-east-2.amazonaws.com/course-data.json'
          )
          const filterId = props.match.params.id
          setCourse(results.data.filter(course => parseInt(course.courseId) === parseInt(filterId)))
        }
      getCourses()
      }, [])

      if(course[0] === undefined){
        return ( <> </> )
      }

      console.log(course[0])
       
      const { title, author, imgUrl, level, programType, shortDescription } = course[0]

        return (
          <>
              <div className="text-center">
              <h2>{title}</h2>
              <h4>Author: {author}</h4>
              <img src={imgUrl} className="img-fluid imageSize" alt="Image Not Found"/>
              <p className="mt-3">Level: {level}</p>
              <p>Program Type: {programType}</p>
              <p>{shortDescription}</p>    
                  <Link to='/'>
                    <Button color="danger">Back</Button>
                  </Link>
                  </div>
    
            
          </>  
          );
}
export default Course;