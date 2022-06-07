const db = require('./models.ts')
import express, { Request, Response, NextFunction } from 'express';
const controller: any = {};

function calculate_age(dob: Date) : Number { 
  var diff_ms = Date.now() - dob.getTime();
  var age_dt = new Date(diff_ms); 

  return Math.abs(age_dt.getUTCFullYear() - 1970);
}

controller.signUp = (req: Request, res: Response, next: NextFunction) => {
  const {username, password, birthday} = req.body
  console.log('req.body in signUp', req.body)
  const age = calculate_age(new Date(birthday[0], birthday[1], birthday[2]));
  const is21: string = (age >= 21) ? 'true' : 'false';
  db.query('INSERT INTO users VALUES (DEFAULT, $1, $2, $3) RETURNING *', [
      username,
      password,
      birthday.join("-"),
    ])
    .then(() => {
        res.cookie('username', username, {
          maxAge: 1000 * 60 * 60 * 24,
          secure: true,
          httpOnly: true,
        });
        res.cookie('is21', is21, {
          maxAge: 1000 * 60 * 60 * 24,
          secure: true,
          httpOnly: true,
        });
        console.log('cookies created')
        return next();
    })
    .catch((err: any) => next({
      log: 'error in controller.signup',
      message: {err: err}
    }))
}

controller.logIn = (req: Request, res: Response, next: NextFunction) => {
  const query = 'SELECT * FROM USERS WHERE username = $1 AND password = $2'
  const {username, password} = req.body;
  db.query(query, [
      username,
      password,
    ])
    .then((data: any) => data.rows[0])
    .then((data: any) => {
        const birthday = [...data.birthday.split("-")];
        const age = calculate_age(new Date(birthday[0], birthday[1], birthday[2]));
        const is21: string = (age >= 21) ? 'true' : 'false';
        res.cookie('username', username, {
          maxAge: 1000 * 60 * 60 * 24,
          secure: true,
          httpOnly: true,
        });
        res.cookie('is21', is21, {
          maxAge: 1000 * 60 * 60 * 24,
          secure: true,
          httpOnly: true,
        });
        console.log('cookies created')
        return next();
    })
    .catch((err: any) => next({
      log: 'error in controller.login',
      message: {err: err}
    }))
}

controller.confirmCookies = (req: Request, res: Response, next: NextFunction) => {
	console.log(req.cookies);
	if (req.cookies.username) {
		res.locals.confirmCookies = { status: true, cookies: req.cookies };
	} else {
		res.locals.confirmCookies = false;
	}
	return next();
};


// "1995-08-07".split("-")
module.exports = controller;

