import React from 'react'
import Card from './Card';
import { useState } from 'react';

function Cards({courses, category}) {

  const [likedCourses, setLikedCourses] = useState([]);


  // returns you a list of all courses received from the api response
  function getCourses(){
    if(category === "All"){
        let allCourses = [];
        Object.values(courses).forEach((coursesCategory)=>{
          coursesCategory.forEach((course)=>{
            allCourses.push(course);
          })
        })
      return allCourses;
    }
    else{
      return courses[category];
    }
  }

  return (
    <div className='flex flex-wrap justify-center gap-4 mb-4'>
      {
        getCourses().map( (course) => (
          <Card key={course.id} 
          course = {course} 
          likedCourses={likedCourses} 
          setLikedCourses={setLikedCourses}/>
        ))
      }
    </div>
  )
}

export default Cards