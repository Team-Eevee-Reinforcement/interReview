import React from 'react';

const InterviewCreator = (props:any) => (
  <div>
    <form>
      <h4>Create Interview</h4>
      <label htmlFor="newInterview">JobTitle:</label>
      <input id="jobTitle" 
      type="text"  
      onChange={e => {props.updateJobTitle(e.target.value)}} 
      value={props.jobTitle}
      />
      
      <label htmlFor="newInterview">Interview Stage:</label>
      <input id='interviewStage' 
      type="text" 
      onChange={e => {props.updateInterviewStage(e.target.value)}}
      value={props.interviewStage}
      />

      <label htmlFor="newInterview">Date:</label>
      <input id='date' 
      type='text' 
      onChange={e => {props.updateDate(e.target.value)}} 
      value={props.date}
      />
      
      <button type="button" 
      onClick={(e) => props.createInterview(e, props.userId, props.interviewId, props.jobTitle, props.interviewStage, props.date)}>
        Add Interview
        </button>
    </form>
  </div>
);

export default InterviewCreator;