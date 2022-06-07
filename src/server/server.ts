import express, { Request, Response, NextFunction } from 'express';
import path from 'path';
import { ServerError } from '../types';
const controller = require('./controller');
const app = express();

app.use(express.json());
app.use(express.static(path.resolve(__dirname, '../../build/')));
// check for existence of cookie, if no cookie -> either go to signup or login
// user signs up: post to database (/api/signup)
// user log in: get (see if user exists, if not, redirect to signup, if yes create cookie)



app.post('/api/signup', (
  req: Request,
  res: Response,
): Response => {
  return res.status(200).json("user created!");
})

app.post('/api/confirmCookie', (
  err: ServerError,
  req: Request,
  res: Response,
): Response => {
  const defaultErr: ServerError = {
    log: 'Error in confirm cookie',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj: ServerError = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
})

app.get('/api/getDrink', (
  err: ServerError,
  req: Request,
  res: Response,
  next: NextFunction
): Response => {
  const defaultErr: ServerError = {
    log: 'Error in getting drink',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj: ServerError = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
})

app.post('/api/saveDrink', (
  err: ServerError,
  req: Request,
  res: Response,
  next: NextFunction
): Response => {
  const defaultErr: ServerError = {
    log: 'Error in saving drink',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj: ServerError = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
})

app.post('/api/customDrink', (
  err: ServerError,
  req: Request,
  res: Response,
  next: NextFunction
): Response => {
  const defaultErr: ServerError = {
    log: 'Error in adding custom drink',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj: ServerError = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
})

app.use('*', (req: Request, res: Response) => {
  console.log('Page not found.');
  return res.status(404).send('Page not found.');
});


app.listen(process.env.PORT || 3000, () =>
  console.log('server is listening on port 3000')
);