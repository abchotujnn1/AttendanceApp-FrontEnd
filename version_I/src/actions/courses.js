const addCourse = (course)=>{
    return {
        type: "ADD_COURSE",
        course
    }
}

// Getting From Database and Setting in Redux Store

const getAndSetCourses = (filters = {})=>{
    //  console.log("COURSE")
    return (dispatch)=>{
        fetch('http://localhost:5000/get_all_courses',{
            method: ['POST'],
            body: JSON.stringify(filters)
        })
        .then(response => response.json())
        .then(response => {
            // console.log(response.allCourses)
            response.allCourses.forEach(course => {
                // console.log(course)
                dispatch(addCourse(course))
            });
        })
    }
}

export default getAndSetCourses;