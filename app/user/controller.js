import UserModel from './model'


class User {

	constructor (){
		this.username = 'shamon';

	}

	async getUser(req,res,next){

		let users;
		let newUser;
	
		try{
	
			/*
			* Create new user
			*/
			newUser = await UserModel.saveUser(new UserModel({name:'shamon',email:'test@test.com'}));
			/*
			* List all users
			*/
			users = await UserModel.find();

		}catch(e){
			 let error = new Error('Errors occured');
			 error.errors = e.errors
			 return next(error)
		}

		res.json({
			'name':this.username,
			'users':users,
			'newUser':newUser
		});
		

		

	}
	getUserPosts(){

		return new Promise(resolve=> {
			setTimeout(() => resolve('ok'), 1000); // it takes 2 seconds to make coffee
		  });
	}
}

export default User;