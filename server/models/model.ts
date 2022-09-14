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

const createUserTable = () : void => {
  let status : boolean = false;
  const userTable : string = 'CREATE TABLE IF NOT EXISTS';
}

// params should be an object 
module.exports = {
  query: (text: string, params: any, callback: Function) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  }
};
