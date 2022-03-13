import React, { useState,useEffect,useContext } from "react";
import { addCollegeName } from "../../service/Api";
import './AddCollegeNames.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useHistory} from 'react-router-dom';
import { AccountContext } from "../../context/AuthContext";
import CustomizedSnackbars from "../../utils/SnackbarNotification";

export default function AddCollegeNames() {
  const [name, setName] = useState("");
  const [logo, setLogo] = useState("");
  const [adminEmailId, setadminEmailId] = useState("");
  const {checkCollegeNameChanged,setCheckCollegeNameChanged} = useContext(AccountContext)
  const navigate = useHistory()
  const [open,setOpen] = useState(false);
  const [severity,setSeverity] = useState('')
  const [message,setMessage] = useState('College Created!')

  const goTo=(change)=>{
      navigate.push(`./${change}`)
  }
  const changeseverity=(change)=>{
    setSeverity(change);
    
  }
  const changeMessage=(change)=>{
    setMessage(change);
  }
  async function handleSubmit(event) {
    event.preventDefault();
    if(name.length===0 || adminEmailId.length===0 || logo.length===0){
      setSeverity('warning')
      setMessage('Please fill all the details!')
      setOpen(true)
      return
    }
    await addCollegeName({name:name,logo:logo,adminEmailId:adminEmailId},changeseverity,changeMessage,goTo);
    setOpen(true)
    setCheckCollegeNameChanged(!checkCollegeNameChanged)
    localStorage.setItem('CollegeName', name);
    
  }
  

  

  return (
    <div className="addcollegenames-container">
      {open && <CustomizedSnackbars open={open} setOpen={setOpen} severity={severity} message={message} />}
      <TextField
          required
          className="my-3"
          id="outlined-required"
          label="College Name"
          placeholder="Your College Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          required
          className="my-3"
          id="outlined-required"
          label="College Logo url"
          placeholder="Your College Logo url"
          value={logo}
          onChange={(e) => setLogo(e.target.value)}
        />
        <TextField
          required
          className="my-3"
          id="outlined-required"
          label="College Admin Email id"
          placeholder="College Admin Email id"
          value={adminEmailId}
          onChange={(e) => setadminEmailId(e.target.value)}
        />

        <Button onClick={handleSubmit} style={{backgroundColor:'#77002E', color:'white'}} >Create collge</Button>
    </div>
  );
}