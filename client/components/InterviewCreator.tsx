import React from 'react';

const InterviewCreator = (props:any) => (
  <div>
    <form>
      <h4>Create Interview</h4>
      <label htmlFor="newInterview">JobTitle:
      <input id="jobTitle" 
      type="text"  
      onChange={props.updateJobTitle} 
      ///value={props.jobTitle}
      /></label>
      
      <label htmlFor="newInterview">Interview Stage:
      <input id='interviewStage' 
      type="text" 
      onChange={props.updateInterviewStage}
      ///value={props.interviewStage}
      /></label>

      {/* <label htmlFor="newInterview">Date:
      <input id='date' 
      type='text' 
      onChange={e => {props.updateDate(e.target.value)}} //add handler
      ////value={props.date}
      /></label> */}

    
    <label htmlFor="newInterview">Date:
      <input id='date' 
      type='text' 
      onChange= {props.updateDate} 
      /></label>
      
      <button type="button" 
      onClick={props.createInterview}>
        Add Interview
        </button>
    </form>
  </div>
);

export default InterviewCreator;