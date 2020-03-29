import { Request, Response } from 'express';
import { Bookmark } from '../entity/Bookmark';

export const getBookmarks = async (req: Request, res: Response): Promise<void> => {
    try {   
        const bookmarks = await Bookmark.find();
        res.status(200).json(bookmarks);
    }catch(err) {
        console.log("Error while fetch bookmarks", err);
        res.status(500);
    }
}

export const addBookmark = async (req: Request, res: Response): Promise<void> => {
    try {
        const {
            title,
            url
        } = req.body;
        console.log("Request ", title, url);
        const bookmark = await Bookmark.create({
            title,
            url
        }).save();
        res.status(201).json(bookmark);
    }catch(err) {
        if(err.name === "ValidationError") {
            console.log("Validation Error while add bookmark", err);
            res.status(400);
        } else {
            console.log("Error while add bookmark", err);
            res.status(500);
        }
    }
}

export const deleteBookmark = async (req: Request, res: Response): Promise<void> => {
    try {
        const {id} = req.params;
        const bookmark = await Bookmark.findOne(id);
        if(!bookmark) {
            res.status(404);
        }else {
            await bookmark.remove();
            res.status(200).json(true);
        }
    }catch(err) {
        console.log("Error while delete bookmark", err);
        res.status(500);
    }
}