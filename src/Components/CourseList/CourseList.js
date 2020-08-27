import React from 'react';
import './CourseList.css'

const CourseList = (props) => {
    const {name, fee, description, image} = props.course;
    return (
        <div className="course-info">
            <div>                
                <h3>{name}</h3>
                <img src={image} alt=""/>
                <p>{description}</p>
                <h4>${fee}</h4>
                <button onClick={() => props.handleAddCourse(props.course)}>Enroll Now</button>
            </div>
        </div>
    );
};
export default CourseList;