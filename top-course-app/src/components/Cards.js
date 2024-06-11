import React, { useState } from "react";
import { Card } from "./Card";

export const Cards = (props) => {
  const [likedCourse, setLikedCourse] = useState([]);
  let courses = props.courses;
  let allCourse = [];

  // show cards along with filter
  let category = props.category;
  // let setCategory =  props.setCategory;

  function getCourse() {
    if (category === "All") {
      Object.values(courses).forEach((courseCategory) => {
        courseCategory.forEach((courseData) => {
          allCourse.push(courseData);
        });
      });
      console.log(allCourse);
      return allCourse;
    } else {
      return courses[category];
    }
  }

  // ******** alternate code of above written code -->

  // if (!courses || courses.length === 0) {
  //   return <p>No courses Availabel</p>;
  // }
  // allCourse = Object.values(courses).flat();

  return (
    // here getCourse function can be replaced by allCourse
    <div className="card-wrapper">
      {getCourse().map((course) => {
        return (
          <Card
            course={course}
            key={course.id}
            likedCourse={likedCourse}
            setLikedCourse={setLikedCourse}
          />
        );
      })}
    </div>
  );
};
