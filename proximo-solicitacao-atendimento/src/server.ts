import express from 'express';
import { router } from './routes';
import "reflect-metadata"
import './database';

import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(3333);
