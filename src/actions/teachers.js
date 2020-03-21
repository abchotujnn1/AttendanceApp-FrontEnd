/////////////////////////////// FOR TEACHERS ////////////////////////////////////////
export const setTeacher = (name,confirmed,courseAssigned) => ({
    type: 'ADD_TEACHER',
    teacher: {
        name,
        confirmed,
        courseAssigned
    }
})


export const getAndSetTeachers = () => {
    return (dispatch) => {
        fetch("http://localhost:5000/get_all_teachers",{
            method: 'POST'
        })
        .then(response => response.json())
        .then(response => {
            console.log("RESPONSE : ",response)
            response.allTeachers.forEach(teacher => {
                dispatch(setTeacher(teacher.name,teacher.confirmed,"Subject"))
            });
        })
    }
}   

export const updateTeacher = (whomToUpdate,whatToUpdate) => ({
    type: 'UPDATE_TEACHER',
    whatToUpdate,
    whomToUpdate
});

export const startUpdateTeacher = (whomToUpdate,whatToUpdate) => {
    console.log("ToUPdata",whatToUpdate)
    return (dispatch) => {
        fetch('http://localhost:5000/update_teacher',{
            method:['POST'],
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                whomToUpdate,
                whatToUpdate
            })
        })
        .then(response => response.json())
        .then(response => {
            console.log(response);
            const { status } = response;
            if(status){
                dispatch(updateTeacher(whomToUpdate,whatToUpdate))
            } 
        })
    }
}



////////////////////////////// FOR TEACHERS END /////////////////////////////////////