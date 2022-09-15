import express from 'express';
// import { Request, Response } from "express";
import path from 'path';
import cardRouter from './routes/cardRouter';
import interviewRouter from './routes/interviewRouter';
import researchRouter from './routes/researchRouter';
import userRouter from './routes/userRouter';

import axios from 'axios';

const app = express();

/**
 * Automatically parse urlencoded body content and form data from incoming requests and place it
 * in req.body
 */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routers
app.use('/card', cardRouter);
app.use('/interview', interviewRouter);
app.use('/research', researchRouter);
app.use('/user', userRouter);

let access_token = "";

const clientID = '03816ddd24e96db22b7c';

const clientSecret = '5249bed44c6a51eabd3dd0ae182fa03650f132c8';

app.set('view engine', 'ejs');

/**
 * root
 */
app.get('/', (req: any, res: any) => {
  res.render('pages/index', {client_id: clientID});
});

// Declare the callback route
app.get('/login/oauth', (req, res) => {

  // The req.query object has the query params that were sent to this route.
  const requestToken = req.query.code
  
  axios({
    method: 'post',
    url: `https://github.com/login/oauth/access_token?client_id=${clientID}&client_secret=${clientSecret}&code=${requestToken}`,
    // Set the content type header, so that we get the response in JSON
    headers: {
         accept: 'application/json'
    }
  }).then((response) => {
    access_token = response.data.access_token
    res.redirect('/success');
  })
})

app.get('/success', function(req, res) {

  axios({
    method: 'get',
    url: `https://api.github.com/user`,
    headers: {
      Authorization: 'token ' + access_token
    }
  }).then((response) => {
    res.render('pages/success',{ userData: response.data });
  })
});

// app.get('/login/oauth', (req: any, res: any) => {
//   const requestToken = req.query.code;
//   axios({
//     method: 'post',
//     url: `https://github.com/login/oauth/access_token?client_id=${clientID}&client_secret=${clientSecret}&code=${requestToken}`,
//     headers: {
//       accept: 'application/json'
//     }
//   }).then((response: any) => {
//     // console.log(res);
//     access_token = response.data.access_token
//     console.log("ACCESS TOKEN! ", access_token)
//     res.redirect('/success');
//     // res.redirect(path.resolve(__dirname, '../client/pages/success.ejs')); // res.redirect('/success');
//   })

// })

// app.get('/success', (req: any, res: any) => {
//   axios({
//     method: 'get',
//     url: `https://api.github/com/user`,
//     headers: {
//       Authorization: 'token ' + access_token
//     }
//   }).then((response: any) => {
//     console.log("finished get request", response.data)
//     res.render('../client/pages/success.ejs', { userData: response.data })
//   })
// });

/**
 * 404 handler
 */
app.use('*', (req: any, res: any) => {
  res.status(404).send('Not Found')
});

/**
 * Global error handler
 */
app.use((err: object, req: any, res: any, next: Function) => {
  console.log(err);
  res.status(500).send({ error: err })
});

export default app;