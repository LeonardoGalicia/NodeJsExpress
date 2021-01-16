import UserFacade from './facade';
import { NextFunction, Request, Response } from 'express';
import HttpStatusCode from '../../commons/constants/HttpStatusCode';

/**
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise < void >}
 */
export async function findAll(req: Request, res: Response, next: NextFunction): Promise < void > {
    try {
       
        const users: any[] = await UserFacade.findAll();
      //let users:any[]=[];  
      res.status(HttpStatusCode.OK).json(users);
    } catch (error) {
        next(error);
    }
}
/**
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise < void >}
 */
export async function insert(req: Request, res: Response, next: NextFunction): Promise < void > {
    try {
       
        var ID=req.body.id;
        var NAME=req.body.name;
        const users: any = await UserFacade.insert(ID,NAME);
      //let users:any[]=[];  
      res.status(HttpStatusCode.OK).json(users);
    } catch (error) {
        next(error);
    }
}

/**
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise < void >}
 */
export async function modify(req: Request, res: Response, next: NextFunction): Promise < void > {
    try {
       
        var ID=req.body.id;
        var NAME=req.body.name;
        const users: any[] = await UserFacade.modify(ID,NAME);
      //let users:any[]=[];  
      res.status(HttpStatusCode.OK).json(users);
    } catch (error) {
        next(error);
    }
}

/**
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise < void >}
 */
export async function remove(req: Request, res: Response, next: NextFunction): Promise < void > {
    try {
       
        var ID=req.body.id;
        const users: number = await UserFacade.remove(ID);
      //let users:any[]=[];  
      res.status(HttpStatusCode.OK).json(users);
    } catch (error) {
        next(error);
    }
}

/**
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise < void >}
 */
export async function findById(req: Request, res: Response, next: NextFunction): Promise < void > {
    try {
       
        var ID=req.body.id;
        const users: any[] = await UserFacade.findById(ID);
      //let users:any[]=[];  
      res.status(HttpStatusCode.OK).json(users);
    } catch (error) {
        next(error);
    }
}