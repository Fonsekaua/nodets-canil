import type { Request, Response } from "express";
import { CreateMenuObject } from "../../helpers/CreateMenuObject/index.js";
import { Pet } from "../../models/Pet/index.js";
export const search = (req: Request, res: Response) => {
    let query: string = req.query.q as string;
    let list = Pet.GetFromName(query)

    if(!query){
        res.redirect("/");
        return;
    }
    res.render('pages/pages.mustache',{
        menu: CreateMenuObject(''),
        list,
        query
    })
}