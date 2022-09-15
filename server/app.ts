import express, { Application, NextFunction, Request, Response } from 'express';
import cardRouter from './routes/cardRouter';
import interviewRouter from './routes/interviewRouter';
import researchRouter from './routes/researchRouter';
import userRouter from './routes/userRouter';

import path from 'path';

const axios = require('axios');

const app: Application = express();

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

app.get('/login/oauth', (req: Request, res: Response) => {
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

app.get('/success', (req: Request, res: Response) => {
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
 * root
 */
 app.get('/', (req: Request, res: Response) => {
  res.render(path.resolve(__dirname, '../src/index.html'), {client_id: clientID});
});

/**
 * 404 handler
 */
 app.use('*', (req: Request, res: Response) => {
  res.status(404).send('Not Found')
});

/**
 * Global error handler
 */
app.use((err: object, req: Request, res: Response, next: NextFunction) => {
  console.log(err);
  res.status(500).send({ error: err })
});

export default app;