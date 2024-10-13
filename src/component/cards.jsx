import React, { useState, useEffect } from 'react';
import Card from './card';

const Cards = ({ courses = {}, category = "All" }) => {
  const [likedCourses, setLikedCourses] = useState([]);

  useEffect(() => {
    console.log("Courses object:", courses);
    console.log("Selected category:", category);
  }, [courses, category]);

  function getCourses() {
    if (category === "All") {
      let allCourses = [];
      Object.values(courses).forEach((array) => {
        if (Array.isArray(array)) {
          allCourses.push(...array);  
        }
      });
      return allCourses;
    } 
    else if (courses[category]) {
      return courses[category];
    }
  }

  const filteredCourses = getCourses();

  return (
    <div className="cards-container">
      {filteredCourses.length > 0 ? (
        filteredCourses.map((course) => (
          <Card
            course={course}
            key={course.id}
            likedCourses={likedCourses}
            setLikedCourses={setLikedCourses}
          />
        ))
      ) : (
        <p>No courses available for this category.</p>
      )}
    </div>
  );
};

export default Cards;
