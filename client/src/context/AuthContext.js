import React,{ createContext,useState} from 'react'

export const AccountContext = createContext(null);

const AccountProvider = ({children}) => {
    
    const [checkCollegeNameChanged, setCheckCollegeNameChanged] = useState(false);
    return (
        <div>
            <AccountContext.Provider value={{setCheckCollegeNameChanged,checkCollegeNameChanged}}>
                {children}
            </AccountContext.Provider>
        </div>
    )
}

export default AccountProvider