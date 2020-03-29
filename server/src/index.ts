import "reflect-metadata";
import express, {Application} from 'express';
import { createConnection } from "typeorm";
import bookmarks from './routes/bookmarks';

(async () => {
    await createConnection().catch((error) => {
        console.error("Error while connecting postgres", error);
    });
    const application: Application = express();
    const PORT = process.env.PORT || 4000;
    application.use(express.json());
    application.use('/api/bookmarks', bookmarks);
    application.listen(PORT, () => {
        console.log(`Bookmarks api server is running on port ${PORT}`);
    });
})();