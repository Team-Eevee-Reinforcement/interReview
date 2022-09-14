const { Pool } = require('pg');

// add URI before compiling

// create a new pool here using the connection string above
const pool = new Pool({
  connectionString: PG_URI
});

pool.connect( (err:string) => {
  if(err) throw err;
  console.log('Connected to pg database!')
});

// const makeTables = () => {
//   const createUserTable = () : void => {
//     const userTable : string = 'CREATE TABLE IF NOT EXISTS user(user_id SERIAL, name VARCHAR(255), e-mail VARCHAR(255), token VARCHAR(255))';
//   pool.query(userTable)
//   .then((res: any) => {
//     console.log(res);
//   })
//   .catch((err: any) => {
//     console.log(err);
//   });
// }

// createUserTable();

//   const createCardsTable = () : void => {
//     const cardsTable : string = 'CREATE TABLE IF NOT EXISTS cards(card_id SERIAL, interview_id SERIAL, question VARCHAR(255), category VARCHAR(255), card_notes VARCHAR(255), confidence_level VARCHAR(255), PRIMARY KEY (card_id), FOREIGN KEY (interview_id) REFERENCES interview (interview_id))';
//   pool.query(cardsTable)
//   .then((res: any) => {
//     console.log(res);
//   })
//   .catch((err: any) => {
//     console.log(err);
//   });
// }

// createCardsTable();
  
//   const createResearchTable = (): void => {
//     const researchTable: string = 'CREATE TABLE IF NOT EXISTS research(resource_id SERIAL, card_id SERIAL, url VARCHAR(255), PRIMARY KEY (resource_id), FOREIGN KEY (card_id) REFERENCES cards (card_id) )';
//   pool.query(researchTable)
//   .then((res: any) => {
//     console.log(res);
//   })
//   .catch((err: any) => {
//     console.log(err);
//   });
// }

//   const createInterviewTable = (): void => {
//     const interviewTable: string = 'CREATE TABLE IF NOT EXISTS interview(interview_id SERIAL, user_id SERIAL, job_title VARCHAR(255), interview_stage VARCHAR(255), PRIMARY KEY (interview_id), FOREIGN KEY (user_id) REFERENCES user (user_id))';
//   pool.query(interviewTable)
//   .then((res: any) => {
//     console.log(res);
//   })
//   .catch((err: any) => {
//     console.log(err);
//   });
// }
// }

// makeTables();



// params should be an object 
export default {
  query: (text: string, params: string, values: any[]) => {
    console.log('executed query', text);
    return pool.query(params, values);
  }
};
