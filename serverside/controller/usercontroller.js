import user from "../model/user.js";

const addUser = async function (req, res) {
    // Validate request parameters, queries using express-validator
    
    const  username = req.body.eamilid;
    console.log(username);
    const ans = new user({eamilid:username});
    await ans.save();

    res.send('User added');
}

export default addUser;