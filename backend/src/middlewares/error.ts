import { NextFunction, Request, Response } from 'express';

const errorMiddleware = (err: any, _req: Request, res: Response, _next: NextFunction) => {
  console.log(err);

  if (err.isJoi) {
    return res.status(400)
      .json({ error: { message: err.details[0].message } });
  }

  if (err.code === 'P2002' && err.meta.target[0] === 'email') {
    return res.status(500)
      .json({ error: { message: 'Email already exists' } });
  }

  return res.status(500).json({ error: { message: 'Internal error' } });
};

export default errorMiddleware;
