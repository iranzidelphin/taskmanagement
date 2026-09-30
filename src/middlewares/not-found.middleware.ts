import { Request, Response } from "express";

  const notFoundmiddleware = (
    req: Request,
    res: Response
  ) : void =>{

    res.status(404).json({message: "Route not found"});
  }

  export default notFoundmiddleware;