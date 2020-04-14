import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Input,
  } from 'reactstrap';

const CoursePreview = () => {

  const [courses, setCourses] = useState([]);
  const [load, setLoad] = useState(true)
  const [search, setSearch] = useState();

  const getCourses = async () => {
    const results = await axios('https://quze-intern-test.s3.us-east-2.amazonaws.com/course-data.json')
    setCourses(results.data)
    setLoad(false)
  }

  useEffect(
    () => {
    getCourses();
  }, [load]
  )

  const onChange = e => {
      setSearch(e.target.value.toLowerCase());
      console.log(search)
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
        <div className="row">
           {courses.map(course => (
                course.title.toLowerCase().indexOf(search) !== -1 &&
                    <div className="col-md-4 p-2">
                        <Card key={course.courseId}>
                            <CardImg top width="100%" src={course.imgUrl} alt="Card image cap" />
                            <CardBody>
                                <CardTitle>Title: {course.title}</CardTitle>
                                <CardText>Author: {course.author}</CardText>
                                <CardText>Category: {course.category}</CardText>
                                <CardText>Language: {course.language}</CardText>
                                <Link  to={`/detail/${course.courseId}`}>
                                  <Button>View More...</Button>
                                </Link>
                            </CardBody>
                        </Card>
                    </div>
           ))}
        </div>
        </>
     );
}
 
export default CoursePreview;