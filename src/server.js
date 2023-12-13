import express from 'express';
import 'dotenv/config';
import path from 'path';
import morgan from 'morgan';
import jsxRender from './utils/jsxRender';
import apiAuthRouter from './routes/api/apiAuthRouter';
import authRouter from './routes/render/authRouter';
import cookieParser from 'cookie-parser';
import indexRouter from './routes/render/indexRouter';
import resLocals from './middlewares/resLocals';

const app = express();
const PORT = process.env.PORT || 3001;

app.engine('jsx', jsxRender);
app.set('view engine', 'jsx');
app.set('views', path.join(__dirname, 'components', 'pages'));

app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(resLocals);


app.use('/', indexRouter);
app.use('/auth', authRouter);
app.use('/api/auth', apiAuthRouter);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
