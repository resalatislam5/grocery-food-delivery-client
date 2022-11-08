import React, { Children, useContext } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';

const PrivateRoutes = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const location = useNavigate()
    if(loading){
        return <button className="btn btn-square loading"></button>
    }
    if(user && user.email){
        return children
    }
    return <Navigate to='/login' state={{from : location}} replace></Navigate>
};

export default PrivateRoutes;