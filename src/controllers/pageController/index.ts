import type { Request, Response } from "express";
import { CreateMenuObject } from "../../helpers/CreateMenuObject/index.js";
import { Pet } from "../../models/Pet/index.js";
export const home = (req: Request, res: Response) => {
    let list = Pet.GetAll();
    res.render('pages/pages.mustache', {
        menu: CreateMenuObject('all'),
        banner: {
            title: 'Todos os animais',
            background: 'allanimals.jpg'
        },
        list
    })
}
export const dogs = (req: Request, res: Response) => {
    let list = Pet.GetFromType('dog');
    res.render('pages/pages.mustache', {
        menu: CreateMenuObject('dog'),
        banner: {
            title: 'Cachorros',
            background: 'banner_dog.jpg'
        },
        list
    })
}

export const cats = (req: Request, res: Response) => {
    let list = Pet.GetFromType('cat');
    res.render('pages/pages.mustache', {
        menu: CreateMenuObject('cat'),
        banner: {
            title: 'Gatos',
            background: 'banner_cat.jpg'
        },
        list
    })
}
export const fishes = (req: Request, res: Response) => {
    let list = Pet.GetFromType('fish');
    res.render('pages/pages.mustache', {
        menu: CreateMenuObject('fish'),
        banner: {
            title: 'Peixes',
            background: 'banner_fish.jpg'
        },
        list
    })
}
