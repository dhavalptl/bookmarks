import express, {Router} from 'express';
import {getBookmarks, addBookmark, deleteBookmark} from '../controllers/bookmarks';
const router: Router = express.Router();

router
.route('/')
.get(getBookmarks)
.post(addBookmark);

router
.route('/:id')
.delete(deleteBookmark);

export default router;