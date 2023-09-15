 
import { useEffect, useState } from 'react';
import Card from './../Card/Card';

import PropTypes from 'prop-types';
const Cards = ({handleAddCourse}) => {

    const [courses, setCourses] =useState([]);
 
    useEffect(()=>{
         fetch('data.json')
        .then(res=>res.json())
        .then(data=>setCourses(data))
    },[]) 



    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 mx-auto ">
               {
                courses.map((courses,idx)=><Card key={idx}
                courses={courses}
                handleAddCourse={handleAddCourse}
                ></Card>)
            }
           
        </div>
    );
};

Cards.propTypes={
    handleAddCourse: PropTypes.func.isRequired,
}
export default Cards;