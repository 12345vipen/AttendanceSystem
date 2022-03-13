import axios from 'axios'
import CustomizedSnackbars from '../utils/SnackbarNotification';

export const url = "http://localhost:9000"


// Add College functions 

export const addCollegeName = async(data,changeseverity,changemessage,goTo) => {
    try {
        const res = await axios.post(`${url}/addCollegeName`,data);
        if(res.status===200){
            changemessage('Collge created!')
            changeseverity("success")
            setTimeout(() => {
                goTo('AdminDashboard');
            }, 1000);
            
        }
        if(res.status===203){
            changemessage('Collge Already exists!')
            changeseverity("info")
        }
        return res.data
    } 
    catch (error) {
        console.log(error, "error while calling adduser api")
    }
}
export const getCollegeName = async(data) => {
    try {
        const res = await axios.get(`${url}/getCollege/${data}`);
        return res.data
    } 
    catch (error) {
        console.log(error, "error while calling adduser api")
    }
}


// Login functions

export const login = async(data,handlechange) => {
    try {
        const res = await axios.post(`${url}/login`,data);
        if(res.data.user!==false){
            handlechange();
        }
        return res.data
    } 
    catch (error) {
        console.log(error, "error while calling login api")
    }
}