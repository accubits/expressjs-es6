import mongoose from 'mongoose';
import config from 'core/config'

mongoose.connect(config.dbUrl);

mongoose.connection.on('error', (err)=> {
    console.log('Mongoose default connection error: ' + err);
});
mongoose.connection.on('disconnected', ()=> {
	console.log('Mongoose default connection disconnected');
});

export default mongoose;