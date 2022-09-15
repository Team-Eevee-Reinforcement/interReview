import React from 'react';
import InterviewDisplay from './InterviewDisplay';


const InterviewsDisplay = (props: any) => {
  const interviews = [];
  for (let i = 0; i < props.interview.length; i++) {
    interviews.push(<InterviewDisplay id={i} key={i}
                                // market={props.markets[i]}
                                // totalCards={props.totalCards}
                                // addCard={props.addCard}
                                // deleteCard={props.deleteCard}
                                />)
  }
  return(
    <div className="displayBox">
      <h4>Interviews</h4>
      {interviews}
    </div>
  )
}



export default InterviewsDisplay;