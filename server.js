import express from 'express';
import hockeyRouter from './routes/hockeyRouter.js';

const app = express();
const PORT = 1917;

app.set('view engine','pug');
app.use(express.static('public'));

app.use('/', hockeyRouter);

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}/home`);
})