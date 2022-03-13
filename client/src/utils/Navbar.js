import React,{useContext, useEffect, useState} from 'react'
import { AccountContext, useAuth, useCollegeUpdate } from '../context/AuthContext';
import { getCollegeName } from '../service/Api';
import './Navbar.css';

const Navbar = () => {
    const [collegeData ,setCollegeData] = useState('');
    const {checkCollegeNameChanged} = useContext(AccountContext)

    useEffect(() => {
        const getCollegeData = async()=>{
               
            // console.log(localStorage.getItem('CollegeName'))
            // console.log(test)
            const res = await getCollegeName(localStorage.getItem('CollegeName'))
            // console.log('check res')
            setCollegeData(res)
            
        }
        getCollegeData()
    },[checkCollegeNameChanged])
    

  return (
    <div className='navbar-container'>
        <div className='navbar-logo-container'>
        <img className='navbar-logo' src= {localStorage.getItem('CollegeName') ? collegeData.logo:'https://www.logodesign.net/logo/abstract-arrow-with-financial-bars-76ld.png'} />
        </div>
        
        <div className='navbar-heading'>{localStorage.getItem('CollegeName') ? collegeData.name:'Compnay Name'}</div>
        <div className='navbar-user-name'>Vipen</div>
    </div>
  )
}

export default Navbar