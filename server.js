import express from 'express';
import bodyParser from 'body-parser';


import db from 'core/db'
import routes from 'core/routes'



const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use('/',routes);

app.get('/', (req, res) => res.send('Hello from es6'));

app.use((req,res,next)=>{
	var err = new Error('Route not found');
	err.status = 404;
	next(err);
});

app.use((err, req, res, next)=>{

	res.status(err.status || 500);

	 res.json({
		 title:err.message,
		 errors:err.errors
	 })
});

app.listen(3000, () =>{

	const newLocal = newFunction();
	newLocal('Server running');
});

function newFunction() {
	return console.log;
}

