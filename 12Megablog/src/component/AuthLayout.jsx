import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function Protection ({children , authentication = true}) {

    const navigate = useNavigate()
    const [loader , setLoader] = useState()
    const authStatus = useSelector(state => state.auth.status)

    useEffect(()=>{
        // TODO make it more eassy
        // if(authStatus == true){
        //     navigate("/")
        // } else if(authStatus == false){
        //     navigate("/login")
        // }
        if(authentication && authStatus !== authentication){
            navigate("/login")
        }else if(!authentication && authStatus !==authentication){
            navigate("/")
        }

    },[authStatus , navigate , authentication])

    return loader ?<h1>Laoding...</h1> : <>{children}</>;
}

