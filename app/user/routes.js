import express from 'express';
import User from './controller';

const userRoutes = express.Router();
const user       = new User();

userRoutes.get('/',user.getUser.bind(user));

export default userRoutes;   