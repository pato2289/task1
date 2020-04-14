import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import CoursePreview from './components/CoursePreview';
import Course from './components/Course';


function App() {

  return (
    <>
      <Router>
        <Switch>
          <div className="container">
            <Route exact path='/' component={CoursePreview} />
            <Route path='/detail/:id' component={Course} />
          </div>
        </Switch>
      </Router>
    </>
  );
}

export default App;
