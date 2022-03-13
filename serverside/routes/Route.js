import express from 'express';
import addCollegeName, { getCollegeName } from '../controller/collegeNamesController.js';
import  { login } from '../controller/usercontroller.js'


// import cloudinary from 'cloudinary';


// cloudinary.config({
//     cloud_name:'saemarora',
//     api_key:'811255976848432',
//     api_secret:'CoB1cMxfKj59FjfqiBPeGqll0q4'
// })


const route = express.Router();


route.post('/addCollegeName',addCollegeName);
route.get('/getCollege/:name',getCollegeName)



route.post('/login',login);




export default route;