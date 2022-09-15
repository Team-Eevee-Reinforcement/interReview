import express from 'express';
// import { Request, Response } from "express";
import path from 'path';
import cardRouter from './routes/cardRouter';
import interviewRouter from './routes/interviewRouter';
import researchRouter from './routes/researchRouter';
import userRouter from './routes/userRouter';

const axios = require('axios');

const PORT = 3000;

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
  res.render(path.resolve(__dirname, '../client/pages/index.ejs'), {client_id: clientID});
});

app.get('/login/oauth', (req: any, res: any) => {
  const requestToken = req.query.code;
  axios({
    method: 'post',
    url: `https://github.com/login/oauth/access_token?client_id=${clientID}&client_secret
    =${requestToken}`,
    headers: {
      accept: 'application/json'
    }
  }).then((res: any) => {
    access_token = res.data.access_token
    res.redirect('/success');
  })

})

app.get('/success', (req: any, res: any) => {
  axios({
    method: 'get',
    url: `https://api.github/com/user`,
    headers: {
      Authorization: 'token ' + access_token
    }
  }).then((response: any) => {
    res.render('pages/sucess', { userData: response.data })
  })
});

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

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`)
});

module.exports = app;