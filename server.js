import express from 'express';
import 'babel-polyfill';
import cors from 'cors';
import env from './env';
import adminRoute from './app/routes/adminRoute';

const app = express();

app.use(cors());

app.use(express.urlencoded({
	extended: false
}));
app.use(express.json());

app.use('/api', adminRoute);

const PORT = 5000
app.listen(PORT).on('listening', () => {
	console.log(`Live on ${PORT}`);;
})

export default app;
