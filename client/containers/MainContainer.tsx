import React, {Component} from 'react';
import {connect} from 'react-redux';
import InterviewContainer from './InterviewContainer';
// import CardsContainer from './CardsContainer'
class MainContainer extends Component{

     mapStateToProps = (store: any) => ({

      });
      
      mapDispatchToProps = (dispatch: any) => ({    
      });

    render() {
        return (
            <div className='container'>
                <div className='outerBox'>
                <h1 id='header'>InterReview</h1>
                <InterviewContainer/>
                {/* <CardsContainer /> */}
                </div>
            </div>
        )
    }
}



export default connect()(MainContainer);