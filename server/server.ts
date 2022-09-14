const express = require('express');
// import { Request, Response } from "express";
const path = require('path');

const cardRouter = require('./routes/cardRouter');
const interviewRouter = require('./routes/interviewRouter');
const researchRouter = require('./routes/researchRouter');
const userRouter = require('./routes/userRouter');

const PORT = 3000;

const app = express();

/**
 * Automatically parse urlencoded body content and form data from incoming requests and place it
 * in req.body
 */
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// routers
app.use('/card', cardRouter);
app.use('/interview', interviewRouter);
app.use('/research', researchRouter);
app.use('/user', userRouter);

/**
 * root
 */
app.get('/', (req: any, res: any) => {
  res.sendFile(path.resolve(__dirname, '../src/index.html'))
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