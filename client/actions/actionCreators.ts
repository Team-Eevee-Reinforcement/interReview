import * as types from '../constants/actionTypes';

class actions {

//Add Interview card
 addInt = ( jobTitle: string, interviewStage: string, date: string) => ({
    type: types.ADD_INT,
    payload: {jobTitle, interviewStage, date},
})

setJobTitle = (jobTitle: string) => ({
    types: types.SET_JOB_TITLE,
    payload: jobTitle,
})

 setInterviewStage = (interviewStage: string) => ({
    types: types.SET_INTERVIEW_STAGE,
    payload: interviewStage,
})

 setDate= (date: string) => ({
    type: types.SET_DATE,
    payload: date,
  })


 createInterview = (userId: number, interviewId: number, jobTitle: string, interviewStage: string, date: string) => (dispatch: any) => {
  
    fetch('/interview', {
      method: 'POST',
      body: JSON.stringify({ user_id: userId, job_title: jobTitle, interview_stage: interviewStage, date}),
      headers: {'Content-Type': 'application/json'},
    })
    .then(res => {
      if(res.status === 200) {
        dispatch(this.addInt (jobTitle, interviewStage, date));
      } else {
        console.log('in createInterview - Server returned status', res.status)
      }
    })  
    .catch(err => console.log('Error in createInterview fetch:', err));
  };
  
//Delete question card
 delInt = (interviewId: number) => ({
    type: types.DELETE_INT,
    payload:{interviewId}
})
//Edit question 
 editInt = (interviewId: number, jobTitle: string, interviewStage: string) => ({
    type: types.EDIT_INT,
    payload: {interviewStage},
})

// //Add question card
// type: 'ADD_CARD'
// //Delete question card
// type: 'DELETE_CARD'
// //Edit question 
// type: 'EDIT_CARD'
// //Add research in card
// type: 'ADD_RESEARCH'
// //Delete question card
// type: 'DELETE_RESEARCH'
// //Edit question 
// type: 'EDIT_RESEARCH'
}

export default actions;