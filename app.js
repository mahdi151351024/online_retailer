import bodyParser from 'body-parser';
import 'dotenv/config';
import express from 'express';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import xss from 'xss-clean';
const cores = require('cors');

const app = express();

app.use(cores());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(xss());
app.use(helmet());
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
});
app.use(limiter);

export default app;
