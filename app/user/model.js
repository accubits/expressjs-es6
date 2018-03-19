import mongoose from 'mongoose';


var userSchema = mongoose.Schema({
    name:  { type: String, required: [true,'Name is required'] }, 
    email: { type: String, required: [true,'Email is required'] },
    provider:String,
    role:String
  });

  userSchema.post('save', function(error, doc, next) {
    console.log(error.errors.email.message,error.errors.name.message);
    next();
});   

let UserModel = mongoose.model('users',userSchema);  

   

UserModel.findAll = () =>{

    return UserModel.finds()
}

UserModel.saveUser = (user)=>{
     return user.save();
}

export default UserModel;
