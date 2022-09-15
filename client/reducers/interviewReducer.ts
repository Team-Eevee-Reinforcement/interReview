import * as types from '../constants/actionTypes';

type stateType = {
  interviewList: any[],
  userId: number,
  interviewId: number,
  jobTitle: string,
  interviewStage: string,
  date: string
}

const initialState: stateType = {
  interviewList: [],
  userId:0,
  interviewId: 0,
  jobTitle: '',
  interviewStage: '',
  date: '',
};

const interviewReducer = (state=initialState, action: any) => {
  let interviewList;
  let userId;
  let interviewId;
  let jobTitle;
  let interviewStage;
  let date;
  
  switch(action.type) {
    // case types.UPDATE_MARKETS:
    //   const markets = action.payload;
    //   lastMarketId = -Infinity;
    //   totalCards = 0;
    //   totalMarkets = markets.length;
    //   marketList = state.marketList.slice();
      
    //   // push the markets on the market list
    //   markets.forEach(market => {
    //     const newMarket = {
    //       location: market.location,
    //       marketId: market.id,
    //       cards: market.cardCount,
    //     }

    //     marketList.push(newMarket);

    //     // update the last market id so we can have the right value if we create another
    //     lastMarketId = market.id > lastMarketId ? market.id : lastMarketId;
    //     totalCards += +market.cardCount;
    //   })

    //   return {
    //     ...state,
    //     marketList,
    //     lastMarketId,
    //     totalMarkets,
    //     totalCards,
    //     newLocation: '',
    //   };
      
    case types.ADD_INT:
      // increment ID
      interviewId = state.interviewId + 1;
      // create the new interview from provided data
      const newInterview = {
        userId: userId,
        interviewId: interviewId,
        jobTitle: action.payload.jobTitle,
        interviewStage: action.payload.interviewStage,
        date: action.payload.date,
      };

      // push the new interview on the interview list
      interviewList = state.interviewList;
      interviewList.push(newInterview);

      // return updated state
      return {
        ...state,
        interviewList,
        userId,
        interviewId,
        jobTitle: '',
        interviewStage:'',
        date:'',
      };


      case types.SET_JOB_TITLE:
        return { 
          ...state,
          jobTitle: action.payload,
        };

        case types.SET_INTERVIEW_STAGE:
        return { 
          ...state,
          interviewStage: action.payload,
        };

        case types.SET_DATE:
          return {
            ...state,
            date: action.payload,
        };
  //   case types.DELETE_CARD:
  //     interviewList = state.interviewList.slice();
  //     for(let i = 0; i < interviewList.length; i++) {
  //       if(interviewList[i].interviewId == action.payload && interviewList[i].cards > 0) {
  //         interviewList[i].cards--;
  //         break;
  //       }
  //     }
  //     return {
  //       ...state,
  //       interviewList,
  //     };

    default:
      return state;
  }
};

export default interviewReducer;