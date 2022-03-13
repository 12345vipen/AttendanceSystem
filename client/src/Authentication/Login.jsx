import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { login } from '../service/Api';


const Login = () => {
    const history =useHistory();
    const [state, setstate] = useState({RollNumber:"",Password:""});
    let Name,value
    const handleChange=(e)=>{
        
        Name  = e.target.name;
        value = e.target.value;
        setstate({...state,[Name]:value});
    }
    const handlechangepage=()=>{
        history.push('/student')
    }

    const sendData=async(e)=>{
        e.preventDefault();
        
        await login(state,handlechangepage)
      
    }
    return (
        <>
            <div>
                <div>
                    <form >
                       
                        <input type="text" name="RollNumber" value={state.RollNumber} onChange={handleChange} />
                        <input type="text" name="Password" value={state.Password} onChange={handleChange} />
                        <button type='submit' onClick={sendData}>Submit</button>
                    </form>
                </div>

            </div>
        </>
    )
}

export default Login