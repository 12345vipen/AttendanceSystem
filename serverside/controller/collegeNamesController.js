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

const getCollegeName = async function (req, res) {
    // Validate request parameters, queries using express-validator
    
    try {
        const name = req.params.name
        const alreadyExists = await collegeName.findOne({name:name});
        console.log(req.body)
        console.log(alreadyExists)
        if(!alreadyExists){
           res.send('College Does not exits');
        }else{
            res.send(alreadyExists)
        }
        
    } catch (error) {
        res.status(400);
        res.send('Something Went Wrong')
    }
    
}

export {getCollegeName};
export default addCollegeName;
