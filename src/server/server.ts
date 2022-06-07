import express, { Request, Response, NextFunction } from 'express';
import path from 'path';
import { ServerError } from '../types';
const app = express();

app.use(express.json());
app.use(express.static(path.resolve(__dirname, '../../build/')));

app.use('*', (req: Request, res: Response) => {
  console.log('Page not found.');
  return res.status(404).send('Page not found.');
});

app.use(
  '/',
  (
    err: ServerError,
    req: Request,
    res: Response,
    next: NextFunction
  ): Response => {
    const defaultErr: ServerError = {
      log: 'Express error handler caught unknown middleware error',
      status: 400,
      message: { err: 'An error occurred' },
    };
    const errorObj: ServerError = Object.assign({}, defaultErr, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
  }
);

app.post('/api/confirmBirthday', (
  err: ServerError,
  req: Request,
  res: Response,
  next: NextFunction
): Response => {
  const defaultErr: ServerError = {
    log: 'Error in confirm birthday',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj: ServerError = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
})

app.post('/api/confirmCookie', (
  err: ServerError,
  req: Request,
  res: Response,
  next: NextFunction
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

app.post('/api/getDrink', (
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

app.listen(process.env.PORT || 3000, () =>
  console.log('server is listening on port 3000')
);