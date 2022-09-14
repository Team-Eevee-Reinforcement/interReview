const { Pool } = require('pg');

// add URI before compiling
const PG_URI = 'postgres://xylozikk:udaSKtyDVpTrHsLuRBTDZL3blX14X8Sj@jelani.db.elephantsql.com/xylozikk'

// create a new pool here using the connection string above
const pool = new Pool({
  connectionString: PG_URI
});

pool.connect( (err:string) => {
  if(err) throw err;
  console.log('Connected to pg database!')
});


export default {
  query: (text: string, params: string, values: any[]) => {
    console.log('executed query', text);
    return pool.query(params, values);
  }
};
