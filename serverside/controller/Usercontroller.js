
import Student from "../model/Student.js";

import jwt from 'jsonwebtoken';

export const login = async (request, response) => {
    try 
    {
        const existuser = await Student.findOne({
            RollNumber:request.body.RollNumber,
            Password:request.body.Password
        })
     
        if(!existuser){
            const token = jwt.sign({
                RollNumber:request.body.RollNumber,
                Password:request.body.Password
            },'secret222')
            const addUser = new Student(request.body);
            await addUser.save();
         
            return response.json({status: 'ok',user:token});
        }
        else{
            return response.json({status:'ok',user:false});
        }


        

    } 
    catch (error) {
        console.log(error);
    }

}
