const db = require('./models.ts')
import express, { Request, Response, NextFunction } from 'express';
const controller: any = {};

controller.signUp = (req: Request, res: Response, next: NextFunction) => {
  // create cookie
  const {username, password, birthday} = req.body
  console.log(req.body)
  const is21: string = 'some string';
  db.query('INSERT INTO customers VALUES (DEFAULT, $1, $2, $3) RETURNING *', [
      username,
      password,
      birthday,
    ])
    .then((data: any) => {
        res.cookie(req.body.username, is21);
        return next()
    })
    .catch((err: any) => next({
      log: 'error in controller.signup',
      message: {err: err}
    }))
}

// db.query('INSERT INTO customers VALUES (DEFAULT, $1, $2, $3) RETURNING *', [
//   user,
//   password,
//   isAdmin,
// ])

module.exports = controller;