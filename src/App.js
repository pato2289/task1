import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

import CoursePreview from './components/CoursePreview';
import Course from './components/Course';


function App() {

  return (
    <>
      <Router>
        <Switch>
          <div className="container">
            <Route exact path='/' component={CoursePreview} />
            <Route 
              path='/detail/:id' 
              render={(props) => <Course {...props} />} 
            />
          </div>
        </Switch>
      </Router>
    </>
  );
}

export default App;
