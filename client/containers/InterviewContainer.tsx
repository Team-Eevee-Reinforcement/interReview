import React, {Component} from 'react';
import {connect} from 'react-redux';
import actions from '../actions/actionCreators';
import InterviewCreator from '../components/InterviewCreator';
import InterviewDisplay from '../components/InterviewDisplay';

//typescript??
// const mapStateToProps = store: {(userId: string), 
//     interviewId: string,
//     jobTitle: string,
//     interviewStage: se,
//     date: store.cards.date} 

const actionsCreators = new actions();
    
const mapStateToProps = (store: any) => ({
    userId: store.interview.userId, 
    interviewId: store.interview.interviewId,
    jobTitle: store.interview.jobTitle,
    interviewStage: store.interview.interviewStage,
    date: store.interview.date
  });

  const mapDispatchToProps = (dispatch: any) => ({
    createInterview: (e: any, userId: number, interviewId: number, jobTitle: string, interviewStage: string, date: string) => {
      dispatch(actionsCreators.createInterview(userId, interviewId, jobTitle, interviewStage, date))
    },
  
    updateJobTitle: (e: any) => {
      dispatch(actionsCreators.setJobTitle(e.target.value));
    },

    updateInterviewStage: (e: any) => {
      dispatch(actionsCreators.setInterviewStage(e.target.value));
    },

    updateDate: (e: any) => {
      dispatch(actionsCreators.setDate(e.target.value));
    },
  
  
//     deleteCard: (e) => {
//         console.log('deleteCard', e.target.name);
//         dispatch(actions.deleteCardThunk(e.target.name));
//     },
  
    fetchInterviewData: () => {    
      fetch('/interview', {
        method: 'GET',
      })
      .then(res => res.json())
    //   .then(markets => {
    //     dispatch(actions.updateMarkets(markets));
     // } )
      .catch(err => console.log('Error in fetchInterviewData:', err))
    }
  });
  
  class InterviewContainer extends Component<{[key: string]: any}, {}>{

    constructor(props: any) {
      super(props)
    }
  
    componentDidMount() {
      // fetch initial data from the database
      this.props.fetchInterviewData();
    }
  
    render() {
      console.log("THIS IS PROPS", this.props)
      return(
        <div className="innerbox">
          <InterviewCreator 
            jobTitle={this.props.updateJobTitle}
            interviewStage={this.props.updateInterviewStage}
            date={this.props.updateDate}
          />
          <hr/> 
          <InterviewDisplay interview={this.props}

                            deleteCard={this.props.deleteCard} />
        </div>
      )
    }
  
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(InterviewContainer);