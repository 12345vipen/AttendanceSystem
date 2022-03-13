import axios from 'axios'

export const url = "http://localhost:9000"


export const addCollegeName = async(data) => {
    try {
        const res = await axios.post(`${url}/addCollegeName`,data);
        if(res.status===203){
            alert('College already exits');
        }else{
            alert('College Added')
        }
        return res.data
    } 
    catch (error) {
        console.log(error, "error while calling adduser api")
    }
}