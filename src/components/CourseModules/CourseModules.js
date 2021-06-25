import React from 'react';
import CourseCard2 from '../CourseCard2/CourseCard2';

const CourseModules = (props) => {
    return (
        <div>
            {
                props.props.weeks.map(week=> <CourseCard2 key={week.week} title={props.props.describe} props={week}></CourseCard2>)
            }
        </div>
    );
};

export default CourseModules;