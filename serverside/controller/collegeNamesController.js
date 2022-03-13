import collegeName from "../model/collegeNames.js";

const addCollegeName = async function (req, res) {
    // Validate request parameters, queries using express-validator
    try {
        const alreadyExists = await collegeName.findOne({name:req.body.name});
        if(!alreadyExists){
            const ans = new collegeName(req.body);
            await ans.save();
           res.send('College added');
        }else{
            res.status(203);
            res.send('Already exits')
        }
        
    } catch (error) {
        res.status(400);
        res.send('Something Went Wrong')
    }
    
}
// const addTeacher = async function (req, res) {
//     // Validate request parameters, queries using express-validator
//     const findcollege =await college.findOneAndUpdate({collegeName:'vipen'},
//     {
//         $push:{
//             teachers:{
//                 teachername:'panda',
//                 subject:{
//                     name: "Scneien"
//                 }
//             }

//         }

//     });
    

// }

// export {addTeacher};
export default addCollegeName;
