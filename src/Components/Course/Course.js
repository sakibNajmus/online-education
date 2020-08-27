import React from 'react';
import './Course.css'
import { useState } from 'react';
import fakeData from '../../fakeData';
import CourseList from '../CourseList/CourseList';
import Header from '../Header/Header';

const Course = () => {
const courseData = fakeData;
const [course, setCourse] = useState(courseData);
const [cart, setCart] = useState([]);

const handleAddCourse = (course) => {
    const newCart = [...cart, course];
    setCart(newCart);
}

return (
        <div className="course-container">

            <div className="cart-container">
                    <Header cart={cart}></Header>
            </div>

            <div className="title">
                <h3>Our Courses</h3>
            </div>

            <div className="course-list">
                {
                    course.map(courses => <CourseList handleAddCourse={handleAddCourse} course={courses} key={courses.id}></CourseList>)
                }
            </div>
        </div>
    );
};

export default Course;