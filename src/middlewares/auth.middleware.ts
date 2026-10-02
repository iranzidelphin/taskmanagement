import type { NextFunction, Request, Response } from "express";


const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  next();
};


export default authMiddleware;
