import express, { Request, Response, NextFunction } from 'express';
import path from 'path';
import { ServerError } from '../types';
const controller = require('./controller');
const cookieParser = require('cookie-parser');

const app = express();
app.use(cookieParser());

app.use(express.json());
app.use(express.static(path.resolve(__dirname, '../../build/')));
// check for existence of cookie, if no cookie -> either go to signup or login
// user signs up: post to database (/api/signup)
// user log in: get (see if user exists, if not, redirect to signup, if yes create cookie)



app.post('/api/signup', controller.signUp, (
  req: Request,
  res: Response,
): Response => {
  return res.status(200).json("user signed up!");
})

app.post('/api/login', controller.logIn, (
  req: Request,
  res: Response,
): Response => {
  return res.status(200).json("user logged in!");
})

app.get('/api/confirmCookies', controller.confirmCookies, (
  req: Request,
  res: Response,
): Response => {
  return res.status(200).json(res.locals.confirmCookies);
})

app.get('/api/getFavorites', (
  req: Request,
  res: Response,
): Response => {
  return res.status(200).json();
})

app.post('/api/saveDrink', (
  req: Request,
  res: Response,
): Response => {
  return res.status(200).json();
})

// app.post('/api/customDrink', (
//   err: ServerError,
//   req: Request,
//   res: Response,
//   next: NextFunction
// ): Response => {
//   const defaultErr: ServerError = {
//     log: 'Error in adding custom drink',
//     status: 400,
//     message: { err: 'An error occurred' },
//   };
//   const errorObj: ServerError = Object.assign({}, defaultErr, err);
//   console.log(errorObj.log);
//   return res.status(errorObj.status).json(errorObj.message);
// })

app.use('*', (req: Request, res: Response) => {
  console.log('Page not found.');
  return res.status(404).send('Page not found.');
});


app.listen(process.env.PORT || 3000, () =>
  console.log('server is listening on port 3000')
);