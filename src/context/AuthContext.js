import React, {createContext, useState} from 'react';

// define context
const AuthContext=createContext();

// define the provider
const AuthProvider=(props)=>{
    const [isLoggedIn, setIsLoggedIn]=useState(false);
    return(
        <AuthContext.Provider value={isLoggedIn}>
            {props.children}
        </AuthContext.Provider>
    );
}

// define consumer
const AuthConsumer=AuthContext.Consumer;

export {AuthConsumer, AuthProvider, AuthContext};