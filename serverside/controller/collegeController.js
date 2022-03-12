import college from "../model/college.js";

const addCollege = async function (req, res) {
    // Validate request parameters, queries using express-validator
    
    const ans = new college(req.body);
    await ans.save();


    res.send('College added');
}
const addTeacher = async function (req, res) {
    // Validate request parameters, queries using express-validator
    const findcollege =await college.findOneAndUpdate({collegeName:'vipen'},
    {
        $push:{
            teachers:{
                teachername:'panda',
                subject:{
                    name: "Scneien"
                }
            }

        }

    });
    

}

export {addTeacher};
export default addCollege;
