import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Button, Input, CardFooter
    } from 'reactstrap';

const CoursePreview = () => {

  const [courses, setCourses] = useState([])
  const [search, setSearch] = useState();


  useEffect(() => {
    const getCourses = async () => {
      const results = await axios(
        'https://quze-intern-test.s3.us-east-2.amazonaws.com/course-data.json'
      )
      setCourses(results.data)
    }
  getCourses()
  }, [])  

  const onChange = e => {
      setSearch(e.target.value.toLowerCase());
  }

    return (
        <>
        <h2 className="text-center">Welcome to the search for courses.</h2>
        <h4 className="text-center">Write a word and the application will return the available courses</h4>
        <Input 
            type="text" 
            placeholder="Search a Course"
            onChange={onChange}    
        />
        <div className="row d-flex">
           {courses.map(course => (
                course.title.toLowerCase().indexOf(search) !== -1 &&
                    <div key={course.courseId}  className="col-md-4 p-2 d-flex">
                        <Card className="w-100">
                            <CardImg className="imageCard" src={course.imgUrl} alt='Image Not Found' />
                            <CardBody>
                                <CardTitle>Title: {course.title}</CardTitle>
                                <CardText>Author: {course.author}</CardText>
                                <CardText>Category: {course.category}</CardText>
                                <CardText>Language: {course.language}</CardText>
                            </CardBody>
                            <CardFooter>
                                <Link 
                                  to={{
                                    pathname: `/detail/${course.courseId}`, 
                                    state: {
                                      courseId: course.courseId
                                    }
                                  }}>
                                  <Button color="primary">View More</Button>
                                </Link>
                            </CardFooter>
                        </Card>
                    </div>
           ))}
        </div>
        </>
     );
}
 
export default CoursePreview;