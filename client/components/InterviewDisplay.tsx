 import React from 'react';


 const InterviewDisplay = (props: any) => (
   <div className="interviewBox">
     <label htmlFor="interviewId">Interview ID: </label>
     <span id="interviewId">{props.interview.interviewId}</span>
     <p>
       <label htmlFor="jobTitle">Job Title: </label>
       <span id="jobTitle">{props.interview.jobTitle}</span>
     </p>
     <p>
       <label htmlFor="interviewStage">Interview Stage: </label>
       <span id="interviewStage">{props.interview.interviewStage}</span>
     </p>
     <p>
       <label htmlFor="interviewDate">Date: </label>
       <span id="interviewDate">{props.interview.date}</span>
     </p>
     <button type="button" value={props.interview.interviewId} onClick={props.deleteCard}>Delete Card</button>
     <button type="button" onClick={props.addQuestion}>Add Question</button>
   </div>
 );
 
 export default InterviewDisplay;