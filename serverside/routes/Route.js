import express from 'express';
import addCollege, { addTeacher } from '../controller/collegeController.js';
import addUser from '../controller/usercontroller.js'


// import cloudinary from 'cloudinary';


// cloudinary.config({
//     cloud_name:'saemarora',
//     api_key:'811255976848432',
//     api_secret:'CoB1cMxfKj59FjfqiBPeGqll0q4'
// })


const route = express.Router();


route.post('/add', addUser);

route.post('/addCollege',addCollege);

route.get('/addTeacher',addTeacher);








export default route;